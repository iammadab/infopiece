/*
	This function converts a number to it string representation.
	It takes each number from the string 3 digits at a time and converts it to its corresponding ascii character
*/
const ASCII_CODE_LENGTH = 3

function convertToString(number){
	number = padTillComplete(number, ASCII_CODE_LENGTH)
	let asciiCodes = breakNumber(number, ASCII_CODE_LENGTH)
	let string = asciiCodes.map(asciiValue).join("")
	return string
}

module.exports = convertToString

// This function keeps adding zeros to the beginning of the number until it's length is perfectly divisible by the ascii code length
function padTillComplete(number, length){
	let padCount = (length - (number.length % length)) % length
	return number.padStart(number.length + padCount, "0")
}

function breakNumber(number, length){
	let numberString = String(number), numberArray = []
	for(let i = 0; i < numberString.length; i += length){
		let current = ""
		for(let j = 0; j < length; j++){
			if(numberString.charAt(i + j))
				current += numberString.charAt(i + j)
		}
		numberArray.push(current)
	}
	return numberArray
}

function asciiValue(asciiCode){
	return String.fromCharCode(Number(asciiCode))
}

// console.log(convertToString("119105115100111109032105115032097032103111111100032098111121"))