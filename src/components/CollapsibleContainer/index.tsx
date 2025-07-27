import * as React from 'react';
import { Accordion } from '@mantine/core';

import classes from './CollapsibleContainer.module.css';

export default function CollapsibleContainer({
    title,
    children
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <Accordion
            defaultValue={title}
            className={classes.container}
            classNames={{
                content: classes.content,
                panel: classes.panel,
                control: classes.control,
                label: classes.label
            }}
        >
            <Accordion.Item value={title}>
                <Accordion.Control fw={400}>{title}</Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
