import mongoose from 'mongoose';
import Pet from '../models/pet';

const resolvers = {
  Mutation: {
    async addPet(root, { name, gender, color }, context) {
      console.log(`adding pet '${name}' '${gender}' '${color}'`)
      
      return await new Pet({
        _id: mongoose.Types.ObjectId(),
        name: name,
        gender: gender,
        images: [
          "http://placekitten.com/160/120"
        ],
        color: color
      }).save()
    },
    async updatePet(root, { _id, name, gender, color }, context) {
      console.log(`updating pet '${name}' '${gender}' '${color}'`)
      
      return await Pet.findByIdAndUpdate(_id, {
        $set: {
          name: name,
          gender: gender,
          images: [
            "http://placekitten.com/160/120"
          ],
          color: color
        }
      },
      (err, pet) => {
        if (err) return console.log(err);
        return pet;
      })
    },
    async removePet(root, { _id }, context) {
      console.log(`removing pet '${_id}'`)

      return await Pet.findByIdAndRemove(_id, (err, pet) => {  
        if (err) return false
        return true;
      });
    }
  }
}

export default resolvers;
