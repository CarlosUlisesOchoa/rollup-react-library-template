# React Component Library Template/Boilerplate

A template and quick-starter kit for creating your own modern React library using Rollup.

## Introduction

This boilerplate leverages [Rollup](https://rollupjs.org/) for bundling, providing a solid starting point for developing React component libraries.

## Features

- Bundling with [Rollup](https://rollupjs.org/) for `commonjs` and `es` module formats.
- Testing with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).
- Support for [TypeScript](https://www.typescriptlang.org/) for static type checking.
- Sourcemap generation for easier debugging.
- CSS/SASS support for styling components.
- Bundle size optimization with [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser).
- Automatic externalization of peerDependencies in the Rollup bundle using [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external).
- Code formatting and linting with ESLint & Prettier.

## Getting Started

1. Create a new repository using this template.
2. Clone your repository.
3. Enable `pnpm` (if not already enabled) and install dependencies with `npm install`.

### Development

For local development, run Rollup in watch mode to automatically recompile your `src/` module into `dist/` on file changes.

```bash
npm run dev
```

### Scripts:

- `npm run build`: Builds the library to dist.
- `npm run dev`: Builds the library and watches for changes.
- `npm test`: Runs tests and displays coverage.
- `npm run lint`: Lints your code.
- `npm run prettier`: Formats your code with Prettier.

### Publishing to npm:

publish to npm
Run:

```bash
npm publish
```

## License

[MIT](LICENSE).
