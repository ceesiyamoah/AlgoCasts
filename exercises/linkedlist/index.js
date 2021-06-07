// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		const newItem = new Node(item, this.head);
		this.head = newItem;
	}

	size() {
		let counter = 0;
		let check = this.head;
		while (check) {
			check = check.next;
			counter++;
		}
		return counter;
	}

	getFirst() {
		return this.head;
	}
	getLast() {
		return this.getAt(this.size() - 1);
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		this.removeAt(0);
	}

	removeLast() {
		this.removeAt(this.size() - 1);
	}

	insertLast(item) {
		const newItem = new Node(item);

		const last = this.getLast();
		if (last) {
			last.next = newItem;
		} else {
			this.head = newItem;
		}
	}

	getAt(index) {
		let counter = 0;
		let check = this.head;
		while (check) {
			if (counter === index) {
				return check;
			}
			counter++;
			check = check.next;
		}
		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}
		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}
	insertAt(item, index) {
		if (!this.head) {
			this.head = new Node(item);
			return;
		}
		if (index === 0) {
			this.head = new Node(item, this.head);
			return;
		}
		const previous = this.getAt(index - 1);
		if (!previous) {
			this.insertLast(item);
			return;
		}
		previous.next = new Node(item, this.getAt(index));
	}
	forEach(fn) {
		let check = this.getFirst();
		while (check) {
			fn(check);
			check = check.next;
		}
	}
	*[Symbol.iterator]() {
		let check = this.getFirst();
		while (check) {
			yield check;
			check = check.next;
		}
	}
}

module.exports = { Node, LinkedList };
