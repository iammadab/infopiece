function breakSecret({ secretString, piecesCount, threshold }){
  let secretNumber = convertToNumber(secretString)
  let polynomial = createPolynomial(secretNumber, threshold)
  let pieces = generatePieces(polynomial, piecesCount)
  return pieces
}

module.exports = breakSecret