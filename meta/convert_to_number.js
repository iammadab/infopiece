/* 
	This function converts a string to its number representation based on the ascii character code
	Each ascii character is padded with zeros unilt its length is 3 characters, so as to allow for easy conversion back to strings
*/
function convertToNumber(string){
	let characters = string.split("")
	let numberString = characters.map(character => {
		let asciiValue = asciiChar(character), paddedValue = String(asciiValue).padStart(3, "0")
		return paddedValue
	}).join("")
	return numberString
}

module.exports = convertToNumber


function asciiChar(character){
	return character.charCodeAt(0)
}