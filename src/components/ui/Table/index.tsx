import {
    Table as MantineTable,
    TableProps as MantineTableProps
} from '@mantine/core';
import * as React from 'react';

import { type StrictProps } from '../../../types/props';
import Text from '../Text';
import classes from './Table.module.css';

export type TableCellTextProps = {
    /** Main line. */
    children: React.ReactNode;
    /** Smaller line under the main one, such as a date, ID or detail. */
    description?: React.ReactNode;
    /** Dims both lines, for example for an expired or disabled row. */
    muted?: boolean;
};

export type TableProps = {
    /** `thead` and `tbody` rows. */
    children: React.ReactNode;
    /** Highlights the row under the cursor. */
    highlightOnHover?: boolean;
    /** Draws the rounded outer border. Turn it off when the table sits inside another bordered container. */
    withBorder?: boolean;
} & Omit<StrictProps<MantineTableProps>, 'withBorder'>;

/**
 * Data table. Built on Mantine [Table](https://v6.mantine.dev/core/table/), so write `thead`, `tbody`, `tr`, `th` and `td` as usual.
 *
 * inca-ui adds a rounded border, a gray header row with monospace labels and row dividers.
 * Use `Table.CellText` for a cell with a second, smaller line.
 * Put a `Pagination` with `summary` under it for paged data.
 */
const Table = ({
    children,
    className,
    highlightOnHover = false,
    withBorder = true,
    ...props
}: TableProps) => {
    return (
        <div
            className={classes.container}
            data-with-border={withBorder || undefined}
        >
            <MantineTable
                className={[classes.root, className].filter(Boolean).join(' ')}
                highlightOnHover={highlightOnHover}
                {...props}
            >
                {children}
            </MantineTable>
        </div>
    );
};

/** Two-line cell content: a main line and an optional smaller description. */
const TableCellText = ({
    children,
    description,
    muted = false
}: TableCellTextProps) => {
    return (
        <div className={classes.cellText}>
            <Text
                c={muted ? 'var(--text-subtle)' : 'var(--text-default)'}
                size="sm"
            >
                {children}
            </Text>
            {description !== undefined && description !== null && (
                <Text c="var(--text-subtle)" size="xs">
                    {description}
                </Text>
            )}
        </div>
    );
};

Table.CellText = TableCellText;

export default Table;
