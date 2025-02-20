module.exports = {
  output: {
    // 允许库在多种环境下使用
    libraryTarget: 'umd',
    // 定义不同环境下全局变量名称
    globalObject: 'this',
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
  // 指定react包不会在打包文件中
  externals: [
    {
      react: 'React',
    },
  ],
};
