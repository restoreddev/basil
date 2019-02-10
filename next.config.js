const withCSS = require('@zeit/next-css');
const withGraphql = (nextConfig = {}) => {
  // See: https://github.com/lfades/next-plugin-graphql
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { dir } = options

      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        include: [dir],
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
      ? require('next/constants') // Get values from `next` package when building locally
      : require('next-server/constants'); // Get values from `next-server` package when building on now v2

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return withGraphql({
      publicRuntimeConfig: {
        storeUrl: 'https://m2.andrewdavis.me/',
        graphqlUrl: 'https://m2.andrewdavis.me/graphql',
      }
    });
  }

  const withCSS = require('@zeit/next-css');

  return withGraphql(withCSS({
    publicRuntimeConfig: {
      storeUrl: 'http://m2.localhost/',
      graphqlUrl: 'http://m2.localhost/graphql',
    }
  }));
};
