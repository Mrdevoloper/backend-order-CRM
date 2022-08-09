const model = require('./model');

module.exports = {
	Query: {
		branches: async (_, { resId }) => await model.getBranches(resId),
		brenches: async() => await model.ALLbranches()
	},
	Mutation: {
		newBranch: async (_, { name, pic, refId }) => {
			const createBranch = await model.newBranch(name, pic, refId);
			return createBranch;
		},
		deletebranch: async(_, {id}) => {
            const dropBranch = await model.deleteBranch(id)
            return dropBranch
        }
	},

	Branches: {
		id: (g) => g.branch_id,
		name: (g) => g.branch_name,
		pic: (g) => g.branch_pic,
		refId: (g) => g.res_ref_id
	},
};
