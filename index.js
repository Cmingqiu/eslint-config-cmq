module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeature: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'no-alert': 2,
    'space-in-parens': 2
    // more rules
  }
}
