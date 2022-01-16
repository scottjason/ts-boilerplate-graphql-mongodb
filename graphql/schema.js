import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date
  type User {
    _id: String!
    email: String
    password: String
    cretedAt: Date
  }
  type IsAuthenticated {
    status: Int!
  }
  type SignIn {
    isAuthenticated: Boolean!
  }
  type CreateAccountPayload {
    _id: String!
    token: String!
    email: String!
  }
  input UserCredens {
    email: String!
    password: String!
  }
  input GetUserByEmail {
    email: String!
  }
  type SignOutUser {
    status: Int!
  }
  type Query {
    getUserByEmail(input: GetUserByEmail): User
    isAuthenticated: IsAuthenticated
  }
  type Mutation {
    createUser(input: UserCredens): CreateAccountPayload!
    signInUser(input: UserCredens): SignIn!
    signOutUser: SignOutUser!
  }
`;

export default typeDefs;
