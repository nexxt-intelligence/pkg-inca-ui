import { Avatar, Group } from '@mantine/core';
import * as React from 'react';

import Text from '../../Text';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    /** Avatar image shown before the label. */
    imageUrl: string;
    /** Question text. */
    label: string;
    /** Fallback text when `label` is empty. */
    title: string;
}

/**
 * **Custom inca-ui component.** `Select` option for survey questions: an avatar and the question text.
 */
const QuestionSelectItem = React.forwardRef(
    (
        { imageUrl, label, title, ...others }: ItemProps,
        ref: React.Ref<HTMLDivElement>
    ) => {
        return (
            <div ref={ref} {...others} style={{ padding: '10px' }}>
                <Group noWrap spacing="xs">
                    <Avatar size="xs" src={imageUrl} />
                    <Text size="sm">{label || title}</Text>
                </Group>
            </div>
        );
    }
);

export default QuestionSelectItem;
