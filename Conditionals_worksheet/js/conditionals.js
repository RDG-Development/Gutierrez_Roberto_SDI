/*
Roberto Gutierrez
5/19/2015
SDI
section 001
Conditionals_worksheet
 */



//Problem 1

/*Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.
 */

//Alert the user what the following will do.

alert("The following pop-up windows will assist you in converting temperature from/to Fahrenheit or from/to Celsius depending on what you want to do. Follow the instructions carefully.");


//Create a variable that prompts the user how many degrees they want to convert.

/*_______________var howManyDegrees = parseInt(prompt("What is the temperature that you want to convert from? Only type the number, Example: Type ( 100 ) for 100 degrees fahrenheit/celsius"));

console.log(howManyDegrees);

//Create variables for fahrenheit and celsius

var fahrenheit = "F";

var celsius = "C";


//Create a prompt that asks the user what they want to convert to.

var convertTo = prompt("What do you want to convert your temperature to? Type " + fahrenheit + " for fahrenheit, or " + celsius + " for celsius. Make sure to capitalize your response. ");

console.log(convertTo);

//Create variables that hold the conversion calculations.

var ThirtyTwo = 32

var fiveNinths = 5/9
//Make one variable that holds the celsius Conversion
var convertToCelsius = (howManyDegrees - ThirtyTwo) * fiveNinths;

console.log(convertToCelsius);

//Make a Variable that holds the fahrenheit conversion
var convertToFahrenheit = (howManyDegrees / fiveNinths) + ThirtyTwo;

console.log(convertToFahrenheit);

//Create your conditional if and else statement.

/*Within your conditionals add alerts that initiates if an outcome is true.
 */
/*______________if(fahrenheit == convertTo){
    alert("Your temperature in degrees fahrenheit is " + convertToFahrenheit + " " + fahrenheit + ".")
}else if(celsius == convertTo){
    alert("Your temperature in degrees celsius is " + convertToCelsius + " " + celsius + ".")
}else{ alert("You have entered something invalid. Please refresh the page and try again.")};



//Problem 2

/*
 Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
 */

//Create variables for the username and password that a user can create through prompts
var createUserName = prompt("Welcome. Please create a username.");
    console.log(createUserName);

var createPassword = prompt("Thank you. Now create a password. ");
    console.log(createPassword);

var loginWithUserName = prompt("To Login, enter your username.");
    console.log(loginWithUserName);

var loginWithPassword = prompt("To Login, enter your password.");
    console.log(loginWithPassword);

if((createUserName == loginWithUserName) && (createPassword == loginWithPassword)){
     console.log("Welcome, " + createUserName + "!")

}else if((createUserName !== loginWithUserName) && (createPassword == loginWithPassword)){
    console.log("User not found. Please try again.")

}else if((createPassword !== loginWithPassword) && (createUserName == loginWithUserName)){
    console.log("Password does not match our records.")

}else if((createUserName !== loginWithUserName) && (createPassword !== loginWithPassword)){
    console.log("User not found, and password does not match our records. Please try again.")
};





