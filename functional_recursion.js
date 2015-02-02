function reduce(arr, fn, initial) {
	if (arr.length === 0) return initial;
	curValue = arr.shift();
	res = fn(initial, curValue, arr);
	return reduce(arr, fn, res);
}

module.exports = reduce;
