module.exports = {
  extends: [
    "plugin:vue/vue3-recommended", // vue3 社区默认规则
    "@study-sea/eslint-config-ts"
  ],
  // 设置覆盖不同文件的解析器配置
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser", // 针对vue文件的解析器，默认是Espree解析器
      parserOptions: {
        parser: "@typescript-eslint/parser" // 针对vue文件中typescript语法的解析器
      }
    }
  ]
}