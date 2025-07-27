import { Avatar, Group } from '@mantine/core';
import * as React from 'react';
import Text from '../../Text';

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
    label: string;
    title: string;
    imageUrl: string;
}

const QuestionSelectItem = React.forwardRef(
    (
        { title, label, imageUrl, ...others }: ItemProps,
        ref: React.Ref<HTMLDivElement>
    ) => {
        return (
            <div ref={ref} {...others} style={{ padding: '10px' }}>
                <Group noWrap spacing="xs">
                    <Avatar src={imageUrl} size="xs" />
                    <Text size="sm">{label || title}</Text>
                </Group>
            </div>
        );
    }
);

export default QuestionSelectItem;
