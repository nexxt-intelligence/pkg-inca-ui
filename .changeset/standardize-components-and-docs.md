---
'inca-ui': minor
---

Standardize components, styles, tokens and stories; add Storybook docs pages and prop descriptions

-   Fix class names that pointed at styles that don't exist, `"false"` class names, and props dropped by `Tabs` and `CollapsibleContainer` (they're now passed through to Mantine)
-   `MiniModal` and `SplitPaneModal` (and their `Actions` / `Content` parts) have typed props instead of `any`, exported as `MiniModalProps`, `SplitPaneModalProps`, etc. `BadgeProps` is exported too
-   `MiniModal`'s close button gets its intended styles, and `RichTextEditor`'s error message uses Mantine's input error style like the other inputs
-   Components import each other by relative path instead of from the package entry
-   CSS modules use Mantine slot names and design tokens; values that matched the scale now use tokens
-   New typography tokens (`--font-family-*`, `--font-weight-*`, `--line-height-*`)
-   Spacing, radius, font size, font, line height and shadow tokens now read their values from the Mantine theme (`--mantine-*` variables), so the theme is the single source
-   The global CSS now sets the body font to `--font-family-sans` (Source Sans 3), so plain text matches Mantine components
-   `Input` is marked `@deprecated` (use `TextInput`, `NumberInput` or `PasswordInput`)
-   Storybook: a description for every component (with a link to its Mantine or Tabler docs), prop descriptions, pages for Getting Started, Tokens, Typography, a Cheat Sheet (design value → token) and the Mantine layout components, and contributing steps in the README
