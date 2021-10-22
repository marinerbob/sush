/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      importHelpers: true,
    },
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest.enzyme.js'],
  collectCoverage: true,
  cacheDirectory: '<rootDir>/.cache/unit',
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/src/**/*.spec.tsx'],
  testPathIgnorePatterns: ['<rootDir>/src/__mocks__/*'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.d.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.test.ts',
    '!<rootDir>/src/**/__*__/*',
    '!<rootDir>/src/utils/testing.ts',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css)$': '<rootDir>/src/__mocks__/styleMock.ts',
  },
};
