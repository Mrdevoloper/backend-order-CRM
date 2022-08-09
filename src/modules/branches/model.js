
const { fetch, fetchAll } = require('../../utils/postgres')

const RES_BRANCHES = `
    Select * from res_branches where res_ref_id = $1
`

const ALL_BRANCHES = `
    SELECT * FROM res_branches
`
const DeleteBranches = `
   delete from res_branches where branch_id = $1 RETURNING *;
`;

const NEW_BRANCH = `
    INSERT INTO res_branches (branch_name, branch_pic, res_ref_id) VALUES($1, $2, $3) RETURNING *
`
const deleteBranch = (id) => fetch(DeleteBranches, id)
const ALLbranches = () => fetchAll(ALL_BRANCHES)
const newBranch = (name, pic, refId ) => fetch(NEW_BRANCH, name, pic, refId )
const getBranches = resId => fetchAll(RES_BRANCHES, resId )

module.exports = {
    getBranches,
    newBranch,
    ALLbranches,
    deleteBranch
}