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

console.log(reconstructSecret({
	pieces: [
	"1211953987246531974271815489232541878698533305403788962137368480231291292627741658988708066801782027348379715725802253041342947424491207837867431699336216058545427104143176", 
	"5623285807792271434954949025702580917072206126574508682242429924688328026750307906551411945568510008277482158168882844746586348993983634732853030064236639880598671116235416"
	]
}))