// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	for (let i = 1; i <= n; i++) {
		let out = '';
		for (let j = 1; j <= n; j++) {
			if (j > i) {
				out += ' ';
			} else {
				out += '#';
			}
		}
		console.log(out);
	}
}

module.exports = steps;

// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let out = '#'.repeat(i);
// 		out += ' '.repeat(n - out.length);
// 		console.log(out);
// 	}
// }

// function steps(n) {
// 	for (let i = 1; i <= n; i++) {
// 		let out = '';
// 		for (let j = 1; j <= n; j++) {
// 			if (j > i) {
// 				out += ' ';
// 			} else {
// 				out += '#';
// 			}
// 		}
// 		console.log(out);
// 	}
// }
