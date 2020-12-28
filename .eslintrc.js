module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'consistent-return': 0,
    'no-lonely-if': 0,
    'quote-props': 0,
    'prefer-rest-params': 0,
    'no-else-return': 0,
  },
};
