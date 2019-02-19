const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withOffline = require('next-offline');

module.exports = withPlugins(
  [
    [withTypescript],
    [withCSS],
    [withOffline],
    [
      withPurgeCss,
      {
        purgeCssPaths: ['pages/**/*', 'components/**/*'],
      },
    ],
  ],
  {
    target: 'serverless',
    distDir: 'build',
  }
);
