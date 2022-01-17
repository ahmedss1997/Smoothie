module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  devServer: { host: "localhost", port: "8080" },
  publicPath: '/Smoothie'
};
