module.exports = {
  extends: [
    "@sea/eslint-config-ts",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime" // 为了支持 react 17 的 jsx rules 的规则。内部禁用了某些 jsx 相关的规则
  ]
}