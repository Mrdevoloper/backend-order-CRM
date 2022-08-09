const { fetch, fetchAll } = require('../../utils/postgres');

const GET_restaurants = `
    SELECT * FROM restaurants
`;

const Market_by_id = `
  select * from restaurants where res_id = $1
`;
const newCtegory = `
  INSERT INTO restaurants(res_name, res_pic) VALUES($1, $2) RETURNING *
`;

const Deletecategory = `
   delete from restaurants where res_id = $1 RETURNING *;
`;
const deleteRes = (id) => fetch(Deletecategory, id);
const ALL_restaurants = () => fetchAll(GET_restaurants);
const getResId = (resID) => fetch(Market_by_id, resID);
const newcategory = (name, pic) => fetch(newCtegory, name, pic);

module.exports = {
	ALL_restaurants,
	getResId,
	newcategory,
	deleteRes,
};
