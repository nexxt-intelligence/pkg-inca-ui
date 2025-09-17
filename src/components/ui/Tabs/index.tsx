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
    children: React.ReactNode;
    fullWidth?: boolean;
}

const Tabs = ({
    tabs,
    defaultValue = tabs[0].value,
    children,
    variant = 'default',
    fullWidth
}: TabsProps) => {
    /** Had to go with controlled tabs because of interference with React-tab in portal-client */
    const [activeTab, setActiveTab] = React.useState<string | null>(
        defaultValue
    );

    return (
        <div onClick={(e) => e.stopPropagation()}>
            <MantineTabs
                value={activeTab}
                onTabChange={setActiveTab}
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
