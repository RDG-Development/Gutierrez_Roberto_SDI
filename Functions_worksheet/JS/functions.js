/*
Roberto Gutierrez
Functions Worksheet
5/25/2015
SDI
 */



//alert("Testing Connection!")


/*Comment each line of code appropriately. Comment, comment, comment!
 Write the givens as variables, and pass the givens to the function using arguments.
 The calculations should be within the functions and the function should return the result to the result variable.
 Create a variable for your result (don’t forget!)
 Print the result using the result variable and the appropriate message outside the function. (Do not print from the functions you create)
 There should be a minimum of 20 commits to your git repository.
 This should all be done in a single project and single .as file.
*/

// Circumference. Problem 1

//Create a function that calculates the circumference of a circle.
var calculateCircumference = function(r){
   //Create variables that hold the value for pi and the calculation for diameter.
    var pi = 3.14;
    var diameter = 2*r;
//Create a variable that holds the calculation of pi * diameter
    var circumference = pi * diameter;
    return circumference
};

var userRadius = Number(prompt("What is the radius of your circle?"));

if(isNaN(userRadius) || userRadius <= 0){
    userRadius = Number(prompt("You have entered an invalid number.\nPlease enter a number greater than zero or your circumference will not be calculated."));
};

