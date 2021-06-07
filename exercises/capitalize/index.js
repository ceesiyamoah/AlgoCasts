// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	let out = '';
	str.split('').forEach((value, index) => {
		if (str[index - 1] === ' ' || index === 0) {
			out += str[index].toUpperCase();
		} else {
			out += value;
		}
	});
	return out;
}

module.exports = capitalize;

// function capitalize(str) {
// 	const out = [];
// 	str.split(' ').forEach((i) => {
// 		out.push(i.replace(i[0], i[0].toUpperCase()));
// 	});

// 	return out.join(' ');
// }
