# CZI Storybook

The [Name of design system] is a repository of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components used to build React-based products for [Company Name].

## Running the development environment

To get started, type the following commands into the terminal:

- Clone this repository
- `npm install`
- `npm start` will start Storybook.

## Working with components

Start building in the `src/components` folder with this folder structure:

```
- ComponentName
  = tests/ComponentName.test.js
  - ComponentName.js
  - ComponentName.scss
  - ComponentName.stories.js
  - index.js
```

- `ComponentName.js` contains the JSX and functionality for the component.
- `ComponentName.scss`contains the styles for the component
- `ComponentName.stories.js` contains all the [stories](https://storybook.js.org/basics/writing-stories/) for the component.
- `index.js` re-exports `ComponentName.js` as a default to make consumption cleaner
- `tests/ComponentName.test.js` contains the component tests

Components in this library exist in a flat structure so each component directory needs to contain exactly one component file. Certain components may require several components to properly function (for instance, a `Table` may consist of `TableRow` and `TableCell` subcomponents), and these components should live as siblings in the `components` directory.

For instance, in order to create a `Button` component, we sould create a directory `src/components/Button` and add `Button.scss`, `Button.js`, `index.js`, and `Button.stories.js`.

**Button.js** will contain something along the lines of:

```js
import React from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button className="Button" {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
```

**Button.stories.js** will be:

```js
import React from 'react';
import Button from './Button';

export default {
  title: 'Molecules/Buttons/Button',
  component: Button,
};

export const Default = () => <Button>Hello Button</Button>;
```

### Rendering Pages in Storybook

Typically, Storybook deals exclusively with non-page level components, leaving page-level composition to happen inside an actual application. However, a sturdy design system requires the ability to render static views of applications outside an application environment in order to ensure lower-level components come together to form a cohesive whole. Therefore, pages are represented in Storybook and can be found in `.storybook/pages/`

## Organizing Components

Storybook allows you to created a nested tree in the left navigation by the following syntax:

```
export default {
  component: Counter,
  title: 'Molecules/Forms/Counter'
};
```

We're using the atomic design methodology to cluster components into [atoms](http://atomicdesign.bradfrost.com/chapter-2/#atoms), [molecules](http://atomicdesign.bradfrost.com/chapter-2/#molecules), and [organisms](http://atomicdesign.bradfrost.com/chapter-2/#organisms). Therefore the top-level navigation categories for Storybook are:

- Atoms
- Molecules
- Organisms
- Pages
- Snowflakes

The component stucture is as follows:

```
Atoms
--Design Tokens
--Component Category
----Component Name
------Component Stories
Molecules
--Component Category
----Component Name
------Component Stories
Organisms
--Component Category
----Component Name
------Component Stories
Pages
--Product Name
----Template Name
----AND/OR
----Flow Name
------Template Name
Snowflakes
--Component Name
----Component Stories
```

**Atoms**, **Molecules**, and **Organisms** all follow a general pattern of:

```
--Component Category
----Individual Component Name
------Individual Component Stories
```

For instance, `Molecules/Blocks/Cards` would look something like:

```
Molecules
--Blocks
----Card
------Default
------Inverted
------With Image
------[Other Variations]
```

**Atoms** contains an additional `Design Tokens` story, which is used to visualize and describe the design tokens for the design system.

**Pages** follows this organizational structure:

```
Pages
--Product Name
----Template Name
----AND/OR
----Flow Name
------Template Name
```

For instance, Date page templates would look something like this:

```
Pages
--Date
----Date 1
------My Dates
------My Dates Empty Cancelled State
------Personal Information
------Date Details
----Cancel Path
------Date Cancellation
------Type
------[Other Cancel]
```

### Snowflakes

**Snowflakes** are "one-off" product-specific components that are _not_ included in the design system. These components are necessary for building product screens, but are too specific to be abstracted into the design system. Snowflake components may be revisited and pulled into the design system at a later date.

Snowflake component live in `.storybook/snowflakes` and take the following shape in Storybook:

```
Snowflakes
--Component Name
----Component Stories
```

Also, snowflake components should _not_ include the `.cn-` CSS prefix, since they are not part of the design system (so a snowflake could look like `.c-snowflake-name`). However, the other design system CSS conventions should be followed in order to make refactoring into the design system as easy as possible.

## [Design System] Product Workflow

### Git Flow

This project uses [Git-flow](https://nvie.com/posts/a-successful-git-branching-model/) to manage the development workflow. Here's a breakdown of what this means for the design system:

- The `master` always represents the latest production-ready version of the design system. Every commit to `master` indicates a new release.
- The `dev` branch is where ongoing development happens.
- `feature` branches are for standalone/larger product features, and are created using the syntax `feature/[feature-name]`.
- `release` branches are for preparing the next release of the design system. Only bug fixes and metadata changes should happen in release branches.
- `hotfix` branches are for fixes that need to be production.

We follow the process outlined in [this article](https://nvie.com/posts/a-successful-git-branching-model/), which gets into the specifics.

## Versioning

[Design System] uses [SemVer](https://semver.org/) semantic versioning to keep track of ongoing changes to the product. The three types of versions are:

- **Major (X.y.z)** - Major versions contain breaking changes to [Company Name] developers builds.
- **Minor (x.Y.z)** - Minor versions add new features or deprecate existing features without breaking changes.
- **Patch (x.y.Z)** - Patch versions fix defects or optimize existing features without breaking changes.

Look to [this helpful document](http://designsystem.morningstar.com/about/versioning.html) from the Morning Star design system for detailed guidance on versioning.

---

### Releasing a new version of [Design System]

Note: the following steps are not fully baked yet and there's quite a few things to iron out. This is the workflow as it currently stands but is likely going to change.

1. When a new release is coming up, a `release` branch is created from `dev` (i.e. `release-1.1`). In this branch, only bugfixes and metadata commits are permitted in order to prepare for releasing a new version of the design system. Update the changelog to represent changes in latest version.
2. Merge release branch into `master` when the release is ready
3. Run `npm version [major|minor|patch] -m "tag message goes here"` to tag the release. [npm version](https://docs.npmjs.com/cli/version.html) increments the version number in `package.json` in addition to creating a git tag for the new release.
4. Run `git tag -a v[version] -m "tag message goes here"` to tag the design system assets for the new release.
5. Push the changes to the `master` branch.
6. Communicate the changes via all appropriate channels. TODO determine communication strategy for new release
