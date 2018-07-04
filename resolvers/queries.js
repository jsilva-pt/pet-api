import pet from '../models/pet';
import entity from '../models/entity';

const resolvers = {
  Query: {
    pets: () => pet.find(),
    entities: () => entity.find()
  }
}

export default resolvers;
