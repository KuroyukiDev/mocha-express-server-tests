
var getSum = (a, b) => a + b;

var asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000);
};

var square = (x) => x * x;

var asyncSquare = (x, callback) => {
	setTimeout(() => {
		callback(x * x);
	}, 1000);
};

var setName = (user, fullName) => {
	var names = fullName.split(' ');
	user.fname = names[0];
	user.lname = names[1];
	return user;
}

module.exports = {
	getSum: getSum,
	sqr: square,
	setName: setName,
	asyncAdd: asyncAdd,
	asyncSqr: asyncSquare
};
