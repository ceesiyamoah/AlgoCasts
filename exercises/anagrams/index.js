// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
const formatter = (str) => {
	const out = str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
	return out;
};
function anagrams(stringA, stringB) {
	return formatter(stringA) === formatter(stringB);
}

module.exports = anagrams;

// const getMap = (str) => {
// 	const count = {};
// 	str = str.replace(/[^\w]/g, '').toLowerCase();
// 	str.split('').forEach((item) => {
// 		count[item] = count[item + 1] || 1;
// 	});
// 	console.log(count);
// 	return count;
// };

// function anagrams(stringA, stringB) {
// 	mapA = getMap(stringA);
// 	mapB = getMap(stringB);

// 	if (Object.keys(mapA).length === Object.keys(mapB).length) {
// 		for (let i in mapA) {
// 			if (mapA[i] !== mapB[i]) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// 	return false;
// }
