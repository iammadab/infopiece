const piecesToPoint = require("../meta/pieces_to_points")
const calculateIntercept = require("../meta/calculate_intercept")
const convertToString = require("../meta/convert_to_string")

function reconstructSecret({ pieces }){
  let points = piecesToPoint(pieces)
  let intercept = calculateIntercept(points)
  let secret = convertToString(intercept)
  return secret
}

module.exports = reconstructSecret

// console.log(reconstructSecret({
// 	pieces: ["1535", "2745"]
// }))