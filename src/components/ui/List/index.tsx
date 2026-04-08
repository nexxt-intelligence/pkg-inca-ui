import {
    List as MantineList,
    ListProps as MantineListProps
} from '@mantine/core';

import classes from './List.module.css';
export interface ListProps extends Omit<MantineListProps, 'children'> {
    children?: React.ReactNode;
    items?: string[];
}

const List = ({
    children,
    items,
    listStyleType,
    withPadding,
    ...props
}: ListProps) => {
    return (
        <MantineList
            classNames={{ item: classes.item, root: classes.root }}
            data-type={listStyleType}
            data-with-padding={withPadding}
            listStyleType={listStyleType}
            spacing="sm"
            withPadding={withPadding}
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
