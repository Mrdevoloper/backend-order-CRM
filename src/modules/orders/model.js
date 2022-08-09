const { fetch, fetchAll } = require('../../utils/postgres');

const Order = `
    Select * from orders;
`;
const newOrder = `INSERT INTO orders(order_name,  ordered_user_name, ordered_user_number, ordered_user_location) VALUES($1, $2, $3, $4) RETURNING *`;


const deleteOrders = `delete from orders where order_id = $1 RETURNING * `

const deleteOrder= (id) => fetch(deleteOrders, id)
const order = () => fetchAll(Order);
const NewOrder = (name, userName, userNumber, userLocation) =>
	fetch(newOrder, name, userName, userNumber, userLocation);

module.exports = {
	order,
	NewOrder,
	deleteOrder
};
