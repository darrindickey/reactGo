const PATHS = require('../paths');

module.exports = ({ production = false, browser = false } = {}) => {
  const enableHotModuleReplacement = !production && browser;
  const createPresets = enableHotModuleReplacement => {
    const presets = ['es2015', 'react', 'stage-0'];
    return enableHotModuleReplacement ? ['react-hmre', ...presets]: presets;
  };
  const presets = createPresets(enableHotModuleReplacement);

  const plugins = production ? [
    'transform-decorators-legacy',
    'transform-react-remove-prop-types',
    'transform-react-constant-elements',
    'transform-react-inline-elements'
  ]: ['transform-decorators-legacy'];

  return {
    test: /\.js$|\.jsx$/,
    loader: 'babel-loader',
    options: {
      presets,
      plugins
    },
    exclude: PATHS.modules
  };
};

