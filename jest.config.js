module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: ['<rootDir>/**/*.{ts, tsx}'],
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  testMatch: ['<rootDir>/(tests/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'],
  setupFilesAfterEnv: ['./tests/setup.env.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
