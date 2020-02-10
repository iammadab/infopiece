/*
	This function creates a polynomial by returning an array whose elementes represent the co-efficients a0,a1,a2,...,an
	The polynomial will be used to generate the pieces later on
	The conversion of the secret to a number might remove zeros (0) at the beginning of the secret
	This should be taken note of inorder to avoid conversion errors

	An improvement will be to distribute the polynomial over a finite field so as to avoid floating point issues
*/

function createPolynomial(secretNumber, threshold){
	let secret = Number(secretNumber), polynomial = [secret, ...guess(secret, threshold - 1)]
	return polynomial
}

module.exports = createPolynomial

function guess(secret, threshold){
	let guesses = []
	for(let i = 0; i < threshold; i++){
		guesses.push(random(secret))
	}
	return guesses
}

function random(number){
	return Math.floor(Math.random() * number)
}