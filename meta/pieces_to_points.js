function piecesToPoints(pieces){
	return pieces.map(extractPosition)
}

module.exports = piecesToPoints

function extractPosition(piece){
	let pieceString = String(piece), position = pieceString.charAt(0), point = pieceString.substr(1)
	return {
		position,
		point
	}
}

// console.log(piecesToPoints(["023", "5445"]))