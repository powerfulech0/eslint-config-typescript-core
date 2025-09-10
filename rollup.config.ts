import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'index.ts',
    plugins: [
      typescript({
        noForceEmit: true,
      }),
      commonjs(),
      nodeResolve(),
    ],
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: 'true',
      },
      {
        dir: 'dist/es',
        format: 'es',
        sourcemap: 'true',
      },
    ],
    external: [/node_modules/],
  },
];
