const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)
  config.resolve.alias['../Utilities/Platform'] =
    'react-native-web/dist/exports/Platform'
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve('expo-crypto'),
  }
  return config
}
