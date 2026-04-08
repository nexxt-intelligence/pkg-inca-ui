import { Avatar, Group } from '@mantine/core';
import * as React from 'react';

import Text from '../../Text';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    imageUrl: string;
    label: string;
    title: string;
}

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
