
/**
 * For Node.js, simply re-export the core `util.deprecate` function.
 */

module.exports = require('util').deprecate ? require('util').deprecate : require('./browser');
