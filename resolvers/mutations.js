import Pet from '../models/pet';

const resolvers = {
  Mutation: {
    addPet(root, { name, gender, color }, context) {
      console.log(`adding pet '${name}' '${gender}' '${color}'`)
      
      var yo = new Pet({
        name: name,
        gender: gender,
        images: [
          "http://placekitten.com/160/120"
        ],
        color: color
      })

      yo.save()
    },
  }
}

export default resolvers;
