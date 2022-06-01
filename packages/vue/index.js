module.exports = {
  extends: [
    "plugin:vue/vue3-recommended" // vue3 社区默认规则
  ],
  parser: "vue-eslint-parser", // 针对vue文件的解析器，默认是Espree解析器
  parserOptions: {
    vueFeatures: {
      filter: false, // 用来指定vue过滤器语法是否在模版中生效
    }
  },
}