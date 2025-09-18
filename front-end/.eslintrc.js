module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 调整严格的格式规则
    'vue/multi-word-component-names': 'off', // 允许单单词组件名
    'vue/valid-template-root': 'error', // 保持错误，但确实需要修复
    'no-trailing-spaces': 'warn', // 改为警告
    'indent': 'off', // 关闭缩进检查
    'eol-last': 'warn', // 改为警告
    'key-spacing': 'warn', // 改为警告
    'comma-dangle': 'warn', // 改为警告
    'no-multiple-empty-lines': ['warn', { max: 2 }] // 允许最多2个空行
  }
}
