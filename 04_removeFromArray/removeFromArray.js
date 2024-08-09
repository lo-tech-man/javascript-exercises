const removeFromArray = function(...theArgs) {
	const ourArray = theArgs[0];

	for (let i = 1; i < theArgs.length; i++) {
		let indexOfCurrentArgument = ourArray.indexOf(theArgs[i]);
		
		if (indexOfCurrentArgument !== -1) {
			console.log(`Specified element found at index ${indexOfCurrentArgument}.`);
			ourArray.splice(indexOfCurrentArgument, 1);
			i -= 1; // check if there's more than one instance of theArgs[i]
		}
	}

	return ourArray;
};

// Do not edit below this line
module.exports = removeFromArray;
