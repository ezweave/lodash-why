
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {
      '@typescript-eslint/array-type': [
        'error',
        { default: 'generic' }
      ],
      '@typescript-eslint/quotes': [
        'error',
        'single'
      ],
      '@typescript-eslint/semi': [
        'error',
        'always'
      ],
      '@typescript-eslint/no-unused-vars': [
        'error', 
        { 
          'argsIgnorePattern': '^_' 
        }
      ],
      'comma-dangle': [
        'error',
        {
          'arrays': 'always-multiline',
          'objects': 'always-multiline',
          'imports': 'always-multiline',
          'exports': 'always-multiline',
          'functions': 'never'
        }
      ],
      'eol-last': [
        'error',
        'always'
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': [ 
          'error',
          {
              'ignore': [
                  'aws-lambda' // for some reason, the import plugin has problems with some definitely typed modules
              ]
          }
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'always'
      ],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }