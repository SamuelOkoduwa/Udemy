function trial() {var guestList = ["James", "Jude", "Jerry", "John", "Jacob"];
var guestName = "Deborah";
if (guestList.includes(guestName)) {
	return ("Welcome") ;
} else{
	return ('try again next time')
}
//var checkMate = guestList.includes
//console.log(checkMate)
}
//console.log(trial());

//Adding elements and intermediate array techniques

function fizzBuzz() {
	var output = [];
	var count = 1;
	count++;
	if ((count % 3 === 0) && (count % 5 === 0)){
		return output.push("FizzBuzz")
	}
	else if (count % 3 === 0){
		return output.push("Fizz");
	}else if (count % 5 === 0){
		return output.push("Buzz");
	}
	else {
		output.push(count);
	}
	count++;
	return output;
}

console.log (fizzBuzz ())