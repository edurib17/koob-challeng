const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  // eslint-disable-next-line prettier/prettier
  const {resolver:{sourceExts,assetExts}} = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
