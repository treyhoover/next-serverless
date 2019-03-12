const { resolve } = require('path');
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withOffline = require('next-offline');

const { parsed: env } = require('dotenv').config({
  path: resolve(__dirname, `.env/${process.env.ENV_FILE}`),
});

console.log('Using env:', JSON.stringify(env, null, 2));

const isProd = env.NODE_ENV === 'production';

const plugins = [
  [withTypescript],
  [withCSS],
  [
    withOffline,
    {
      workboxOpts: {
        globPatterns: ['./build/static'],
      },
    },
  ],
];

if (isProd) {
  plugins.push([
    withPurgeCss,
    {
      purgeCssPaths: ['pages/**/*', 'components/**/*'],
    },
  ]);
}

const config = {
  target: 'serverless',
  distDir: 'build',
  env,
};

module.exports = withPlugins(plugins, config);
