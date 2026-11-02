import { Accordion, AccordionProps, Stack } from '@mantine/core';
import * as React from 'react';

import Icon from '../ui/Icon';
import Text from '../ui/Text';
import Tooltip from '../ui/Tooltip';
import classes from './CollapsibleContainer.module.css';

export interface CollapsibleContainerProps extends AccordionProps {
    /** Content shown when the section is expanded. */
    children: React.ReactNode;
    /** Whether the section starts expanded. */
    defaultOpen?: boolean;
    /** Secondary text shown on the right side of the header. */
    description?: string;
    /** Header text. Also used as the internal accordion value. */
    title: string;
    /** Text shown in a tooltip next to the title. */
    tooltip?: string;
    /** `info` shows a help icon, `warning` shows a warning icon and a yellow border. */
    tooltipType?: 'info' | 'warning';
}

/**
 * **Custom inca-ui component** (built with Mantine [Accordion](https://v6.mantine.dev/core/accordion/)).
 *
 * Collapsible section with a title, an optional description and an info or warning tooltip.
 */
const CollapsibleContainer = ({
    children,
    defaultOpen = true,
    description,
    title,
    tooltip,
    tooltipType = 'info',
    ...props
}: CollapsibleContainerProps) => {
    const defaultValue = defaultOpen ? title : null;

    return (
        <Accordion
            classNames={{
                control: classes.control,
                item: classes.item,
                label: classes.label
            }}
            defaultValue={defaultValue}
            multiple={false}
            variant="contained"
            w={'100%'}
            {...props}
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
                                            color="var(--icon-subtle)"
                                            size="sm"
                                            type="IconHelp"
                                        />
                                    )}
                                    {tooltipType === 'warning' && (
                                        <Icon
                                            color="var(--icon-warning)"
                                            size="sm"
                                            type="IconAlertTriangle"
                                        />
                                    )}
                                </Tooltip>
                            )}
                        </span>
                        {description && (
                            <Text
                                c="var(--text-subtle)"
                                className={classes.description}
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
