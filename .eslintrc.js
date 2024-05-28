module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['node_modules/**/*', 'dist/**/*', 'src/public/**/*'],
  extends: ['standard'],
  root: true,
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
