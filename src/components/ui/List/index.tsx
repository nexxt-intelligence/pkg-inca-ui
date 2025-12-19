import {
    List as MantineList,
    ListProps as MantineListProps
} from '@mantine/core';
import classes from './List.module.css';
export interface ListProps extends Omit<MantineListProps, 'children'> {
    items?: string[];
    children?: React.ReactNode;
}

const List = ({
    items,
    children,
    withPadding,
    listStyleType,
    ...props
}: ListProps) => {
    return (
        <MantineList
            spacing="sm"
            classNames={{ root: classes.root, item: classes.item }}
            withPadding={withPadding}
            data-with-padding={withPadding}
            listStyleType={listStyleType}
            data-type={listStyleType}
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
