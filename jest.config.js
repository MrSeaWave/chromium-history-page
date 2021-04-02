module.exports = {
  preset: 'jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts'], // 指定要测试的文件类型的后缀
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.[jt]s'],
};
