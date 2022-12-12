const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
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
          from: 'posts/**/.attachments/*',
          to: path.resolve(__dirname, 'public/posts/.attachments/[name].[ext]'),
          ignore: ['*.md'],
          force: true
        }
      ]),
    );

    return config;
  }
};
