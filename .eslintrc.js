module.exports = {
  extends: ['eslint-config-encode/typescript', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 'off', // 关闭require校验
  },
};
