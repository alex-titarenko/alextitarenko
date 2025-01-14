import CopyPlugin from 'copy-webpack-plugin';
import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Disable default image optimization
  },

  webpack: function (config) {
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
      new CopyPlugin({
        patterns: [
          {
            context: 'data/',
            from: 'posts/**/.attachments/*',
            to: path.resolve(__dirname, 'public/posts/.attachments/[name][ext]'),
            globOptions: {
              ignore: ['*.md']
            },
            force: true
          }
        ]
      })
    );

    return config;
  }
};

export default nextConfig;
