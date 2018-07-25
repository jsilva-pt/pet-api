import Pet from '../models/pet';
import entity from '../models/entity';

const resolvers = {
  Query: {
    pets: (obj, {page, perPage}, context, info) => {
      page--
      return Pet.find().skip(perPage * page).limit(perPage)
    },
    pet: (obj, {_id}, context, info) => Pet.findById(_id),
    entities: () => entity.find()
  }
}

export default resolvers;
