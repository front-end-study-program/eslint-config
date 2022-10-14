module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    es6: true,
    node: true
  },
  reportUnusedDisableDirectives: true, // 报告未使用 eslint-disable 禁用注释
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:markdown/recommended'
  ],
  plugins: ['import', 'prettier', 'markdown'],
  overrides: [
    {
      files: ['*.html", "**/*.html'],
      plugins: ['html'], // 解析 html
    },
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
    'import/order': ['warn', { 
      "pathGroups": [
        {
          "pattern": "@/**",
          "group": "external"
        }
      ],
      "warnOnUnassignedImports": true
    }],
    'import/no-mutable-exports': 'warn',
    'import/no-unresolved': 'off',

    // prettier
    "prettier/prettier": [
      "error",
      {
        semi: false, // 末尾分号
        singleQuote: true, // 使用单引号
        arrowParens: 'avoid', // 箭头函数括号
        trailingComma: 'none', // 最后key不跟分号
        endOfLine: 'auto', // 结尾行号自动
      }
    ]
  },
  ignorePatterns: ['dist/**/*', 'node_modules/**/*'] // 忽略文件或者目录，使用 glob 模式语法
}
