// rollup.config.js
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const devMode = process.env.NODE_ENV === 'development';
console.log(`${devMode ? 'development' : 'production'} mode bundle`);

// JavaScript libraries are often packaged as CommonJS modules which you can install with npm.
// Rollup.js can parse CommonJS with the following plugins:
// 1. node-resolve locates a module in the project’s node_modules directory, and
// 2. plugin-commonjs converts CommonJS to ES6 modules.
// Enable/disable these plugins to include lodash in the bundle.
// Be aware: Rollup.js cannot tree-shake Lodash because it exports a single object with multiple methods. Most JavaScript libraries use a similar structure but the situation should improve as more developers adopt ES6 modules.
const pluginsToResolveCJSModules = [
  // nodeResolve(),
  // commonjs()
];

export default [
  {
    // ES6
    input: './src/main.js',
    plugins: [...pluginsToResolveCJSModules],
    output: {
      file: './build/bundle.js',
      format: 'es',
    },
  },
  {
    // You can transpile your code to ES5 using Babel if you’re unfortunate enough to have a reasonably high number of IE11 users. The resulting code should work in any browser (although you may still require Polyfills to add missing functionality in IE11).
    // Bundling two files from the same source is a better option. You can produce a small ES6 version loaded by all browsers which support ES modules and a larger ES5 fallback version for older browsers.
    // ES5
    input: './src/main.js',
    plugins: [
      ...pluginsToResolveCJSModules,
      getBabelOutputPlugin({
        presets: ['@babel/preset-env'],
      }),
    ],
    output: {
      file: './build/bundle-es5.js',
      format: 'cjs',
    },
  },
];
