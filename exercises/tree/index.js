// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
	add(item) {
		this.children.push(new Node(item));
	}
	remove(item) {
		this.children = [...this.children.filter((i) => i.data !== item)];
	}
}

class Tree {
	constructor() {
		this.root = null;
	}
	traverseBF(fn) {
		let check = [this.root];
		while (check.length) {
			const first = check.shift();
			check.push(...first.children);
			fn(first);
		}
	}
	traverseDF(fn) {
		let check = [this.root];
		while (check.length) {
			const first = check.shift();
			check.unshift(...first.children);
			fn(first);
		}
	}
}

module.exports = { Tree, Node };
