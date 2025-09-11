// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

// import prettier from 'eslint-plugin-prettier/recommended';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    ignores: ['node_modules/', 'dist/'],
    files: ['**/*.ts'],
    rules: {
      // Keep the rules alphabetized
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'array-bracket-spacing': 'error',
      'array-callback-return': 'error',
      eqeqeq: ['error', 'always'],
      curly: 'error',
      'function-call-argument-newline': ['error', 'consistent'],
      'id-length': ['error', { exceptions: ['e', 'y', 'x', 'i', '_'] }],
      'newline-before-return': 'error',
      'no-alert': 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-nested-ternary': 'error',
      'no-restricted-syntax': [
        'error',
        // ban all enums
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums are not allowed.',
        },
      ],
      'no-tabs': 'error',
      'no-ternary': 'off',
      'no-unused-vars': 'off',
      'no-use-before-define': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
    },
  },
);
