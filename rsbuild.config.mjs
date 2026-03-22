import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginTypedCSSModules } from '@rsbuild/plugin-typed-css-modules';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';


export default defineConfig({
  source: {
    entry: {
      index: './index.ts',
    },
  },

  dev: false,

  output: {
    target: 'node',
    distPath: './build',
    externals: ['react', 'date-fns', 'react-dom', 'react-router', 'react-router-dom'],
    minify: true,
    filenameHash: true,
    cleanDistPath: false,
    manifest: false,
    polyfill: 'entry',
  },

  tools: {
    cssLoader: {
      modules: {
        exportLocalsConvention: 'camel-case',
        namedExport: true,
      },
    },
    rspack: {
      plugins: process.env.RS_DOCTOR ? [new RsdoctorRspackPlugin()] : [],
    },
  },

  plugins: [
    pluginReact(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      babelLoaderOptions(opts) {
        opts.plugins?.unshift('babel-plugin-react-compiler');
      },
    }),
    pluginSass(),
    pluginTypedCSSModules(),
  ],
});
