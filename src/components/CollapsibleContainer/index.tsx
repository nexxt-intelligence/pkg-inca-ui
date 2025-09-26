import * as React from 'react';
import { Accordion, AccordionProps, Stack } from '@mantine/core';
import Tooltip from '../ui/Tooltip';
import Icon from '../ui/Icon';
import classes from './CollapsibleContainer.module.css';
import Text from '../ui/Text';

export interface CollapsibleContainerProps extends AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    tooltip?: string;
    tooltipType?: 'info' | 'warning';
    description?: string;
}

const CollapsibleContainer = ({
    title,
    children,
    defaultOpen = true,
    tooltip,
    tooltipType = 'info',
    description
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
                    <Stack spacing={0}>
                        <span className={classes.title}>
                            {title}
                            {tooltip && (
                                <Tooltip label={tooltip}>
                                    {tooltipType === 'info' && (
                                        <Icon
                                            type="IconHelp"
                                            size="sm"
                                            color="gray"
                                        />
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
