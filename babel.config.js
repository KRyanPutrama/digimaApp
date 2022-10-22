module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugin: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
        },
      },
    ],
  ],
};
