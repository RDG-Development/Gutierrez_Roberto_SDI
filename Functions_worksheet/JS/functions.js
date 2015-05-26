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
    return circumference;
};
//Create a variable that allows the user to enter their own radius.
var userRadius = Number(prompt("What is the radius of your circle?"));

//Create a validity test for userRadius variable.
if(isNaN(userRadius) || userRadius <= 0){
    userRadius = Number(prompt("You have entered an invalid number.\nPlease enter a number greater than zero or your circumference will not be calculated."));
};

//Create a variable that holds the final solution for the user.
var userCircumference = calculateCircumference(userRadius);

//Create a conditional statement that executes after a valid user entry.
if(userCircumference > 0) {
    alert("The circumference of your circle is " + userCircumference + " units.");
    alert("Thank you for using our circumference calculator.")
};

//Create a conditional that occurs after a invalid user entry.
if(isNaN(userCircumference) || userCircumference <= 0){
    alert("The value you have entered was invalid and was not calculated.\nPlease refresh the page if you want to start over.");
};

//console.log the final entry that the user has input.
console.log("The circumference of your circle is " + userCircumference + " units.");


//Problem 2 Stung!
/*It takes 8.666666667 bee stings per pound to kill an animal.
Calculate how many bee stings are needed to kill an animal in a function
 */

alert("Warning: User the area you are about to enter is highly infested with killer bees. This website lets you know how many bee stings would cause a human or an animal death.");


var beeStingCalculation = function(p){
    var stingPerPound = 8.666666667;
    var totalNumberOfStings = stingPerPound * p;
    return totalNumberOfStings;
        };

var userPoundsInput = Number(prompt("What is the weight of the animal or human in pounds? You can put your own wight.\nOnly enter a number value."));

if(isNaN(userPoundsInput) || userPoundsInput < 0){
    var userPoundsInput = Number(prompt("You have entered an invalid value\nWhat is the weight of the animal or human in pounds? You can put your own wight.\nOnly enter a number value or your value will not be calculated."));
};


var userStingValue = beeStingCalculation(userPoundsInput);

if(isNaN(userStingValue) || userStingValue < 0) {
    alert("User, the value you have entered was invalid because it was either not a number or less than 0.\nPlease refresh the page in order to try again.");

    if (userStingValue > 0){
        alert("The number of stings that would be fatal towards an animal or human of " + userPoundsInput + " pounds is, " + userStingValue + " stings.");
}

}