const books = require('../../../../dataset');

module.exports = () => books.map(({ author }) => ({ name: author }));

