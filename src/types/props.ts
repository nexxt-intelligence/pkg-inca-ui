import type * as React from 'react';

export type StrictButtonProps<T, OmittedKeys extends keyof any = never> = Omit<
    React.ComponentPropsWithoutRef<'button'>,
    keyof T | OmittedKeys
> &
    Omit<T, OmittedKeys>;

export type StrictInputProps<T, OmittedKeys extends keyof any = never> = Omit<
    React.ComponentPropsWithoutRef<'input'>,
    keyof T | OmittedKeys
> &
    Omit<T, OmittedKeys>;

export type StrictProps<T> = { children?: React.ReactNode } & T;

export type StrictTextareaProps<
    T,
    OmittedKeys extends keyof any = never
> = Omit<React.ComponentPropsWithoutRef<'textarea'>, keyof T | OmittedKeys> &
    Omit<T, OmittedKeys>;
