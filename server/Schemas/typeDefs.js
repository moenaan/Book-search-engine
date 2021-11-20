const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    username: String!
    email: String
    bookCount: Int
    savedBooks: [book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Query {
      me: User
  }
  type Auth {
      token: ID!
      user: User
  }
`;

module.exports = typeDefs;
