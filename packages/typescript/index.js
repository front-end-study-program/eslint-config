module.exports = {
  parser: "@typescript-eslint-parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.vue"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking" // 要使用需要类型信息的规则，则需要配置 parserOptions.project 
      ]
    }
  ]
}