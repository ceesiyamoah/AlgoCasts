// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	let counters = [0];
	let arr = [root, '-'];
	while (arr.length > 1) {
		const out = arr.shift();
		if (out === '-') {
			counters.push(0);
			arr.push('-');
		} else {
			arr.push(...out.children);
			counters[counters.length - 1]++;
		}
	}
	return counters;
}

module.exports = levelWidth;
