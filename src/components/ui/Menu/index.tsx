import * as React from 'react';

import {
    Menu as MantineMenu,
    MenuProps as MantineMenuProps,
    MenuItemProps as MantineMenuItemProps
} from '@mantine/core';
import Text from '../Text';
import classes from './Menu.module.css';

type MenuItem = {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
} & MantineMenuItemProps;

export type MenuProps = MantineMenuProps & { items: MenuItem[] };

export default function Menu({ items, children, ...props }: MenuProps) {
    return (
        <MantineMenu
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item
            }}
            withinPortal
            closeOnClickOutside
            closeOnEscape
            closeOnItemClick
            zIndex={1000}
            radius="sm"
            {...props}
        >
            <MantineMenu.Target>
                <span>{children}</span>
            </MantineMenu.Target>
            <MantineMenu.Dropdown>
                {items.map((item) => (
                    <MantineMenu.Item
                        key={item.label}
                        onClick={item.onClick}
                        {...item}
                    >
                        <Text size="xs">{item.label}</Text>
                    </MantineMenu.Item>
                ))}
            </MantineMenu.Dropdown>
        </MantineMenu>
    );
}
