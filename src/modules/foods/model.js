const { fetch, fetchAll } = require('../../utils/postgres');

const BRANCH_FOODS = `
    Select * from foods where branch_ref_id = $1
`;

const ALLFOODS = `
   Select * from foods
`;

const DeleteFoods = `
   delete from foods where food_id = $1 RETURNING *;
`;

const NEW_FOOD = `
    INSERT INTO foods (food_name, food_pic, food_price, branch_ref_id) VALUES($1, $2, $3, $4) RETURNING *
`;

const DeleteFood = (id) => fetch(DeleteFoods, id)

const newFood = (name, pic, price, refId) =>
	fetch(NEW_FOOD, name, pic, price, refId);

const getAllfoods = () => fetchAll(ALLFOODS);
const getFoods = (branchId) => fetchAll(BRANCH_FOODS, branchId);

module.exports = {
	getFoods,
	getAllfoods,
    newFood,
    DeleteFood
};
