/*
	This function takes a polynomial, and computes the values of the polynomial for values 1,2,3,...,piecesCount
	All these values are returned in an array
*/
function generatePoints(polynomial, piecesCount){
	let points = []
	for(let i = 1; i <= piecesCount; i++){
		points.push(solvePolynomialFor(polynomial, i))
	}
	return points
}

module.exports = generatePoints

// This is equivalent to passing a value x in a polynomial
function solvePolynomialFor(polynomial, x){
	let values = polynomial.map((term, pos) => computeTerm(pos, term, x))
	return values.reduce((acc, curr) => acc + curr, 0)
}

// A polynomial has terms separted by an operator e.g +, each of those terms return different values
// This function, calculates the value that should be returned based on the position in the polynomial,
// the value of the term and the value of x in the polynomial
function computeTerm(position, term, x){
	return term * Math.pow(x, position)
}

// console.log(generatePoints([325, 210], 4))