import {
    Menu as MantineMenu,
    MenuItemProps as MantineMenuItemProps,
    MenuProps as MantineMenuProps
} from '@mantine/core';
import * as React from 'react';

import Text from '../Text';
import classes from './Menu.module.css';

export type MenuItem = {
    disabled?: boolean;
    label: string;
    onClick?: () => void;
} & MantineMenuItemProps;

export type MenuProps = {
    items?: MenuItem[];
    menuContent?: React.ReactNode;
} & MantineMenuProps;

function Menu({ children, items, menuContent, ...props }: MenuProps) {
    return (
        <MantineMenu
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item
            }}
            closeOnClickOutside={true}
            closeOnEscape
            closeOnItemClick
            position="bottom"
            radius="sm"
            withinPortal
            zIndex={1000}
            {...props}
        >
            <MantineMenu.Target>
                <span>{children}</span>
            </MantineMenu.Target>
            <MantineMenu.Dropdown>
                {menuContent
                    ? menuContent
                    : items?.map((item) => (
                          <MantineMenu.Item
                              key={item.label}
                              onClick={item.onClick}
                              {...item}
                          >
                              <Text>{item.label}</Text>
                          </MantineMenu.Item>
                      ))}
            </MantineMenu.Dropdown>
        </MantineMenu>
    );
}

Menu.Item = MantineMenu.Item;
Menu.Label = MantineMenu.Label;
Menu.Divider = MantineMenu.Divider;
Menu.Dropdown = MantineMenu.Dropdown;
Menu.Target = MantineMenu.Target;

export default Menu;
