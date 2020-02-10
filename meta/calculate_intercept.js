const BigNumber = require("bignumber.js")

function calculateIntercept(points){
	let matrix = buildMatrix(points), result = extractResult(points)
	let solvedMatrix = solveMatrix(matrix, result)
	return grabIntercept(solveMatrix)
}

module.exports = calculateIntercept


function extractResult(points){
	return points.map(point => {
		return new BigNumber(point.point)
	})
}

function buildMatrix(points){
	
}