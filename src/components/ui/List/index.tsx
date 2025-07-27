import {
    List as MantineList,
    ListProps as MantineListProps
} from '@mantine/core';

export type ListProps = {
    items: string[];
} & Omit<MantineListProps, 'children'>;

export default function List({ items, ...props }: ListProps) {
    return (
        <MantineList
            spacing="sm"
            styles={{ item: { marginTop: '0!important' } }}
            {...props}
        >
            {items.map((item) => (
                <MantineList.Item key={item}>{item}</MantineList.Item>
            ))}
        </MantineList>
    );
}
