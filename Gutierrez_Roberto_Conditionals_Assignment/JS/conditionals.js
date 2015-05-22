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
    userName = prompt("Your entry was blank!. \nPlease enter your heroes name or you will be Nameless");
}

if(userName === ""){
    userName = "Nameless"
}
//log the userName in console
console.log(userName);

//alert user that he/she has entered is a hero and is at a crossroad of destinies.

alert(userName + ", before you lies three paths. You must choose your destiny and reap its benefits, or suffer its' consequences.");


//Create an array of the three paths a user can choose.

var chooseAPath = [1,2,3];

//Console.log the variable to see if it captures the values.
console.log(chooseAPath);

//Create an explanation of what each numerical value will represent in the future.
//chooseAPath[0]  // This will be "Dark Forest";

//chooseAPath[1]  // This will be"Volcanic Valley";

//chooseAPath[2] // This will be"Icy Tundra";



//Create a prompt that allows the user to choose which path

var userPathChoice = Number(prompt(userName + " Will you choose Path 1?\n Path 2?\n or Path 3?\n Enter only the number value of the path you choose."));

//Enter a re-prompt that allows the user to enter a number between 1 and 3.
if(!(userPathChoice >= 1) || !(userPathChoice <=3)){
    userPathChoice = Number(prompt("You have entered an invalid entry.\n Please enter either the number 1, 2, or 3 for your path choice."))
}

//Console.log userPathChoice to see if the value is caught correctly.
console.log(userPathChoice);

//Create a fate for the user if he/she decides to not enter anything or an invalid entry on second prompt.
if(userPathChoice == 0 || isNaN(userPathChoice)){
    alert(userName + " You have chosen no path at all. The gods are displeased and have turned you into stone. Suffer the consequences of your choice!" + userName + "!")
}
//Console.log user entry to see what they wrote.
console.log(userPathChoice);

//Create a path for the user if he/she chooses 1 as their path.
if(userPathChoice == chooseAPath[0]){
    alert("Your choice has brought you to Dark Forest covered in strange silky and sticky webs.\n Within a clump of web, a glimmer catches your eye.\n You have found a pile of unclaimed riches.\n Suddenly you are ambushed by a group of grotesque giant spiders.\n You quickly un-sheath your sword and prepare to defend yourself.");
     //Create variables for user Damage and total spider health.
       var totalUserDamage = prompt("Defend yourself" + userName + "! \nEnter how much damage you will do against these grotesque creatures with a number value.");
        //Check to see if the values are captured through console.log
        console.log(totalUserDamage);

         var spidersTotalHealth = 200;
         console.log(spidersTotalHealth);

}




