module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: false
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2020
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['prettier'],
  rules: {}
}
