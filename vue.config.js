const { defineConfig } = require("@vue/cli-service");

const getPublikPath = () => {
  if (process.env.FOR_PAGES === "true") {
    return "/test/lid-game/";
  } else if (process.env.NODE_ENV === "production") {
    return "/lid-game/";
  }
  return "/";
};

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: getPublikPath(),
  productionSourceMap: false,
});
