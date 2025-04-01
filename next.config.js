const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  reactStrictMode: true,
  webpack: (config) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
    return config;
  },
})