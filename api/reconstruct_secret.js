function reconstructSecret({ pieces }){
  let points = piecesToPoint(pieces)
  let intercept = calculateIntercept(points)
  let secret = convertToString(intercept)
  return secret
}

module.exports = reconstructSecret