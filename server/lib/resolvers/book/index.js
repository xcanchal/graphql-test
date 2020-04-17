const requireDirectory = require('require-directory');
const camel = require('camelcase');

module.exports = {
  Query: requireDirectory(module, 'queries', { rename: camel }),
  Mutation: requireDirectory(module, 'mutations', { rename: camel }),
};