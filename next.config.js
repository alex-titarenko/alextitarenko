const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = withCSS(withSass({
  webpack: function (config, options) {
    config.externals = (config.externals || []).concat('fs');
    config.module.rules.concat([
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]);

    config.plugins.push(
      new CopyWebpackPlugin([
        {
          context: 'data/',
          from: 'posts/**/*',
          to: path.resolve(__dirname, 'public/images/'),
          ignore: ['*.md'],
          force: true
        }
      ]),
    );

    return config;
  }
}));
