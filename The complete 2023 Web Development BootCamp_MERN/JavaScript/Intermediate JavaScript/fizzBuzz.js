// FizzBuzz game

// Using the while loop
var output = [];
var count = 1;
function FizzBuzz (){
	while (count <= 100){
		if (count % 3 === 0 && count % 5 === 0) {
			output.push ('FizzBuzz');
		}
		else if (count % 3 === 0) {
			output.push ('Fizz');
		} 
		else if (count % 5 === 0) {
			output.push ('Buzz')
		}
		else {
			output.push(count);
		}
		count ++;
	}
	console.log(output);
	
}
// result = FizzBuzz()
// console.log(result)

// Using the for loop 
var output = [];

function FizzBuzz (){
	for (var count = 1; count <= 100; count ++){
		if (count % 3 === 0 && count % 5 === 0) {
			output.push ('FizzBuzz');
		}
		else if (count % 3 === 0) {
			output.push ('Fizz');
		} 
		else if (count % 5 === 0) {
			output.push ('Buzz')
		}
		else {
			output.push(count);
		}
		
	}
	console.log(output);
	
}
result = FizzBuzz()
console.log(result)

