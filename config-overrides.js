const {
  override,
  removeModuleScopePlugin,
  overrideDevServer,
  fixBabelImports,
  addWebpackAlias,
  setWebpackPublicPath,
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
const publicPathPlugin = (config, env) => {
  config.output.publicPath = '/test';
  return config;
};
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: 'css',
  // }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  setWebpackPublicPath(
    process.env.NODE_ENV === 'production' ? '/chromium-history-page' : '/'
  )
);
