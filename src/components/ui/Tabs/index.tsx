import {
    Tabs as MantineTabs,
    TabsProps as MantineTabsProps
} from '@mantine/core';
import * as React from 'react';

import classes from './Tabs.module.css';

export interface TabsProps extends MantineTabsProps {
    children: React.ReactNode;
    defaultValue?: string;
    fullWidth?: boolean;
    onTabChange?: (value: null | string) => void;
    tabs: {
        disabled?: boolean;
        label: string;
        value: string;
    }[];
    value?: null | string;
    variant?: 'contained' | 'default' | 'outline' | 'pills';
}

const Tabs = ({
    children,
    tabs,
    defaultValue = tabs[0].value,
    fullWidth,
    onTabChange: controlledOnTabChange,
    value: controlledValue,
    variant = 'default'
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
                    panel: classes.panel,
                    tab: classes.tab,
                    tabsList: classes.tabsList
                }}
                data-variant={variant}
                onTabChange={handleTabChange}
                value={currentValue}
                variant={variant}
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
