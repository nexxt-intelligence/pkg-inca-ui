import * as React from 'react';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    /** Font name shown in the list. */
    label: string;
    /** CSS `font-family` used to render the item. */
    value: string;
}

/**
 * **Custom inca-ui component.** `Select` option that previews each font in its own typeface.
 */
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
