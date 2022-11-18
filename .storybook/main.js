const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: { builder: 'webpack5' },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    config.plugins.push(
      new webpack.DefinePlugin({
        'import.meta.env': JSON.stringify(process.env),
      }),
    )
    return config
  },
}
