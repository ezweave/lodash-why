module.exports = {
    rootDir: 'src',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
      '<rootDir>/**/*.ts',
      '!<rootDir>/index.ts',
      '!<rootDir>/types/**/*.ts',
      '!<rootDir>/**/*.spec.ts',
      '!<rootDir>/__fixtures__/**/*.ts',
      '!<rootDir>/test/**/*.ts',
      '!<rootDir>/dist/**/*.ts',
      '!<rootDir>utilities/generators/files/generateUserJSON.ts'
    ],
    coverageThreshold: {
      global: {
        'functions': 44,
        'statements': 44 
      }
    },
    globals: {
      'ts-jest': {
        tsConfigFile: 'tsconfig.json',
        enableTsDiagnostics: true
      }
    },
    moduleNameMapper: {
      '@why/(.*)': '<rootDir>/src/$1',
    },
    moduleFileExtensions: [
      'ts',
      'js',
      'json'
    ],
    moduleDirectories: [
      'node_modules'
    ],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testPathIgnorePatterns: [
      '!<rootDir>utilities/generators/files/generateUserJSON.ts'
    ],
    testMatch: [
      '<rootDir>/**/?(*.)(spec|test).ts?(x)'
    ]
  }
