// eslint-disable-next-line @typescript-eslint/no-var-requires
const publicRuntimeConfig = require('./publicRuntimeConfig')

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig
}

module.exports = nextConfig
