//Introduction to functions
function lifeInWeeks(age) {
		var yearsReamaining = 90 - age;
		var x = yearsReamaining * 365;
		var y = yearsReamaining * 52;
		var z = yearsReamaining * 12;
		console.log("You have " + x + "days, " + y + "weeks, and " + z + "months left.");
	}
	lifeInWeeks(20);

//Learning Functions using BMI
function bmiCalculator(weight, height) {
    var bmi = weight/Math.pow(height, 2);
	return Math.round(bmi) 
}
var bmi = bmiCalculator(65, 1.8); 
console.log(bmi) 
