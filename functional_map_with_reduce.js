module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, curr, index, arr) {
		prev.push(fn(curr, index, arr));
		return prev;
	}, []);
}
