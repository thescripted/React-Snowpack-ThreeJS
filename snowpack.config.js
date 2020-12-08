/**
 * Configuration file for SnowpackJS.
 * Snowpack is used for development purposes only. This config file will only
 * touch development-related configurations.
 * Webpack is used to create a production-ready bundle. All built/exported files
 * are completed with Webpack.
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

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
          config.output = { path: path.resolve(__dirname, "GTSucks") }
          config.plugins.push(
            new HtmlWebpackPlugin({
              template: path.resolve(__dirname, "public", "index.html")
            })
          );
          return config;
        }
      },
    ],
  ],
};
