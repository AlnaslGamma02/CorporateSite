module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        // import文をそのままにする
        modules: false,
        // 使っている物だけインポート
        useBuiltIns: 'usage',
        // core-js@3を指定
        corejs: 3
      }
    ]
  ];

  return {
    presets
  };
};
