const path = require('path');

const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  public: '/assets/', // use absolute path for css-loader?
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};
