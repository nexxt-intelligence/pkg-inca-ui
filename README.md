# inca-ui

Shared component library for the inca platform. It wraps [Mantine 6](https://v6.mantine.dev) with our theme, design tokens (from Figma) and a few custom components.

**Using inca-ui in an app?** Read **Docs → Getting Started**, **Tokens**, **Typography** and **Cheat Sheet** in Storybook (deployed from `main`; run `yarn storybook` on `v7` for the Mantine 6 version). This README is for people working **on** inca-ui.

## Two release tracks

| Branch | Stack                | Version | npm dist-tag | Install                   |
| ------ | -------------------- | ------- | ------------ | ------------------------- |
| `main` | React 19 / Mantine 9 | `9.x`   | `latest`     | `yarn add inca-ui`        |
| `v7`   | React 16 / Mantine 6 | `7.x`   | `legacy`     | `yarn add inca-ui@legacy` |

-   Every change goes to **both** branches (two PRs, each with its own changeset). Only the Mantine-specific props differ between them.
-   Changesets are **patch or minor only**. Never major: `main` stays on `9.x`, `v7` stays on `7.x`.

## Scripts

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `yarn storybook` | Storybook on http://localhost:2356            |
| `yarn lint`      | ESLint (also flags raw colors / px in JSX)    |
| `yarn build`     | Type-checks and builds the library to `dist/` |
| `yarn changeset` | Adds a changeset for your PR                  |

## Project layout

```
src/
  index.tsx              # the public API: every export lives here
  tokens.css             # design tokens (CSS variables)
  constants/theme.ts     # Mantine theme (where the token values are set)
  components/
    ui/<Name>/           # extended Mantine components (Button, TextInput, …)
    <Name>/              # custom components (ActionCard, SplitButton, …)
  hooks/                 # useConfirmationModal
  docs/                  # docs-only Storybook pages: Getting Started, Tokens, Typography, Cheat Sheet, layout components, story helpers
  utils/cx.ts            # join class names
```

Each component folder has the same files (the CSS module only when the component has its own styles):

```
<Name>/
  index.tsx              # component + its `<Name>Props` type + `export default <Name>`
  <Name>.module.css      # styles (tokens only)
  <Name>.stories.tsx     # Storybook stories
```

## Conventions

### Components

```tsx
import {
    TextInput as MantineTextInput,
    TextInputProps as MantineTextInputProps
} from '@mantine/core';

import { type StrictInputProps } from '../../../types/props';
import Label from '../Label';
import classes from './TextInput.module.css';

export interface TextInputProps
    extends StrictInputProps<MantineTextInputProps> {
    /** Help text shown in a tooltip next to the label. */
    tooltip?: string;
}

/**
 * Mantine [TextInput](https://v6.mantine.dev/core/text-input/) with a help tooltip.
 */
const TextInput = ({ label, tooltip, ...props }: TextInputProps) => (
    <MantineTextInput
        classNames={{ input: classes.input }}
        label={label ? <Label label={label} tooltip={tooltip} /> : null}
        {...props}
    />
);

export default TextInput;
```

-   `const <Name> = (…) => …` + `export interface <Name>Props` (or `export type` when it's built from other types) + `export default <Name>`. Then export both from `src/index.tsx`.
-   **JSDoc is the documentation.** Put a comment above the component (what it is, plus a link to the Mantine component it's built on, or `**Custom inca-ui component**` if it isn't from Mantine) and above every prop you add. Storybook shows them at the top of the docs page and in the props table, next to Mantine's own prop descriptions. If the prop's type already lists its values (a union like `'sm' | 'md'`), don't repeat them in the description. When values need a note, keep them on one line separated by `·` (see `Icon`'s `size`).
-   Our defaults first, `{...props}` last, so the app can override them.
-   Import other inca-ui components by relative path (`../Label`), **never** from `src/index`.
-   Join class names with `cx(classes.root, disabled && classes.disabled)` from `src/utils/cx`, not template strings.
-   Something we no longer want used gets `/** @deprecated Use X instead. */`. Don't delete exports (that would be a major).

### Styles (CSS modules)

-   **Class names = Mantine slot names**: `.root`, `.input`, `.label`, `.track`… so `classNames={{ input: classes.input }}` reads 1:1. Check the component's _Styles API_ in the Mantine docs for the slot names on your branch (they can differ between Mantine 6 and 9, e.g. `tabsList` → `list`).
-   Modifiers are `<slot><Modifier>` (`.bodyFullWidth`, `.rootNoIcon`). Elements that aren't Mantine slots get a short descriptive name (`.prefix`, `.createLabel`).
-   **Tokens only** for color, spacing, radius and typography (font size, weight, family, line height): `var(--text-subtle)`, `var(--spacing-md)`, `var(--font-size-xs)`, `var(--radius-sm)`.
-   Raw `px` is fine only for borders (`1px solid var(--border-default)`) and fixed component dimensions (`height: 40px`).
-   Never raw hex or Mantine internals like `var(--mantine-color-gray-6)`.
-   In JSX: Mantine scale keys for spacing/size (`p="md"`), tokens for colors (`c="var(--text-subtle)"`, `<Icon color="var(--icon-accent)" />`). `yarn lint` warns on raw colors and px values.

Colors, spacing, radius, font sizes, fonts, line heights and shadows are set once, in `src/constants/theme.ts`. `src/tokens.css` reads them through Mantine's `--mantine-*` variables, so change them in the theme. Only the font weights and the two transparent colors (`--bg-overlay-black`, `--bg-transparent`) are set in `tokens.css`.

### Stories

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Stack, TextInput } from '../../..';

