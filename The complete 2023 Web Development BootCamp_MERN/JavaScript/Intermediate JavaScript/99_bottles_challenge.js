//  Lyrics of Song 99 Bottles of Beer
// 99 bottles of beer on the wall, 99 bottles of beer,
// Take one down and pass it around, 98 bottles of beer on the wall.

//  var bottles = 99;
//  while (bottles => 0){
// 	var bottleWord = 'bottle';
// 	if (bottles === 1) {
// 		bottleWord = 'bottles';
// 	}
// 	console.log(bottles + " " + bottleWord + ' of beer on the wall, ');
// 	console.log(bottles + " " + ' bottles of beer, ');
// 	console.log('Take one down, pass it around, ')
// 	bottles --;
// 	console.log(bottles + ' ' + ' bottles of beer on the wall');
//  }

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}