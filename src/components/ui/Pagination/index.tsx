import {
    Group,
    Pagination as MantinePagination,
    PaginationProps as MantinePaginationProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import Text from '../Text';
import classes from './Pagination.module.css';

export type PaginationProps = {
    /** Hides the page controls when there is only one page. `summary` still shows. */
    hideOnSinglePage?: boolean;
    /** Text on the left, such as "10 of 120 keys". The controls move to the right. */
    summary?: React.ReactNode;
} & StrictProps<MantinePaginationProps>;

/**
 * Page controls. Built on Mantine [Pagination](https://v6.mantine.dev/core/pagination/).
 *
 * inca-ui adds compact bordered controls and an optional `summary` on the left, for use under a `Table`.
 */
const Pagination = ({
    hideOnSinglePage = false,
    radius = 'sm',
    size = 'sm',
    summary,
    total,
    ...props
}: PaginationProps) => {
    const controls =
        hideOnSinglePage && total <= 1 ? null : (
            <MantinePagination
                classNames={{
                    control: classes.control,
                    dots: classes.dots
                }}
                radius={radius}
                size={size}
                spacing="2xs"
                total={total}
                {...props}
            />
        );

    if (summary === undefined || summary === null) return controls;

    return (
        <Group noWrap position="apart" spacing="md">
            <Text c="var(--text-subtle)" size="xs">
                {summary}
            </Text>
            {controls}
        </Group>
    );
};

export default Pagination;
