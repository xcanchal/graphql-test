const getBooks = require('../../../methods/book/get-books');

module.exports = () => {
  try {
    const books = getBooks();
    return books;
  } catch (err) {
    throw new Error('Error getting books');
  }
};