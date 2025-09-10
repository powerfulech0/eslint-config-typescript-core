// @ts-check

import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

import tseslint from 'typescript-eslint';

import { defineConfig } from 'eslint/config';

export default defineConfig(
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintPluginReactHooks.configs['recommended-latest'],
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    ignores: ['node_modules/', 'dist/'],
  },
  {
    files: ['*.ts', '*.tsx'],
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    rules: {
      // Keep the rules alphabetized
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/member-delimiter-style': 'off',
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
      '@typescript-eslint/space-before-function-paren': 'off',
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
      'react-hooks/exhaustive-deps': 'error',
    },
  },
);
