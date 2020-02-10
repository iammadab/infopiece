const BigNumber = require("bignumber.js")

/*
	The reconstruction process involves solving a system of linear equations
	This function takes the points provided and build a matrix that represents the system of equations
*/

function buildMatrix(points){
	let threshold = points.length, 
			matrix = points.map(point => generateRow(point, threshold))
	return matrix
}

module.exports = buildMatrix

function generateRow(point, threshold){
	let row = []
	for(let pos = 0; pos < threshold; pos++){
		row.push(computeTerm(point.position, pos))
	}
	return row
}

// This computes the co-efficient of each of the constants a0,a1,...an
function computeTerm(point, position){
	let term = Math.pow(point, position)
	return new BigNumber(term)
}