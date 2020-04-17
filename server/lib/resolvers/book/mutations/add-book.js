const addBook = require('../../../methods/book/add-book');

module.exports = (_, { title, author }) => {
  try {
    const book = addBook({ title, author });
    return book;
  } catch (err) {
    throw err;
  }
};