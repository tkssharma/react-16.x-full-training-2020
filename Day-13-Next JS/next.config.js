const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = withTypescript(withSass({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
}));