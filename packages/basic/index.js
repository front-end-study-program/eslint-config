module.exports = {
  reportUnusedDisableDirectives: true, // 报告未使用 eslint 禁用注释
  extends: [
    "eslint:recommended",
    "standard"
  ],
  rules: {
    'no-unused-vars': 'warn',
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }]
  },
  ignorePatterns: ['dist/*', 'node_modules/*'] // 忽略文件或者目录，使用 glob 模式语法
}