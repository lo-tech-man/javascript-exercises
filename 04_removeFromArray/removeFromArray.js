const removeFromArray = function(array, ...theArgs) {
	const newArray = [];

	for (const element of array) {
		if (theArgs.indexOf(element) === -1) {
			newArray.push(element);
		}
	}

	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
