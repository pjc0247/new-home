const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
  };

  return config;
};