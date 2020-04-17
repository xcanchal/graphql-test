let books = require('../../../../dataset');

module.exports = ({ title, author }) => {
  if (books.find((book) => book.title === title)) {
    throw new Error('Book already exists');
  }

  const book = { title, author };
  books = [...books, book];

  return book;
};