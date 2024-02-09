// rollup.config.mjs
import { babel } from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser' // This plugin helps to minify the js output bundle
import resolve from '@rollup/plugin-node-resolve' // This plugin helps to resolve the node_modules for commonjs "require" (not needed for esm modules)
import commonjs from '@rollup/plugin-commonjs' // This plugin converts CommonJS modules to ES6, so they can be included in a Rollup bundle
import typescript from '@rollup/plugin-typescript' // This plugin helps to transpile TypeScript to JavaScript
import dts from 'rollup-plugin-dts' // This plugin helps to generate .d.ts files from TypeScript
import autoprefixer from 'autoprefixer' // This plugin helps to add vendor prefixes to the CSS
// import postcss from 'rollup-plugin-postcss' // NOTE: This is the official plugin, but it doesn't support modules
import postcss from 'rollup-plugin-postcss-modules' // This plugin helps to process CSS files
import peerDepsExternal from 'rollup-plugin-peer-deps-external' // This plugin helps to exclude peer dependencies from the bundle

import pkg from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      postcss({
        modules: true,
        extensions: ['.css'],
        // extract: true, // TODO: Investigate about this option
        plugins: [autoprefixer()],
        writeDefinitions: true,
        // modules: { ... }
      }),
      terser({
        // This is the configuration for the terser plugin (minification of the js bundle)
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'], // Remove console.log statements
        },
      }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(css|less|scss)$/],
    plugins: [dts()],
  },
]
