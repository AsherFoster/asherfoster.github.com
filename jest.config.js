module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/stub.js'
  }
};
