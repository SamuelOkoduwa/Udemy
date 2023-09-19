// DICE CHALLENGE

// The first player 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;	//Random number from 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png";	//Dice1.png to Dice6.png

randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice2.png

// to get the images
var image1 = document.querySelectorAll("img")[0];
// Attribute src to change
image1.setAttribute("src", randomImageSource);


// for the second player
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// if player wins
if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player One Wins"
}
else if (randomNumber2 > randomNumber1) {
	document.querySelector("h1").innerHTML = "Player Two Wins"
}
else {
	document.querySelector("h1").innerHTML = "DRAW"
}
