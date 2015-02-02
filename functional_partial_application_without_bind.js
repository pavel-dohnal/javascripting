var slice = Array.prototype.slice

function logger(namespace) {

	return function () {
		var a = slice.call(arguments);
		a.unshift(namespace);
		console.log.apply(this, a);
	};
};

module.exports = logger;
