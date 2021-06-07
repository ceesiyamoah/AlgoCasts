// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str
		.split('')
		.reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

// let newWord=''
// for (let i of 'Greetings!'){
//   newWord=i+newWord
// }

// const word='Greetings!'
// let newWord1=''
// for (let i=word.length-1;i>=0;i--){
//   newWord1=newWord1+word[i]
// }

function reverse(str) {
	return str.split('').reverse().join('');
}
