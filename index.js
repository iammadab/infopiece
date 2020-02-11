const breakSecret = require("./api/break_secret")
const reconstructSecret = require("./api/reconstruct_secret")

module.exports = {
  breakSecret,
  reconstructSecret
}

let pieces = breakSecret({
	secretString: "another test string? with symbols!",
	piecesCount: 20,
	threshold: 3
})
console.log(pieces)

let text = reconstructSecret({
	pieces: [pieces[0], pieces[2], pieces[4]]
})

console.log(text)