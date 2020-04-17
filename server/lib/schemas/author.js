const { gql } = require('apollo-server');

module.exports = gql`
  type Author {
    name: String
    books: [Book]
  }

  extend type Query {
    getAuthors: [Author]
  }
`;
