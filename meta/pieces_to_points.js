/*
	Each piece contains its position in the collection of pieces, this function extracts that position,
	and the actual point encoded by the piece
*/
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