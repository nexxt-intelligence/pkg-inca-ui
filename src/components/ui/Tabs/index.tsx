import {
    Tabs as MantineTabs,
    TabsProps as MantineTabsProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import classes from './Tabs.module.css';

export interface TabsProps
    extends Omit<
        StrictProps<MantineTabsProps>,
        'children' | 'defaultValue' | 'onTabChange' | 'value' | 'variant'
    > {
    /** `Tabs.Panel` elements. */
    children: React.ReactNode;
    /** Initially active tab when `value` is not controlled. Defaults to the first tab. */
    defaultValue?: string;
    /** Stretches the tabs to fill the row. */
    fullWidth?: boolean;
    /** Called with the new tab value. */
    onTabChange?: (value: null | string) => void;
    /** Tabs to show in the tab list. */
    tabs: {
        disabled?: boolean;
        label: string;
        value: string;
    }[];
    /** Active tab (controlled). */
    value?: null | string;
    /** Tab style. */
    variant?: 'contained' | 'default' | 'outline' | 'pills';
}

/**
 * Tabs built from the `tabs` list. Built on Mantine [Tabs](https://v6.mantine.dev/core/tabs/).
 *
 * Add a `Tabs.Panel` for each tab as children. inca-ui adds a `contained` variant.
 */
const Tabs = ({
    children,
    tabs,
    defaultValue = tabs[0].value,
    fullWidth,
    onTabChange: controlledOnTabChange,
    value: controlledValue,
    variant = 'default',
    ...props
}: TabsProps) => {
    /** Had to go with controlled tabs because of interference with React-tab in portal-client */
    const [activeTab, setActiveTab] = React.useState<null | string>(
        defaultValue
    );

    // Use controlled value if provided, otherwise use internal state
    const currentValue =
        controlledValue !== undefined ? controlledValue : activeTab;

    const handleTabChange = (value: null | string) => {
        // If controlled, call the parent's handler
        if (controlledOnTabChange) controlledOnTabChange(value);

        // If uncontrolled, update internal state
        if (controlledValue === undefined) setActiveTab(value);
    };

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <MantineTabs
                classNames={{
                    root: classes.root,
                    tab: classes.tab,
                    tabsList: classes.tabsList
                }}
                data-variant={variant}
                onTabChange={handleTabChange}
                value={currentValue}
                variant={variant}
                {...props}
            >
                {tabs.length > 0 && (
                    <MantineTabs.List grow={fullWidth}>
                        {tabs.map((tab) => (
                            <MantineTabs.Tab
                                disabled={tab.disabled}
                                key={tab.value}
                                value={tab.value}
                            >
                                {tab.label}
                            </MantineTabs.Tab>
                        ))}
                    </MantineTabs.List>
                )}
                {children}
            </MantineTabs>
        </div>
    );
};

Tabs.Panel = MantineTabs.Panel;

export default Tabs;
