// import UserModel from '../models/pet'
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
];;

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

const resolvers = {
  Query: {
    pets: () => pets,
    entities: () => entities
  }
}

export default resolvers;
