/**
 * Configuration file for SnowpackJS.
 * Snowpack is used for development purposes only. This config file will only
 * touch development-related configurations.
 * Webpack is used to create a production-ready bundle. All built/exported files
 * are completed with Webpack.
 */

module.exports = {
  mount: {
    public: "/",
    src: "/_dist_"
  },
  devOptions: {
    port: 3000
  }
}
