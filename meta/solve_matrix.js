// Extend bignumber to include the cmp and sub functions
const BigNumber = require("bignumber.js")
BigNumber.prototype.cmp = BigNumber.prototype.comparedTo
BigNumber.prototype.sub = BigNumber.prototype.minus

const GaussianElimination = require("na-gaussian-elimination")
const zero = new BigNumber(0)
GaussianElimination.defaultOptions.zero = zero


function solveMatrix(matrix, result){
	let ge = new GaussianElimination()
	let system = ge.solve(matrix, result)
	return system.solution
}

module.exports = solveMatrix