import * as React from 'react';
import { Accordion, AccordionProps } from '@mantine/core';
import Tooltip from '../ui/Tooltip';
import Icon from '../ui/Icon';
import classes from './CollapsibleContainer.module.css';

export interface CollapsibleContainerProps extends AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    tooltip?: string;
    tooltipType?: 'info' | 'warning';
}

const CollapsibleContainer = ({
    title,
    children,
    defaultOpen = true,
    tooltip,
    tooltipType = 'info'
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
            <Accordion.Item value={title} data-tooltiptype={tooltipType}>
                <Accordion.Control>
                    {title}
                    {tooltip && (
                        <Tooltip label={tooltip}>
                            {tooltipType === 'info' && (
                                <Icon type="IconHelp" size="sm" color="gray" />
                            )}
                            {tooltipType === 'warning' && (
                                <Icon
                                    type="IconAlertTriangle"
                                    size="sm"
                                    color="var(--mantine-color-yellow-6)"
                                />
                            )}
                        </Tooltip>
                    )}
                </Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default CollapsibleContainer;
