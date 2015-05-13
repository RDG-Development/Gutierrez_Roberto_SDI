//Prompt and Alert



var userInput = prompt("Enter your year of birth");
console.log(userInput)

var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width");
var height = prompt("Please enter the height");

var area = width * height; //calculates with the informationg entered into the prompts
var result = "The area of your rectangle is" + " " + area + " " + "sq. ft.";
alert(result);
