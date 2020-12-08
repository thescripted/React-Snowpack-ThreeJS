/**
 * Configuration file for Snowpack.
 * Snowpack uses the webpack plugin for bundling the built site for use in production.
 */
module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },
  devOptions: {
    port: 3000
  },
  plugins: [
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: true,
        failOnWarnings: false,
        extendConfig: (config) => {
          return config;
        }
      },
    ],
  ],
};
