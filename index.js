import { ApolloServer, gql } from 'apollo-server'

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
import petTypeDefs from './schemas/pet'
import entityTypeDefs from './schemas/entity'

const typeDefs = `
  type Query {
    pets(page: Int!): [Pet],
    entities: [Entity]
  }

  type Mutation {
    addPet(
      name: String!,
      gender: String!,
      color: [String]!): Pet
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve pets from the "pets" array above.
import { merge } from 'lodash'
import Queries from './resolvers/queries.js'
import Mutations from './resolvers/mutations.js'

// Merge all of the resolver objects together
const resolvers = merge(
  Queries,
  Mutations
);

import { database } from './utils';
database.open();

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: [typeDefs].concat(petTypeDefs).concat(entityTypeDefs),
  resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
