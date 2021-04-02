const {
  override,
  removeModuleScopePlugin,
  overrideDevServer,
} = require('customize-cra');

const addProxy = (proxy) => (config) => {
  config.proxy = proxy;
  return config;
};

module.exports = {
  webpack: override(removeModuleScopePlugin()),
  // devServer: overrideDevServer(addProxy({})),
};
