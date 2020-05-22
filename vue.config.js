const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServerPort = 8060;

/**
 * Useful docs:
 * https://github.com/jantimon/html-webpack-plugin#generating-multiple-html-files
 * @type {{devServer: {proxy: {'/framed': {pathRewrite: {'^/.*': string}, target: string}}, port: number}, chainWebpack: chainWebpack}}
 */
module.exports = {
  devServer: {
    port: devServerPort,
    proxy: {
      '/framed': {
        target: `http://localhost:${devServerPort}`,
        pathRewrite: { '^/.*': '/framed.html' },
      },
    },
  },
  chainWebpack: (config) => {
    config.entryPoints.delete('app');
    config.entry('app')
      .add('./src/entryDefaultApp')
      .end();

    config.plugin('html-index')
      .use(HtmlWebpackPlugin, [{
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
        templateParameters: {
          BASE_URL: '/',
        },
        excludeChunks: ['framed'],
      }]);

    config.entry('framed')
      .add('./src/entryFramedApp')
      .end();

    config.plugin('html-framed')
      .use(HtmlWebpackPlugin, [{
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'framed.html',
        chunks: ['chunk-vendors', 'framed'],
        templateParameters: {
          BASE_URL: 'framed/',
        },
      }]);
  },
};
