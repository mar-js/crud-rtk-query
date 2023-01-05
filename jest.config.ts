// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from 'jest';

const customJestConfig: Config = {
  preset: 'ts-jest',
  // setupFiles: [ '<rootDir>/.jest/setEnvVars.ts' ],
  setupFilesAfterEnv: [ '@testing-library/jest-dom', '<rootDir>/jest.setup.ts' ],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/api',
    '<rootDir>/src/interfaces',
    '<rootDir>/src/mocks',
    '<rootDir>/src/components/index.tsx',
    '<rootDir>/src/layouts/index.tsx',
    '<rootDir>/src/hooks/index.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
}

export default customJestConfig
