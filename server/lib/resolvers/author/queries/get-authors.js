const getAuthors = require('../../../methods/author/get-authors');

module.exports = () => {
  try {
    const authors = getAuthors();
    return authors;
  } catch (err) {
    throw new Error('Error getting authors');
  }
};