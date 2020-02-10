const convertToNumber = require("../meta/convert_to_number")
const createPolynomial = require("../meta/create_polynomial")
const generatePoints = require("../meta/generate_points")
const pointsToPieces = require("../meta/points_to_pieces")

function breakSecret({ secretString, piecesCount, threshold }){
  let secretNumber = convertToNumber(secretString)
  let polynomial = createPolynomial(secretNumber, threshold)
  let points = generatePoints(polynomial, piecesCount)
  let pieces = pointsToPieces(points)
  return pieces
}

module.exports = breakSecret

// console.log(breakSecret({
// 	secretString: "Ņ",
// 	piecesCount: 5,
// 	threshold: 2
// }))