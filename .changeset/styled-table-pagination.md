---
'inca-ui': minor
---

feat: styled `Table` and `Pagination`

-   `Table` is now an inca-ui component instead of the plain Mantine re-export: a rounded border, a gray header row with monospace labels, row dividers and top-aligned cells. It wraps the table in a `div` that scrolls horizontally. `withBorder` (default `true`) controls the outer border. Adds `Table.CellText` for a cell with a main line and a smaller `description` line, with a `muted` option
-   `Pagination` is now an inca-ui component instead of the plain Mantine re-export: compact 24px bordered controls with an accent active page. Adds `summary` (text on the left, controls on the right) and `hideOnSinglePage`
-   Both keep their Mantine props, so existing usage still compiles. They look different, so check any screens that already use them
