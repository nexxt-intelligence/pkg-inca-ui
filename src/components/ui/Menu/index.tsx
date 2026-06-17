import {
    Menu as MantineMenu,
    MenuItemProps as MantineMenuItemProps,
    MenuProps as MantineMenuProps,
    Tooltip as MantineTooltip,
    TooltipProps as MantineTooltipProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import Text from '../Text';
import tooltipClasses from '../Tooltip/Tooltip.module.css';
import classes from './Menu.module.css';

export type MenuItem = {
    disabled?: boolean;
    label: string;
    onClick?: () => void;
    tooltip?: React.ReactElement | string;
    tooltipPosition?: MantineTooltipProps['position'];
} & StrictProps<MantineMenuItemProps>;

export type MenuProps = {
    items?: MenuItem[];
    menuContent?: React.ReactNode;
} & StrictProps<MantineMenuProps>;

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
                    : items?.map((item) => {
                          const {
                              label,
                              onClick,
                              tooltip,
                              tooltipPosition,
                              ...menuItemProps
                          } = item;

                          if (tooltip) {
                              return (
                                  <MantineTooltip
                                      classNames={{
                                          tooltip: tooltipClasses.tooltip
                                      }}
                                      key={label}
                                      label={tooltip}
                                      maw={320}
                                      multiline
                                      position={tooltipPosition}
                                      withArrow
                                      withinPortal
                                      zIndex={9999} // sorry
                                  >
                                      <MantineMenu.Item
                                          onClick={onClick}
                                          {...menuItemProps}
                                      >
                                          <Text>{label}</Text>
                                      </MantineMenu.Item>
                                  </MantineTooltip>
                              );
                          }

                          return (
                              <MantineMenu.Item
                                  key={label}
                                  onClick={onClick}
                                  {...menuItemProps}
                              >
                                  <Text>{label}</Text>
                              </MantineMenu.Item>
                          );
                      })}
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
