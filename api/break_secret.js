const convertToNumber = require("../meta/convert_to_number")
const createPolynomial = require("../meta/create_polynomial")
const generatePieces = require("../meta/generate_pieces")

function breakSecret({ secretString, piecesCount, threshold }){
  let secretNumber = convertToNumber(secretString)
  let polynomial = createPolynomial(secretNumber, threshold)
  let pieces = generatePieces(polynomial, piecesCount)
  return pieces
}

module.exports = breakSecret

// console.log(breakSecret({
// 	secretString: "Ņ",
// 	piecesCount: 5,
// 	threshold: 2
// }))