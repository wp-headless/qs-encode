const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '..'),
  cacheDirectory: path.resolve(__dirname, '..', '.jest-cache'),
  coverageDirectory: path.resolve(__dirname, '..', '.jest-coverage'),
  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
