const sumAll = function(from, to) {
	if (!Number.isInteger(from) ||
		!Number.isInteger(to) ||
		from < 0 ||
		to < 0) {
			return "ERROR";
	} else {
		let finalResult = 0;

		if (from > to) {
			for (let i = to; i <= from; i++) {
				finalResult += i;
			}
		} else {
			for (let i = from; i <= to; i++) {
				finalResult += i;
			}
		}
		return finalResult;
	}
};

// Do not edit below this line
module.exports = sumAll;
