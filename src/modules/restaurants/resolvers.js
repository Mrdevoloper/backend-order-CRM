const model = require('./model')

module.exports = {
    Query: {
        restaurants: async() => {
            return await model.ALL_restaurants()  
        }
    },

    Mutation: {
        newCategory: async(_, {name, pic}) => {
              const createCotegory = await model.newcategory(name, pic)
              return createCotegory
        },

        deleteCategory: async(_, {id}) => {
            const dropCategory = await model.deleteRes(id)
            return dropCategory
        }
    },

    Restaurants: {
        id: g => g.res_id,
        name: g => g.res_name,
        pic: g => g.res_pic,
    }
}