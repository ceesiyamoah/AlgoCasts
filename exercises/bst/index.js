// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
	insert(item) {
		if (item < this.data) {
			if (this.left) {
				this.left.insert(item);
			} else {
				this.left = new Node(item);
			}
		} else {
			if (this.right) {
				this.right.insert(item);
			} else {
				this.right = new Node(item);
			}
		}
	}

	contains(item) {
		if (item === this.data) {
			return this;
		}
		if (item < this.data) {
			if (this.left) {
				return this.left.contains(item);
			}
		} else {
			if (this.right) {
				return this.right.contains(item);
			}
		}
		return null;
	}
}

module.exports = Node;
