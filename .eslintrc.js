// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 多余的空白
    'no-multi-spaces': 'off',
    // 多余的空白
    'no-trailing-spaces': 'off',
    'no-unused-vars': 'off',
    'object-property-newline': 'off',
    // 箭头函数禁止返回复制语句 关闭
    'no-return-assign': 'off',
    // var只能定义一个变量
    'one-var': 'off',
    // 禁止在表达式中使用赋值语句
    'no-cond-assign': 'off'
  }
}
