const { gql } = require('apollo-server');

module.exports = gql`
  type Book {
    title: String
    author: String
  }

  extend type Query {
    getBooks: [Book]
  }

  extend type Mutation {
    addBook(title: String, author: String): Book
  }
`;
