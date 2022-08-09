const model = require('./model');

module.exports = {
	Query: {
		orders: async() => await model.order()
	},
	Mutation: {
        newOrder: async(_, {name, userName, userNumber, userLocation}) => {
			const createOrder = await model.NewOrder(name, userName, userNumber, userLocation)
			return createOrder;
		},

		deleteOrders: async(_, {id}) => await model.deleteOrder(id)
	},

	Orders: {
		id: (g) => g.order_id,
		name: (g) => g.order_name,
		userName: (g) => g.ordered_user_name,
		userNumber: (g) => g.ordered_user_number,
		userLocation: (g) => g.ordered_user_location,
        time: (g) => g.ordered_time
	},
};
