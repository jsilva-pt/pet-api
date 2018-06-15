const { ApolloServer, gql } = require('apollo-server');

// This is a (sample) collection of pets we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const pets = [
  {
    name: 'Pet 1',
    gender: 'male',
    images: [
      'http://placekitten.com/160/120'
    ],
    color: [
      'black',
      'white'
    ]
  },
  {
    name: 'Pet 2',
    gender: 'female',
    images: [
      'http://placekitten.com/160/120'
    ],
    color: [
      'black'
    ]
  },
  {
    name: 'Pet 3',
    gender: 'male',
    images: [
      'http://placekitten.com/160/120'
    ],
    color: [
      'black'
    ]
  },
  {
    name: 'Pet 4',
    gender: 'male',
    images: [
      'http://placekitten.com/160/120'
    ],
    color: [
      'black'
    ]
  },
  {
    name: 'Pet 5',
    gender: 'male',
    images: [
      'http://placekitten.com/160/120'
    ],
    color: [
      'black'
    ]
  },
  { name: 'Pet 6', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 7', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 8', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 9', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 10', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 11', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 12', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 13', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 14', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 15', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 16', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 17', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 18', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 19', images: ['http://placekitten.com/160/120'] },
  { name: 'Pet 20', images: ['http://placekitten.com/160/120'] }
];

const entities = [
  {
    name: 'Entity 1'
  },
  {
    name: 'Entity 2'
  },
  {
    name: 'Entity 3'
  },
  {
    name: 'Entity 4'
  },
  {
    name: 'Entity 5'
  },
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Pet" type can be used in other type declarations.
  type Pet {
    name: String,
    gender: String,
    images: [String],
    color: [String]
  }

  type Entity {
    name: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    pets(page: Int!): [Pet],
    entities: [Entity]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve pets from the "pets" array above.
const resolvers = {
  Query: {
    pets: (obj, {page}, context, info) => {
      var perPage = 15
      var a = page - 1
      var from = a * perPage
      var to = page * perPage
      return pets.slice(from, to)
    },
    entities: () => entities
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
