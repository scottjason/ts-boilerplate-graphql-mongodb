module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        useBuiltIns: 'usage',
        corejs: '3',
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
  ],
};
