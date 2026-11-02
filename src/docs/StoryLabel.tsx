import { Text, type TextProps } from '..';

/**
 * Caption for the examples in stories (a variant, size, color…).
 * Use it for every label in a story so they all look the same.
 */
const StoryLabel = (props: TextProps) => (
    <Text
        c="var(--text-default)"
        ff="var(--font-family-mono)"
        size="sm"
        {...props}
    />
);

export default StoryLabel;
