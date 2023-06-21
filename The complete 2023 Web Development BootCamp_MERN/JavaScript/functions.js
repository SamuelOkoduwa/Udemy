//Introduction to functions
function lifeInWeeks(age) {
		var yearsReamaining = 90 - age;
		var x = yearsReamaining * 365;
		var y = yearsReamaining * 52;
		var z = yearsReamaining * 12;
		console.log("You have " + x + "days, " + y + "weeks, and " + z + "months left.");
	}
	lifeInWeeks(20);

