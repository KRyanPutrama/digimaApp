const presets = ['module:metro-react-native-babel-preset'];
const plugins = [];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': './src',
    },
  },
]);
// Reanimated plugin has to be listed last.

module.exports = {
  presets,
  plugins,
};
