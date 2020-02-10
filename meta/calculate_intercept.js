const BigNumber = require("bignumber.js")
const buildMatrix = require("./build_matrix")
const solveMatrix = require("./solve_matrix")

function calculateIntercept(points){
	let matrix = buildMatrix(points), result = extractResult(points)
	let solvedMatrix = solveMatrix(matrix, result)
	return grabIntercept(solvedMatrix)
}

module.exports = calculateIntercept


function extractResult(points){
	return points.map(point => {
		return new BigNumber(point.point)
	})
}

function grabIntercept(matrix){
	return matrix[0].toFixed()
}