import * as React from 'react';
import {
    Tabs as MantineTabs,
    TabsProps as MantineTabsProps
} from '@mantine/core';
import classes from './Tabs.module.css';

export interface TabsProps extends MantineTabsProps {
    tabs: {
        label: string;
        value: string;
    }[];
    defaultValue?: string;
    value?: string | null;
    onTabChange?: (value: string | null) => void;
    children: React.ReactNode;
    fullWidth?: boolean;
}

const Tabs = ({
    tabs,
    defaultValue = tabs[0].value,
    value: controlledValue,
    onTabChange: controlledOnTabChange,
    children,
    variant = 'default',
    fullWidth
}: TabsProps) => {
    /** Had to go with controlled tabs because of interference with React-tab in portal-client */
    const [activeTab, setActiveTab] = React.useState<string | null>(
        defaultValue
    );

    // Use controlled value if provided, otherwise use internal state
    const currentValue =
        controlledValue !== undefined ? controlledValue : activeTab;

    const handleTabChange = (value: string | null) => {
        // If controlled, call the parent's handler
        if (controlledOnTabChange) controlledOnTabChange(value);

        // If uncontrolled, update internal state
        if (controlledValue === undefined) setActiveTab(value);
    };

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <MantineTabs
                value={currentValue}
                onTabChange={handleTabChange}
                classNames={{
                    tab: classes.tab,
                    tabsList: tabs.length
                        ? classes.tabsList
                        : classes.tabsListHidden,
                    panel: classes.panel
                }}
                data-variant={variant}
            >
                <MantineTabs.List grow={fullWidth}>
                    {tabs.map((tab) => (
                        <MantineTabs.Tab key={tab.value} value={tab.value}>
                            {tab.label}
                        </MantineTabs.Tab>
                    ))}
                </MantineTabs.List>
                {children}
            </MantineTabs>
        </div>
    );
};

Tabs.Panel = MantineTabs.Panel;

export default Tabs;
