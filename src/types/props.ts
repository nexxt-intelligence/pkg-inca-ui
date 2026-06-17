import type * as React from 'react';

import {
    type InputSharedProps,
    type InputWrapperBaseProps
} from '@mantine/core';

export type StrictButtonProps<T, OmittedKeys extends keyof any = never> = Omit<
    React.ComponentPropsWithoutRef<'button'>,
    keyof StrictProps<T> | OmittedKeys
> &
    StrictProps<T>;

export type StrictInputProps<
    T,
    OmittedKeys extends keyof any = never
> = InputSharedProps &
    InputWrapperBaseProps &
    Omit<
        React.ComponentPropsWithoutRef<'input'>,
        keyof InputSharedProps | keyof StrictProps<T> | OmittedKeys
    > &
    StrictProps<T>;

export type StrictProps<T> = {
    [K in keyof T as string extends K
        ? never
        : number extends K
        ? never
        : symbol extends K
        ? never
        : K]: T[K];
};

export type StrictTextareaProps<
    T,
    OmittedKeys extends keyof any = never
> = InputSharedProps &
    InputWrapperBaseProps &
    Omit<
        React.ComponentPropsWithoutRef<'textarea'>,
        keyof InputSharedProps | keyof StrictProps<T> | OmittedKeys
    > &
    StrictProps<T>;
