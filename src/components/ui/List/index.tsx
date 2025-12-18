import {
    List as MantineList,
    ListProps as MantineListProps
} from '@mantine/core';

export interface ListProps extends MantineListProps {
    items?: string[];
}

const List = ({ items, children, ...props }: ListProps) => {
    return (
        <MantineList
            spacing="sm"
            styles={{ item: { marginTop: '0!important' } }}
            {...props}
        >
            {items
                ? items.map((item) => (
                      <MantineList.Item key={item}>{item}</MantineList.Item>
                  ))
                : children}
        </MantineList>
    );
};

List.Item = MantineList.Item;

export default List;
