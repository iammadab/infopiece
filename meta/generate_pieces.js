/*
	This function takes a polynomial, and computes the values of the polynomial for values 1,2,3,...,piecesCount
	All these values are returned in an array
*/
function generatePieces(polynomial, piecesCount){
	let pieces = []
	for(let i = 1; i <= piecesCount; i++){
		pieces.push(solvePolynomialFor(polynomial, i))
	}
	return pieces
}

module.exports = generatePieces

function solvePolynomialFor(polynomial, x){
	let values = polynomial.map((term, pos) => computeTerm(pos, term, x))
	return values.reduce((acc, curr) => acc + curr, 0)
}

function computeTerm(position, term, x){
	return term * Math.pow(x, position)
}

// console.log(generatePieces([325, 210], 4))