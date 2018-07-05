import Pet from '../models/pet';
import entity from '../models/entity';

const resolvers = {
  Query: {
    pets: (obj, {page}, context, info) => {
      return Pet.find()
    },
    entities: () => entity.find()
  }
}

export default resolvers;
