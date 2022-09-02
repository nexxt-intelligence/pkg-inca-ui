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

Changesets are used to manage version upgrades, and a GitHub action is configured to automatically publish to npm when a changeset has been merged to the main branch.

When committing code, simply remember to run `yarn checkset` and to follow the prompt. Then use `git add` to create the generated file (in `.changeset/`) to your commit, and push.

GitHub will automatically create a PR with your changes. When it is merged, an action will be executed which automatically publishes to npm!
