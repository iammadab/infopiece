const breakSecret = require("./api/break_secret")
const reconstructSecret = require("./api/reconstruct_secret")

module.exports = {
  breakSecret,
  reconstructSecret
}

let pieces = breakSecret({
	secretString: "test",
	piecesCount: 5,
	threshold: 1
})
console.log(pieces)

let text = reconstructSecret({
	pieces: [pieces[0], pieces[2], pieces[4]]
})

console.log(text)