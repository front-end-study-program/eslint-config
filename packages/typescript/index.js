module.exports = {
  extends: [
    "@study-sea/eslint-config-basic",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking" // 要使用需要类型信息的规则，则需要配置 parserOptions.project 
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    // 解决因缩进造成的 eslint 错误
    indent: 'off',
    "@typescript-eslint/indent": ["warn", 2]
  }
}