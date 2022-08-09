const model = require('./model');

module.exports = {
	Query: {
		foods: async (_, { branchId }) => await model.getFoods(branchId),
		all_foods: async() => await model.getAllfoods()
	},
	Mutation: {
		newFoods: async (_, { name, pic, price, refId}) => {
			const createFoods = await model.newFood(name, pic, price, refId);
			return createFoods;
		},
		deleteFoods: async(_, {id}) => {
            const dropFood = await model.DeleteFood(id)
            return dropFood
        }
	},

	Foods: {
		id: (g) => g.food_id,
		name: (g) => g.food_name,
		pic: (g) => g.food_pic,
		price:(g) => g.food_price,
		refId: (g) => g.branch_ref_id
	},
};
