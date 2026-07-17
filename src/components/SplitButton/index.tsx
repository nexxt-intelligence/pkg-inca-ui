import { Group } from '@mantine/core';
import * as React from 'react';

import ActionIcon from '../ui/ActionIcon';
import Button, { ButtonProps } from '../ui/Button';
import { TablerIconKeys } from '../ui/Icon';
import Menu, { MenuItem } from '../ui/Menu';
import classes from './SplitButton.module.css';

export type SplitButtonSize = 'md' | 'sm' | 'xs';

const actionIconSizeMap: Record<SplitButtonSize, string> = {
    xs: 'md',
    sm: 'lg',
    md: 'xl'
};

const menuIconSizeMap: Record<SplitButtonSize, string> = {
    xs: 'xs',
    sm: 'sm',
    md: 'sm'
};

export interface SplitButtonProps {
    buttonIcon?: TablerIconKeys;
    children?: React.ReactNode;
    color?: ButtonProps['color'];
    disabled?: boolean;
    items?: MenuItem[];
    menuIcon?: TablerIconKeys;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    size?: SplitButtonSize;
}

const SplitButton = ({
    buttonIcon,
    children = 'Send',
    color = 'primary',
    disabled = false,
    items = [],
    menuIcon = 'IconChevronDown',
    onClick,
    size = 'sm'
}: SplitButtonProps) => {
    return (
        <Group gap={2} wrap="nowrap">
            <Button
                className={classes.button}
                color={color}
                disabled={disabled}
                leftIcon={buttonIcon}
                onClick={onClick}
                radius="sm"
                size={size}
            >
                {children}
            </Button>
            <Menu disabled={disabled} items={items} position="bottom-end">
                <ActionIcon
                    aria-label="More options"
                    className={classes.menuControl}
                    color={color}
                    disabled={disabled}
                    icon={menuIcon}
                    iconSize={menuIconSizeMap[size]}
                    size={actionIconSizeMap[size]}
                />
            </Menu>
        </Group>
    );
};

export default SplitButton;
