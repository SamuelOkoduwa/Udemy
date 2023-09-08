//Coding Exercise of who is buying lunch
function Name (nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]){
	var newList = nameList[(Math.floor(Math.random() * Array.length))]
	return newList
};
//console.log(nameList)

//OR 

function whosPaying (names) {
	var numberOfPeople = names.length;
	randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
	var randomPerson = names[randomPersonPosition];

	return randomPerson + " is going to buy lunch today"
}
whosPaying()