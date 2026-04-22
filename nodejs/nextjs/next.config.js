/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      DEPLOIO_GIT_REVISION: process.env.DEPLOIO_GIT_REVISION,
    },
}

module.exports = nextConfig
