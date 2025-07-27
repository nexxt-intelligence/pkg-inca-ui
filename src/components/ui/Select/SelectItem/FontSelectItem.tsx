import * as React from 'react';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    label: string;
    value: string;
}

const FontSelectItem = React.forwardRef(
    (
        { label, value, ...others }: ItemProps,
        ref: React.Ref<HTMLDivElement>
    ) => {
        return (
            <div ref={ref} {...others} style={{ fontFamily: value }}>
                {label}
            </div>
        );
    }
);

export default FontSelectItem;
