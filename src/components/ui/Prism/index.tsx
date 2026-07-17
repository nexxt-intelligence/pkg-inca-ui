import * as React from 'react';

import classes from './Prism.module.css';

export type PrismProps = {
    children: React.ReactNode;
    copiedLabel?: string;
    copyLabel?: string;
    language?: string;
    noCopy?: boolean;
    withLineNumbers?: boolean;
} & Omit<React.ComponentPropsWithoutRef<'pre'>, 'children'>;

const Prism = ({ children, language, ...props }: PrismProps) => {
    return (
        <pre {...props}>
            <code className={classes.code} data-language={language}>
                {children}
            </code>
        </pre>
    );
};

export default Prism;
