module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['css-modules'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:css-modules/recommended',
  ],
  rules: {
    'prettier/indent': 'off',
    indent: ['error', 2],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true }],
    semi: [2, 'always'],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-no-explicit-any': 'off',
  },
};
