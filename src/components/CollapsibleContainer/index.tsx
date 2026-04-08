import { Accordion, AccordionProps, Stack } from '@mantine/core';
import * as React from 'react';

import Icon from '../ui/Icon';
import Text from '../ui/Text';
import Tooltip from '../ui/Tooltip';
import classes from './CollapsibleContainer.module.css';

export interface CollapsibleContainerProps extends AccordionProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
    description?: string;
    title: string;
    tooltip?: string;
    tooltipType?: 'info' | 'warning';
}

const CollapsibleContainer = ({
    children,
    defaultOpen = true,
    description,
    title,
    tooltip,
    tooltipType = 'info'
}: CollapsibleContainerProps) => {
    const defaultValue = defaultOpen ? title : null;

    return (
        <Accordion
            classNames={{
                content: classes.content,
                control: classes.control,
                item: classes.item,
                label: classes.label,
                panel: classes.panel
            }}
            defaultValue={defaultValue}
            multiple={false}
            variant="contained"
            w={'100%'}
        >
            <Accordion.Item data-tooltiptype={tooltipType} value={title}>
                <Accordion.Control>
                    <Stack spacing={0}>
                        <span className={classes.title}>
                            {title}
                            {tooltip && (
                                <Tooltip label={tooltip}>
                                    {tooltipType === 'info' && (
                                        <Icon
                                            color="gray"
                                            size="sm"
                                            type="IconHelp"
                                        />
                                    )}
                                    {tooltipType === 'warning' && (
                                        <Icon
                                            color="var(--mantine-color-yellow-6)"
                                            size="sm"
                                            type="IconAlertTriangle"
                                        />
                                    )}
                                </Tooltip>
                            )}
                        </span>
                        {description && (
                            <Text
                                className={classes.description}
                                color="gray"
                                size="sm"
                            >
                                {description}
                            </Text>
                        )}
                    </Stack>
                </Accordion.Control>
                <Accordion.Panel>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
};

export default CollapsibleContainer;
