import Pet from '../models/pet';
import entity from '../models/entity';

const resolvers = {
  Query: {
    pets: () => Pet.find(),
    entities: () => entity.find()
  }
}

export default resolvers;