const textInputVariants = ['default', 'filled', 'unstyled'] as const;

const meta = {
    args: { label: 'Name', placeholder: 'Enter a name' },
    argTypes: {
        label: { control: 'text' },
        variant: { control: 'radio', options: textInputVariants }
    },
    component: TextInput,
    title: 'UI/Inputs/TextInput'
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
    render: (args) => (
        <Stack spacing="sm">
            {textInputVariants.map((variant) => (
                <TextInput
                    {...args}
                    key={variant}
                    label={variant}
                    variant={variant}
                />
            ))}
        </Stack>
    )
};
```

-   **Imports** come from the package entry (`'../../..'`), exactly like an app imports from `'inca-ui'`.
-   **Meta**: `const meta = {…} satisfies Meta<typeof X>` + `type Story = StoryObj<typeof meta>`. Default `args` go on `meta`; a story only sets the args it changes.
-   **Titles**: `UI/<Category>/<Name>` for extended Mantine components, `Components/<Name>` for custom ones. Don't rename existing titles; that breaks shared links.
-   **Story names**: `Primary` first, then `Variants`, `Sizes`, `Colors`, `Types`, `With<Feature>`.
-   **Option lists** (`buttonSizes`, `alertTypes`, …) are `as const` arrays at the top and reused in `argTypes` and `render`.
-   **Layout** with `Group` / `Stack` and tokens. No `<div style>` and no px.
-   **Labels** next to examples (a variant, size, color…) always use `StoryLabel` from `src/docs/StoryLabel`, so they all look the same (14px, `--text-default`, Source Code Pro). Show just the prop value, e.g. `filled`, `sm`, `500`.

(`spacing=` is Mantine 6. On `main` it is `gap=`.)

## Contributing and releasing

1. Branch off `main` or `v7`. Most changes go to both tracks: make one branch and one PR for each.
2. Make your change. Run `yarn storybook` and add or update the component's stories.
3. Run `yarn lint` and `yarn build`.
4. Add a changeset: run `yarn changeset`, pick **patch** or **minor** (never major) and describe the change. Commit the generated `.changeset/*.md` file.
5. Open a PR into the branch you started from (`main` or `v7`) and request a review from **Sharon**.
6. Once it's approved and merged, the [Release action](.github/workflows/release.yml) opens a **Version Packages** PR.
7. Merge **Version Packages**. That publishes to npm (`main` → `latest`, `v7` → `legacy`).

No manual `npm publish`. In a pinch, `yarn release` publishes to `latest` (use `DIST_TAG=legacy yarn release` from `v7`).
