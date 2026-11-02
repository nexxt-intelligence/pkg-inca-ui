import {
    List as MantineList,
    ListProps as MantineListProps
} from '@mantine/core';

import { type StrictProps } from '../../../types/props';
import classes from './List.module.css';
export interface ListProps
    extends Omit<StrictProps<MantineListProps>, 'children'> {
    /** List items. Ignored when `items` is set. */
    children?: React.ReactNode;
    /** Text items to render. Use instead of `children`. */
    items?: string[];
}

/**
 * Mantine [List](https://v6.mantine.dev/core/list/). Pass `items` for a simple text list.
 */
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
