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
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@foo)'],
  moduleNameMapper: { '\\.(css|less)$': '<rootDir>/assets/css/__mocks__/styleMock.js' },
};
