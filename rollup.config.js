import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import {terser} from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    typescript({
        typescript: require('typescript')
    }),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true
    }),
    terser() // minifies generated bundles
  ],
  external: ['react', 'react-dom', 'styled-components'],
  globals: { 'styled-components': 'styled' },
};

