import { Input, InputWrapperProps } from '@mantine/core';
import {
    RichTextEditor as MantineRTE,
    RichTextEditorProps as MantineRTEProps
} from '@mantine/tiptap';
import { Extension, mergeAttributes, Node } from '@tiptap/core';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { NodeSelection } from '@tiptap/pm/state';
import {
    NodeViewProps,
    NodeViewWrapper,
    ReactNodeViewRenderer,
    useEditor
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as React from 'react';

import { ActionIcon, Button, Icon, Label, type LabelProps } from '../../index';
import { type StrictProps } from '../../types/props';
import classes from './RichTextEditor.module.css';

type OnAnswerRefClick = (
    confirm: (attrs: Record<string, unknown>) => void,
    current?: Record<string, unknown>
) => void;

const AnswerRefContext = React.createContext<null | OnAnswerRefClick>(null);

function AnswerRefBadge({ deleteNode, node, updateAttributes }: NodeViewProps) {
    const onAnswerRefClick = React.useContext(AnswerRefContext);

    return (
        <NodeViewWrapper as="span" contentEditable={false}>
            <span className={classes.answerRefActionsWrapper}>
                <span className={classes.answerRefActions}>
                    {onAnswerRefClick && (
                        <ActionIcon
                            color="gray.7"
                            icon="IconPencil"
                            onClick={() =>
                                onAnswerRefClick(
                                    (attrs) => {
                                        const { label = '', ...rest } = attrs;
                                        updateAttributes({
                                            extra: JSON.stringify(rest),
                                            label
                                        });
                                    },
                                    {
                                        label: node.attrs.label,
                                        ...parseExtra(node.attrs.extra)
                                    }
                                )
                            }
                            size="xs"
                        />
                    )}
                    <ActionIcon
                        color="gray.7"
                        icon="IconX"
                        onClick={() => deleteNode()}
                        size="xs"
                    />
                </span>
                <span className={classes.answerRefBadge}>
                    {node.attrs.label}
                </span>
            </span>
        </NodeViewWrapper>
    );
}

function parseExtra(extra: unknown): Record<string, unknown> {
    if (typeof extra !== 'string' || !extra) return {};
    try {
        return JSON.parse(extra) as Record<string, unknown>;
    } catch {
        return {};
    }
}

const AnswerRefNode = Node.create({
    addAttributes() {
        return {
            extra: {
                default: '{}',
                parseHTML: (el) => el.getAttribute('data-extra') ?? '{}',
                renderHTML: (attrs) => ({ 'data-extra': attrs.extra })
            },
            label: {
                default: '',
                parseHTML: (el) => el.getAttribute('data-label') ?? '',
                renderHTML: (attrs) => ({ 'data-label': attrs.label })
            },
            refId: {
                default: '',
                parseHTML: (el) => el.getAttribute('data-ref-id') ?? '',
                renderHTML: (attrs) => ({ 'data-ref-id': attrs.refId })
            }
        };
    },
    addNodeView() {
        return ReactNodeViewRenderer(AnswerRefBadge);
    },
    atom: true,
    group: 'inline',
    inline: true,
    name: 'answerRef',
    parseHTML() {
        return [{ tag: 'span[data-answer-ref]' }];
    },
    renderHTML({ HTMLAttributes }) {
        return [
            'span',
            mergeAttributes(HTMLAttributes, { 'data-answer-ref': '' })
        ];
    },
    selectable: false
});

export interface RichTextEditorHandle {
    getHTML: () => string;
    insertAnswerRef: (attrs: Record<string, unknown>) => void;
    insertContent: (content: Record<string, unknown> | string) => void;
    /** Inserts an image, or replaces the selected image. */
    insertImage: (image: RichTextImage) => void;
}

export interface RichTextEditorProps
    extends Omit<
        StrictProps<MantineRTEProps>,
        'children' | 'editor' | 'onBlur' | 'onChange'
    > {
    children?: React.ReactNode;
    defaultValue?: string;
    description?: InputWrapperProps['description'];
    disabled?: boolean;
    error?: InputWrapperProps['error'];
    extensions?: Extension[];
    hideToolbar?: boolean;
    label?: string;
    onAnswerRefClick?: (
        confirm: (attrs: Record<string, unknown>) => void,
        current?: Record<string, unknown>
    ) => void;
    /** Called with current HTML when focus leaves the editor and its toolbar. */
    onBlur?: (html: string) => void;
    onChange?: (html: string) => void;
    /** Uploads a selected file and returns the lasting URL to save in the HTML. */
    onImageUpload?: (file: File) => Promise<string>;
    onImageUploadError?: (error: unknown) => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    tooltip?: string;
    tooltipProps?: LabelProps['tooltipProps'];
    withAsterisk?: boolean;
}

export interface RichTextImage {
    alt?: string;
    src: string;
    title?: string;
}

const RichTextEditor = React.forwardRef<
    RichTextEditorHandle,
    RichTextEditorProps
>(
    (
        {
            defaultValue = '',
            description,
            disabled = false,
            error,
            extensions = [],
            hideToolbar = false,
            label,
            onAnswerRefClick,
            onBlur,
            onChange,
            onImageUpload,
            onImageUploadError,
            placeholder,
            readOnly = false,
            required,
            tooltip,
            tooltipProps,
            withAsterisk,
            ...props
        },
        ref
    ) => {
        // Force update on selection change to update toolbar button states (can remove after upgrading mantine)
        const [, forceUpdate] = React.useReducer((x) => x + 1, 0);
        const containerRef = React.useRef<HTMLDivElement>(null);
        const fileInputRef = React.useRef<HTMLInputElement>(null);
        const isPickingImageRef = React.useRef(false);
        const isUploadingImageRef = React.useRef(false);
        const onBlurRef = React.useRef(onBlur);
        onBlurRef.current = onBlur;
        const [isUploadingImage, setIsUploadingImage] = React.useState(false);
        const [imageUploadError, setImageUploadError] = React.useState(false);

        const editor = useEditor({
            content: defaultValue,
            editable: !disabled && !readOnly,
            extensions: [
                StarterKit,
                Placeholder.configure({ placeholder }),
                Image.configure({
                    resize: {
                        alwaysPreserveAspectRatio: true,
                        enabled: true,
                        minHeight: 50,
                        minWidth: 50
                    }
                }),
                AnswerRefNode,
                ...extensions
            ],
            onBlur({ editor, event }) {
                const nextTarget = event.relatedTarget;
                const html = editor.getHTML();
                window.setTimeout(() => {
                    if (
                        isPickingImageRef.current ||
                        isUploadingImageRef.current ||
                        (nextTarget &&
                            containerRef.current?.contains(
                                nextTarget as globalThis.Node
                            )) ||
                        containerRef.current?.contains(document.activeElement)
                    ) {
                        return;
                    }
                    onBlurRef.current?.(html);
                }, 0);
            },
            onSelectionUpdate() {
                forceUpdate();
            },
            onUpdate({ editor }) {
                onChange?.(editor.getHTML());
            }
        });
        React.useEffect(() => {
            editor?.setEditable(!disabled && !readOnly);
        }, [editor, disabled, readOnly]);
        React.useEffect(() => {
            const restoreFocusAfterPicker = () => {
                window.setTimeout(() => {
                    if (
                        isPickingImageRef.current &&
                        !isUploadingImageRef.current
                    ) {
                        isPickingImageRef.current = false;
                        if (!editor?.isDestroyed) editor?.commands.focus();
                    }
                }, 50);
            };
            window.addEventListener('focus', restoreFocusAfterPicker);
            return () =>
                window.removeEventListener('focus', restoreFocusAfterPicker);
        }, [editor]);

        const getSelectedImagePosition = React.useCallback(() => {
            if (!(editor?.state.selection instanceof NodeSelection))
                return null;
            const { selection } = editor.state;
            return selection.node.type.name === 'image' ? selection.from : null;
        }, [editor]);

        const insertImage = React.useCallback(
            (image: RichTextImage, replaceAt = getSelectedImagePosition()) => {
                if (!editor || editor.isDestroyed || disabled || readOnly)
                    return;
                if (
                    replaceAt !== null &&
                    editor.state.doc.nodeAt(replaceAt)?.type.name === 'image'
                ) {
                    editor
                        .chain()
                        .focus()
                        .setNodeSelection(replaceAt)
                        .updateAttributes('image', {
                            ...image,
                            height: null,
                            width: null
                        })
                        .run();
                } else {
                    editor.chain().focus().setImage(image).run();
                }
            },
            [editor, disabled, readOnly, getSelectedImagePosition]
        );

        const handleImageUpload = React.useCallback(
            async (file: File) => {
                if (!onImageUpload || isUploadingImage || disabled || readOnly)
                    return;
                const replaceAt = getSelectedImagePosition();
                const originalSrc =
                    replaceAt === null
                        ? null
                        : editor?.state.doc.nodeAt(replaceAt)?.attrs.src;
                setImageUploadError(false);
                isUploadingImageRef.current = true;
                setIsUploadingImage(true);
                try {
                    const src = await onImageUpload(file);
                    if (!src) throw new Error('Image upload returned no URL');
                    const imageStillSelected =
                        replaceAt !== null &&
                        editor?.state.doc.nodeAt(replaceAt)?.type.name ===
                            'image' &&
                        editor?.state.doc.nodeAt(replaceAt)?.attrs.src ===
                            originalSrc;
                    insertImage(
                        { alt: file.name, src },
                        imageStillSelected ? replaceAt : null
                    );
                } catch (error) {
                    setImageUploadError(true);
                    onImageUploadError?.(error);
                } finally {
                    isUploadingImageRef.current = false;
                    isPickingImageRef.current = false;
                    setIsUploadingImage(false);
                    if (!editor?.isDestroyed) editor?.commands.focus();
                }
            },
            [
                disabled,
                editor,
                getSelectedImagePosition,
                insertImage,
                isUploadingImage,
                onImageUpload,
                onImageUploadError,
                readOnly
            ]
        );
        const openImagePicker = () => {
            if (!fileInputRef.current) return;
            isPickingImageRef.current = true;
            fileInputRef.current.click();
        };
        const imageControlLabel = editor?.isActive('image')
            ? 'Replace image'
            : 'Insert image';
        const insertAnswerRef = React.useCallback(
            (attrs: Record<string, unknown>) => {
                const { label = '', ...rest } = attrs;
                editor
                    ?.chain()
                    .focus()
                    .insertContent({
                        attrs: {
                            extra: JSON.stringify(rest),
                            label,
                            refId: crypto.randomUUID()
                        },
                        type: 'answerRef'
                    })
                    .run();
            },
            [editor]
        );
        React.useImperativeHandle(ref, () => ({
            getHTML: () => editor?.getHTML() ?? '',
            insertAnswerRef: (attrs) => {
                insertAnswerRef(attrs);
            },
            insertContent: (content) => {
                editor?.chain().focus().insertContent(content).run();
            },
            insertImage: (image) => insertImage(image)
        }));

        return (
            <AnswerRefContext.Provider
                value={disabled || readOnly ? null : onAnswerRefClick ?? null}
            >
                <div ref={containerRef}>
                    <Input.Wrapper
                        description={description}
                        error={error}
                        label={
                            label ? (
                                <Label
                                    label={label}
                                    tooltip={tooltip}
                                    tooltipProps={tooltipProps}
                                />
                            ) : null
                        }
                        required={required}
                        withAsterisk={withAsterisk}
                    >
                        <MantineRTE
                            classNames={{
                                content: classes.content,
                                root: classes.root,
                                typographyStylesProvider:
                                    classes.typographyStylesProvider
                            }}
                            data-answerref={onAnswerRefClick ? true : undefined}
                            data-disabled={disabled || undefined}
                            data-readonly={readOnly || undefined}
                            editor={editor}
                            {...props}
                        >
                            {!hideToolbar && !disabled && !readOnly && (
                                <MantineRTE.Toolbar sticky>
                                    <MantineRTE.ControlsGroup>
                                        <MantineRTE.Bold />
                                        <MantineRTE.Italic />
                                        <MantineRTE.Strikethrough />
                                        <MantineRTE.Code />
                                    </MantineRTE.ControlsGroup>
                                    <MantineRTE.ControlsGroup>
                                        <MantineRTE.H1 />
                                        <MantineRTE.H2 />
                                        <MantineRTE.H3 />
                                    </MantineRTE.ControlsGroup>
                                    <MantineRTE.ControlsGroup>
                                        <MantineRTE.BulletList />
                                        <MantineRTE.OrderedList />
                                    </MantineRTE.ControlsGroup>
                                    <MantineRTE.ControlsGroup>
                                        <MantineRTE.Blockquote />
                                        <MantineRTE.Hr />
                                    </MantineRTE.ControlsGroup>
                                    {onImageUpload && (
                                        <MantineRTE.ControlsGroup>
                                            <MantineRTE.Control
                                                active={editor?.isActive('image')}
                                                aria-label={imageControlLabel}
                                                disabled={isUploadingImage}
                                                onClick={openImagePicker}
                                                title={imageControlLabel}
                                            >
                                                <Icon type="IconPhoto" />
                                            </MantineRTE.Control>
                                        </MantineRTE.ControlsGroup>
                                    )}
                                </MantineRTE.Toolbar>
                            )}
                            {onAnswerRefClick && !disabled && !readOnly && (
                                <Button
                                    className={classes.insertButton}
                                    disabled={disabled}
                                    leftIcon="IconStar"
                                    onClick={() =>
                                        onAnswerRefClick((attrs) => {
                                            insertAnswerRef(attrs);
                                        })
                                    }
                                    size="xs"
                                    variant="outline"
                                >
                                    Answer Reference
                                </Button>
                            )}
                            <MantineRTE.Content />
                        </MantineRTE>
                        {onImageUpload && !readOnly && !disabled && (
                            <input
                                accept="image/*"
                                aria-label="Choose image"
                                hidden
                                onChange={(event) => {
                                    const file = event.currentTarget.files?.[0];
                                    event.currentTarget.value = '';
                                    if (file) void handleImageUpload(file);
                                }}
                                ref={fileInputRef}
                                type="file"
                            />
                        )}
                        {imageUploadError && !readOnly && (
                            <span role="alert">
                                Could not upload image. Try again.
                            </span>
                        )}
                    </Input.Wrapper>
                </div>
            </AnswerRefContext.Provider>
        );
    }
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
