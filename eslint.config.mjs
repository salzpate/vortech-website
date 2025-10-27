import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';

const eslintConfig = defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '!node_modules/',
    '/dist/**',
    'postcss.config.mjs',
    '**/setupTests.ts'
  ]),
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    extends: [reactPlugin.configs.flat.recommended, reactPlugin.configs.flat['jsx-runtime']],
    rules: {
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
])

export default eslintConfig
