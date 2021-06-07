// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	if (max !== null && node.data > max) {
		return false;
	}
	if (min !== null && node.data > min) {
		return false;
	}
	if (node.left) {
		max = node.data;
		if (node.left.data < node.data && node.data.left < max) {
			node = node.left;
			max = node.data;
			validate(node);
		} else {
			return false;
		}
	}
	if (node.right) {
		min = node.data;

		if (node.data < node.right.data && node.right.data > min) {
			node = node.right;
			max = node.data;
			validate(node);
		} else {
			return false;
		}
	}

	return true;
}

module.exports = validate;
