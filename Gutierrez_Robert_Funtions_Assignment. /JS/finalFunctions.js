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

//console.log the final user class, and alert the user of their choice.
console.log(userClass);
alert(userName + ", you are a " + userClass + ". You will now enter the Cave of Trials.");

//Alert the user of the first trial.
alert("You pass through a narrow cavern and emerge into a strange room? There are grave head stones all around, with an ominous fog creeping around you. Suddenly a hand sprouts out of the ground and grips your ankle. Startled you jump back to free yourself. 100 rotted corpses emerge from the ground. With hunger driving them, they slowly begin to surround you.\nPREPARE TO DEFEND YOURSELF.");

