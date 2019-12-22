const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://www.alextitarenko.me',
  pagesDirectory: __dirname + "\\..\\out",
  targetDirectory : 'out/',
  ignoreIndexFiles: true,
  ignoredPaths: [
    '404',
    'sitemap'
  ],
  ignoredExtensions: [
    'png',
    'jpg',
    'ico',
    'svg',
    'txt'
  ],
});
