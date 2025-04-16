import { config } from '@netlify/remix-adapter'

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === 'production' ? config : undefined),
  // Update build directory configuration to match Netlify expectations
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "netlify/functions/server/index.js",
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/file-conventions/remix-config
}