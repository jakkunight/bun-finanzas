// babel.config.js
module.exports = function (api) {
  api.cache(true);
    return {
      presets: [
        "babel-preset-expo",
        "module:metro-react-native-babel-preset"
      ],
      plugins: [
        "expo-router/babel",
        "nativewind/babel",
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
      ],
  };
};
