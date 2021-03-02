module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.tes'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
