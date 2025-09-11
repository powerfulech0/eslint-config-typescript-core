import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' with { type: 'json' };

export default [
  // ESM
  {
    input: './index.ts',
    output: {
      dir: './dist/esm',
      format: 'esm',
      sourcemap: 'true',
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: './dist/esm/dts',
      }),
      nodeResolve(),
    ],
    external: [/node_modules/],
  },
  // ESM (types)
  {
    input: './dist/esm/dts/index.d.ts',
    output: [{ file: packageJson.types, format: 'es' }],
    plugins: [dts()],
  },
  // CJS
  {
    input: './index.ts',
    output: {
      dir: './dist/cjs',
      format: 'cjs',
      sourcemap: 'true',
    },
    plugins: [typescript(), commonjs(), nodeResolve()],
    external: [/node_modules/],
  },
];
