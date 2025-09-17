import * as React from 'react';
import { Accordion, AccordionProps } from '@mantine/core';
import classes from './CollapsibleContainer.module.css';

export interface CollapsibleContainerProps extends AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

const CollapsibleContainer = ({
    title,
    children,
    defaultOpen = true
}: CollapsibleContainerProps) => {
    const defaultValue = defaultOpen ? title : null;

    return (
        <Accordion
            defaultValue={defaultValue}
            variant="contained"
            classNames={{
                item: classes.item,
                content: classes.content,
                panel: classes.panel,
                control: classes.control,
                label: classes.label
            }}
            multiple={false}
            w={'100%'}
        >
            <Accordion.Item value={title}>
                <Accordion.Control>{title}</Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default CollapsibleContainer;
