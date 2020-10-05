const config = require(`./${process.env.REACT_APP_API_CONFIG}.json`);
// Used export syntax instead of module.exports due to error for module being read-only
export default config;
