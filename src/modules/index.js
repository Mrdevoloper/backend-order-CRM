const resModule = require('./restaurants')
const branchModule = require('./branches')
const scalar = require('./scalar')
const foodsModule = require('./foods')
const orderModule = require('./orders')

module.exports = [
    resModule,
    branchModule,
    scalar,
    foodsModule,
    orderModule
]