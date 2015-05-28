/*
Roberto Gutierrez
Functions Assignment
5/27/2015
Section 001
SDI
 */

// Create an alert to test the connection.

alert("Testing Connection!!! Are we ready?");

//create  a gaming scenario where multiple functions are used to calculate results.

//Create an alert that welcomes the user.
alert("Welcome to the Cave of Trials.");

//Create a prompt that stores a users name.
var userName = prompt("What is your name?");

//Console.log the username.
console.log(userName);

//Create a validity check for username
if(userName == ""){
    var userName = prompt("Your entry was left blank. You will be named 'Hunter' if a name is not entered.\nWhat is your name?");

//Create a validity check that will store a default username.
    if(userName == ""){
        var userName = "Hunter";

    };
//console.log final username
    console.log(userName);
};

//Create a user prompt that stores the users Class.
var userClass = prompt("Before entering, you must choose a class. You can choose between the following three.\nWarrior\nMage\nRanger");

//Create a validation for user entry of user Class
if(userClass !== "Warrior" & userClass !== "Mage" & userClass !== "Ranger" & userClass !== "warrior" & userClass !== "mage" & userClass !== "ranger" || userClass == ""){

//Create a prompt for the second chance entry.
    var userClass = prompt("Your entry was invalid. Please enter a class as shown.\nIf you do not choose a valid class you will become a Peasant by default. \nWarrior\nMage\nRanger.");

//Create an alternative condition if user decides not to enter class.
    if(userClass !== "Warrior" & userClass !== "Mage" & userClass !== "Ranger" & userClass !== "warrior" & userClass !== "mage" & userClass
        !== "ranger" || userClass == ""){

        //Create the alternative class
        var userClass = "Peasant";

    };
};
