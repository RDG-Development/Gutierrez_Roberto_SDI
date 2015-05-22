/*
Roberto Gutierrez
5/21/2015
Conditionals Assignment
SDI
Section 001
 */

//Test page with an alert to make sure the .js file is linked to the html file.
//alert("Testing Connection!!!");

/*
Create a variable and prompt that welcomes a user and asks them to enter their name?
 */

var userName = prompt("Welcome, Hero! What is your name?");

//validate the prompt.
if(userName === ""){
    //This will run if user does no enter a anything.
    userName = prompt("Your entry was blank!. \nPlease enter your heroes name.");
}
//log the userName in console
console.log(userName);

//alert user that he/she has entered is a hero and is at a crossroad of destinies.

alert(userName + ", before you lies three paths. You must choose your destiny and reap its benefits, or suffer its' consequences.");


//Create an array of the three paths a user can choose.

var chooseAPath = [1,2,3];

//Console.log the variable to see if it captures the values.
console.log(chooseAPath);

//Create a "string" path for each array value that describes the path
//chooseAPath[0] = "Dark Forest";

//console.log each path see if string is captured.
//console.log(chooseAPath[0]);

//chooseAPath[1] = "Volcanic Valley";

//console.log(chooseAPath[1]);

//chooseAPath[2] = "Icy Tundra";

//console.log(chooseAPath[2]);

//Create a prompt that allows the user to choose which path
var userPathChoice = prompt(userName + " Will you choose Path 1?\n Path 2?\n or Path 3?\n Enter only the number value of the path you choose.");






