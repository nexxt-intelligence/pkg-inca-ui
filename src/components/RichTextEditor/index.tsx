import { Input, InputWrapperProps } from '@mantine/core';
import {
    RichTextEditor as MantineRTE,
    RichTextEditorProps as MantineRTEProps
} from '@mantine/tiptap';
import { Extension, mergeAttributes, Node } from '@tiptap/core';
import Placeholder from '@tiptap/extension-placeholder';
import {
    NodeViewProps,
    NodeViewWrapper,
    ReactNodeViewRenderer,
    useEditor
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as React from 'react';

import { ActionIcon, Button, Label } from '../../index';
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
}

export interface RichTextEditorProps
    extends Omit<MantineRTEProps, 'children' | 'editor' | 'onChange'> {
    children?: React.ReactNode;
    defaultValue?: string;
    description?: InputWrapperProps['description'];
    error?: InputWrapperProps['error'];
    extensions?: Extension[];
    hideToolbar?: boolean;
    label?: string;
    onAnswerRefClick?: (
        confirm: (attrs: Record<string, unknown>) => void,
        current?: Record<string, unknown>
    ) => void;
    onChange?: (html: string) => void;
    placeholder?: string;
    required?: boolean;
    tooltip?: string;
    withAsterisk?: boolean;
}

const RichTextEditor = React.forwardRef<
    RichTextEditorHandle,
    RichTextEditorProps
>(
    (
        {
            defaultValue = '',
            description,
            error,
            extensions = [],
            hideToolbar = false,
            label,
            onAnswerRefClick,
            onChange,
            placeholder,
            required,
            tooltip,
            withAsterisk,
            ...props
        },
        ref
    ) => {
        // Force update on selection change to update toolbar button states (can remove after upgrading mantine)
        const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

        const editor = useEditor({
            content: defaultValue,
            extensions: [
                StarterKit,
                Placeholder.configure({ placeholder }),
                AnswerRefNode,
                ...extensions
            ],
            onSelectionUpdate() {
                forceUpdate();
            },
            onUpdate({ editor }) {
                onChange?.(editor.getHTML());
            }
        });
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
            }
        }));

        return (
            <AnswerRefContext.Provider value={onAnswerRefClick ?? null}>
                <Input.Wrapper
                    description={description}
                    error={error}
                    label={
                        label ? <Label label={label} tooltip={tooltip} /> : null
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
                        data-answerref={onAnswerRefClick ? true : false}
                        editor={editor}
                        {...props}
                    >
                        {!hideToolbar && (
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
                            </MantineRTE.Toolbar>
                        )}
                        {onAnswerRefClick && (
                            <Button
                                className={classes.insertButton}
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
                </Input.Wrapper>
            </AnswerRefContext.Provider>
        );
    }
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;
