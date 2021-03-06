const path = require('path');
const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: [/\.stories\.js$/, /index\.js$/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  // TEMP fix: https://github.com/plotly/plotly.js/issues/2466#issuecomment-372924684
  defaultConfig.plugins.push(new webpack.IgnorePlugin(/vertx/));

  return defaultConfig;
};
