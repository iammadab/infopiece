/*
	For secret reconstruction to work properly, the position of each pieces should be know.
	As such, I am appending that position to the beginning of each piece
*/
function pointsToPieces(points){
	let pieces = points.map((val, pos) => String(pos + 1) + String(val))
	return pieces
}

module.exports = pointsToPieces