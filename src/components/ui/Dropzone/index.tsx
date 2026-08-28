import { Group, Stack } from '@mantine/core';
import {
    FileWithPath,
    Dropzone as MantineDropzone,
    DropzoneProps as MantineDropzoneProps
} from '@mantine/dropzone';
import { type ReactElement, useEffect, useState } from 'react';

import { type StrictProps } from '../../../types/props';
import CloseButton from '../CloseButton';
import Icon from '../Icon';
import Text from '../Text';
import classes from './Dropzone.module.css';

export interface DropzoneProps
    extends Omit<StrictProps<MantineDropzoneProps>, 'children'> {
    maxSizeLabel?: string;
    onRemove?: () => void;
    showFilePreview?: boolean;
    showImagePreview?: boolean;
    showMetadataHelpers?: boolean;
    size?: 'md' | 'sm';
    variant?: 'file' | 'media';
}

type DropzoneComponent = ((props: DropzoneProps) => ReactElement) & {
    Accept: typeof MantineDropzone.Accept;
    FullScreen: typeof MantineDropzone.FullScreen;
    Idle: typeof MantineDropzone.Idle;
    Reject: typeof MantineDropzone.Reject;
};

const formatBytes = (bytes: number) => {
    if (bytes < 1000) return `${bytes} B`;

    const units = ['KB', 'MB', 'GB', 'TB'];
    let value = bytes / 1000;
    let unitIndex = 0;

    while (value >= 1000 && unitIndex < units.length - 1) {
        value /= 1000;
        unitIndex += 1;
    }

    const formattedValue = Number.isInteger(value)
        ? value.toString()
        : value.toFixed(1);
    return `${formattedValue} ${units[unitIndex]}`;
};

const formatAcceptedType = (type: string) => {
    if (type.startsWith('.') || type.endsWith('/*')) return type;

    const subtype = type.split('/')[1]?.split('+')[0];
    return subtype ? `.${subtype}` : type;
};

const formatAcceptedTypes = (accept: MantineDropzoneProps['accept']) => {
    if (!accept) return undefined;

    const acceptedTypes = Array.isArray(accept)
        ? accept
        : Object.entries(accept).flatMap(([mimeType, extensions]) =>
              extensions.length ? extensions : [mimeType]
          );

    return Array.from(new Set(acceptedTypes.map(formatAcceptedType))).join(
        ', '
    );
};

const Dropzone = (({
    accept,
    disabled,
    maxSize,
    maxSizeLabel,
    multiple,
    onDrop,
    onRemove,
    showFilePreview = false,
    showImagePreview = true,
    showMetadataHelpers = false,
    size = 'sm',
    variant = 'file',
    ...props
}: DropzoneProps) => {
    const [previewUrl, setPreviewUrl] = useState<string>();
    const [uploadedFile, setUploadedFile] = useState<FileWithPath>();

    const isFileVariant = variant === 'file';
    const isSmall = size === 'sm';
    const shouldShowFilePreview = showFilePreview && isFileVariant && !multiple;
    const resolvedMaxSizeDescription =
        maxSizeLabel ?? (maxSize ? formatBytes(maxSize) : undefined);
    const resolvedSupportedFormatsDescription = formatAcceptedTypes(accept);
    const shouldShowMetadataHelpers =
        showMetadataHelpers &&
        (!!resolvedSupportedFormatsDescription || !!resolvedMaxSizeDescription);

    const iconType = isFileVariant ? 'IconUpload' : 'IconPhotoPlus';
    const label = isFileVariant
        ? 'Drop your file here or click to browse.'
        : 'Add media here or click to browse.';

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleDrop = (files: FileWithPath[]) => {
        const imageFile = files.find((file) => file.type.startsWith('image/'));

        setPreviewUrl(
            showImagePreview && imageFile
                ? URL.createObjectURL(imageFile)
                : undefined
        );

        if (shouldShowFilePreview) {
            setUploadedFile(files[0]);
        }

        onDrop(files);
    };

    const handleRemove = () => {
        setUploadedFile(undefined);
        setPreviewUrl(undefined);
        onRemove?.();
    };

    const defaultContent = (
        <>
            <Icon
                color={isSmall ? 'var(--icon-subtle)' : 'var(--icon-accent)'}
                size="lg"
                type={iconType}
            />
            {!isSmall && (
                <Text color="var(--text-accent)" size="sm">
                    {label}
                </Text>
            )}
        </>
    );
    const previewContent = previewUrl ? (
        <img
            alt="Uploaded preview"
            className={classes.preview}
            src={previewUrl}
        />
    ) : null;

    return (
        <Stack gap="xs">
            {shouldShowFilePreview && uploadedFile ? (
                <Group
                    className={classes.filePreview}
                    justify="space-between"
                    wrap="nowrap"
                >
                    <Stack className={classes.filePreviewText} gap={0}>
                        <Text className={classes.fileName} size="sm">
                            {uploadedFile.name}
                        </Text>
                        <Text color="var(--text-success)" size="sm">
                            Success
                        </Text>
                    </Stack>
                    <CloseButton
                        aria-label="Remove file"
                        onClick={handleRemove}
                        size="md"
                    />
                </Group>
            ) : (
                <MantineDropzone
                    accept={accept}
                    classNames={{
                        inner: classes.inner,
                        root: classes.root
                    }}
                    data-disabled={disabled || undefined}
                    data-size={size}
                    disabled={disabled}
                    maxSize={maxSize}
                    multiple={multiple}
                    onDrop={handleDrop}
                    {...props}
                >
                    {previewContent ?? defaultContent}
                </MantineDropzone>
            )}
            {shouldShowMetadataHelpers && (
                <Group justify="space-between">
                    {resolvedSupportedFormatsDescription && (
                        <Text color="var(--text-medium)" size="xs">
                            Supported formats:{' '}
                            {resolvedSupportedFormatsDescription}
                        </Text>
                    )}
                    {resolvedMaxSizeDescription && (
                        <Text color="var(--text-medium)" size="xs">
                            Maximum size: {resolvedMaxSizeDescription}
                        </Text>
                    )}
                </Group>
            )}
        </Stack>
    );
}) as DropzoneComponent;

Dropzone.Accept = MantineDropzone.Accept;
Dropzone.FullScreen = MantineDropzone.FullScreen;
Dropzone.Idle = MantineDropzone.Idle;
Dropzone.Reject = MantineDropzone.Reject;

export default Dropzone;
