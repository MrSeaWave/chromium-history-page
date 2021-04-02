const {
  override,
  removeModuleScopePlugin,
  overrideDevServer,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

const addProxy = (proxy) => (config) => {
  config.proxy = proxy;
  return config;
};

// module.exports = {
//   webpack: override(removeModuleScopePlugin()),
//   // devServer: overrideDevServer(addProxy({})),
// };

module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: 'css',
  // }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
