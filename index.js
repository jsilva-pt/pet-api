const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of pets we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const pets = [
  {
    name: 'Pet 1'
  },
  {
    name: 'Pet 2'
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Pet" type can be used in other type declarations.
  type Pet {
    name: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    pets: [Pet]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve pets from the "pets" array above.
const resolvers = {
  Query: {
    pets: () => pets,
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
