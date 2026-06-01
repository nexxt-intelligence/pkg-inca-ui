import { Group, Stack } from '@mantine/core';
import {
    FileWithPath,
    Dropzone as MantineDropzone,
    DropzoneProps as MantineDropzoneProps
} from '@mantine/dropzone';
import { useEffect, useState } from 'react';

import Icon from '../Icon';
import Text from '../Text';
import classes from './Dropzone.module.css';

export interface DropzoneProps extends Omit<MantineDropzoneProps, 'children'> {
    showImagePreview?: boolean;
    showMetadataHelpers?: boolean;
    size?: 'md' | 'sm';
    variant?: 'file' | 'media';
}

type DropzoneComponent = ((props: DropzoneProps) => JSX.Element) & {
    Accept: typeof MantineDropzone.Accept;
    FullScreen: typeof MantineDropzone.FullScreen;
    Idle: typeof MantineDropzone.Idle;
    Reject: typeof MantineDropzone.Reject;
};

const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;

    const units = ['KB', 'MB', 'GB', 'TB'];
    let value = bytes / 1024;
    let unitIndex = 0;

    while (value >= 1024 && unitIndex < units.length - 1) {
        value /= 1024;
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
    onDrop,
    showImagePreview = true,
    showMetadataHelpers = false,
    size = 'sm',
    variant = 'file',
    ...props
}: DropzoneProps) => {
    const [previewUrl, setPreviewUrl] = useState<string>();

    const isFileVariant = variant === 'file';
    const isSmall = size === 'sm';
    const resolvedMaxSizeDescription = maxSize
        ? formatBytes(maxSize)
        : undefined;
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
        onDrop(files);
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
        <Stack spacing="xs">
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
                onDrop={handleDrop}
                {...props}
            >
                {previewContent ?? defaultContent}
            </MantineDropzone>
            {shouldShowMetadataHelpers && (
                <Group position="apart">
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
