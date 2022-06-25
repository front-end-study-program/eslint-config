module.exports = {
  env: {
    browser: true,
  },
  reportUnusedDisableDirectives: true, // 报告未使用 eslint-disable 禁用注释
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'standard'
  ],
  plugins: ['import'],
  overrides: [
    {
      files: ["*.html", "**/*.html"],
      plugins: ["html"], // 解析 html
    }
  ],
  rules: {
    // Possible Errors
    'no-debugger': 'off',
    'no-empty': 'off',

    // Best Practices
    'default-case': 'warn',

    // Stylistic Issues
    'jsx-quotes': ['warn', 'prefer-double'],
    'max-len': 'warn',
    'object-property-newline': ['warn', { 'allowAllPropertiesOnSameLine': false }],

    // es6
    'arrow-body-style': ['warn', 'as-needed'],
    'no-var': 'warn',
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true,
      avoidExplicitReturnArrows: true
    }],
    'prefer-arrow-callback': 'warn',
    'prefer-destructuring': 'warn',

    // import
    'import/order': 'warn',
    'import/no-mutable-exports': 'warn'
  },
  ignorePatterns: ['dist/**/*', 'node_modules/**/*'] // 忽略文件或者目录，使用 glob 模式语法
}