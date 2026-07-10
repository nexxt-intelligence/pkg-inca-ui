# INCA-UI

This is a component library built for Nexxt Intelligence's inca platform.

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Runs the storybook app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Publishing

[Changesets](https://github.com/changesets/changesets) manages versioning, and the [Release GitHub Action](.github/workflows/release.yml) automatically publishes to npm.

### Two release tracks

This library is published on two parallel tracks so that apps on different React/Mantine versions can each stay supported:

| Branch | Stack | npm dist-tag | Install with |
| ------ | ----- | ------------ | ------------ |
| `main` | React 19 / Mantine 6+ | `latest` | `yarn add inca-ui` |
| `v7`   | React 16 / Mantine 6 (maintenance) | `legacy` | `yarn add inca-ui@legacy` (or pin `"inca-ui": "^7"`) |

The workflow runs on both branches and picks the dist-tag from the branch name (`main` → `latest`, otherwise → `legacy`). Both branches keep identical release config; propagate any workflow change by merging `main` into `v7`.

Pick the branch by what your change targets:

- **New features / the current stack** → `main`.
- **Bug fixes for React 16 consumers** → `v7`. Use only `patch`/`minor` changesets here so the line stays on `7.x`.

### Step-by-step

1. **Branch** off the appropriate track (`main` or `v7`) and make your changes.
2. **Create a changeset:** run `yarn changeset`, follow the prompt to pick the bump type (patch/minor/major) and write a summary. This generates a markdown file in `.changeset/`.
3. **Commit** your code together with the generated `.changeset/*.md` file, and open a PR against the track branch.
4. **Merge the PR.** The Release action runs and, because there is a pending changeset, opens (or updates) a **"Version Packages"** PR that bumps `package.json`, updates `CHANGELOG.md`, and deletes the consumed changeset files.
5. **Merge the "Version Packages" PR.** The Release action runs again and this time **publishes to npm** under the branch's dist-tag.

That's it — no manual `npm publish`. To release locally in a pinch, `yarn release` publishes to `latest` by default (override with `DIST_TAG=legacy yarn release`).
