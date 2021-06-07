// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	let count = {};
// 	let max = 0;
// 	let maxChar = '';
// 	str.split('').forEach((item) => {
// 		count[item] = count[item] + 1 || 1;
// 	});

// 	for (let char in count) {
// 		if (count[char] > max) {
// 			max = count[char];
// 			maxChar = char;
// 		}
// 	}
// 	return maxChar;
// }

function maxChar(str) {
	let count = {};
	str.split('').forEach((item) => {
		count[item] = count[item] + 1 || 1;
	});
	return Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
}

module.exports = maxChar;
