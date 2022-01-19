const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe-single-spa",
    projectName: "styleguide",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: {
      react: "react",
      "react-dom": "react-dom",
      "@mfe-single-spa/styleguide": "@mfe-single-spa/styleguide",
    },
  });
};
