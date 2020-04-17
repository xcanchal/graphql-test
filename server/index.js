const { ApolloServer, gql } = require('apollo-server');
const { merge } = require('lodash');

// Type definitions
const {
  book: Book,
  author: Author
} = require('./lib/schemas');

// Resolvers
const bookResolvers = require('./lib/resolvers/book');
const authorResolvers = require('./lib/resolvers/author');

// If you had Query fields not associated with a specific type you could put them here
//  Note: In the current version of GraphQL, you can’t have an empty type even if you intend to extend it later. So we need to make sure the Query type has at least one field — in this case we can add a fake _empty field. Hopefully in future versions it will be possible to have an empty type to be extended later.
const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

// The ApolloServer constructor requires two parameters: your schema definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: [Query, Mutation, Book, Author],
  resolvers: merge(bookResolvers, authorResolvers),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});