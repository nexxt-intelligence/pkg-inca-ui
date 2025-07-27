import * as React from 'react';
import { Tabs as MantineTabs } from '@mantine/core';
import classes from './Tabs.module.css';

interface TabPanelsProps {
    tabs: {
        label: string;
        value: string;
    }[];
    defaultValue?: string;
    children: React.ReactNode;
}

const Tabs = ({
    tabs,
    defaultValue = tabs[0].value,
    children
}: TabPanelsProps) => {
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
            >
                <MantineTabs.List>
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
