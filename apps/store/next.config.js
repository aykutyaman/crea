//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  publicRuntimeConfig: {
    API: process.env.NEXT_PUBLIC_API,
  },
  serverRuntimeConfig: {
    API: process.env.NEXT_PUBLIC_API,
  },
};

module.exports = withNx(nextConfig);
