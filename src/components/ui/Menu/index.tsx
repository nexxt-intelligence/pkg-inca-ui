import * as React from 'react';

import {
    Menu as MantineMenu,
    MenuProps as MantineMenuProps,
    MenuItemProps as MantineMenuItemProps
} from '@mantine/core';
import Text from '../Text';
import classes from './Menu.module.css';

export type MenuItem = {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
} & MantineMenuItemProps;

export type MenuProps = MantineMenuProps & {
    items?: MenuItem[];
    menuContent?: React.ReactNode;
};

function Menu({ items, menuContent, children, ...props }: MenuProps) {
    return (
        <MantineMenu
            classNames={{
                dropdown: classes.dropdown,
                item: classes.item
            }}
            withinPortal
            closeOnClickOutside={true}
            closeOnEscape
            closeOnItemClick
            position="bottom"
            zIndex={1000}
            radius="sm"
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
