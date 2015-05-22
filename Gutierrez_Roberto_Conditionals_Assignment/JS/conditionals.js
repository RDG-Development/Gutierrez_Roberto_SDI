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

alert(userName + ", before you lies two paths. You must choose your destiny and reap its benefits, or suffer its' consequences.");


//Create an array of the three paths a user can choose.

var chooseAPath = [1,2];

//Console.log the variable to see if it captures the values.
console.log(chooseAPath);

//Create an explanation of what each numerical value will represent in the future.
//chooseAPath[0]  // This will be "Dark Forest";

//chooseAPath[1]  // This will be"Volcanic Valley";





//Create a prompt that allows the user to choose which path

var userPathChoice = Number(prompt(userName + " Will you choose Path 1? or Path 2?\n Enter only the number value of the path you choose."));

//Enter a re-prompt that allows the user to enter a number between 1 and 3.
if(!(userPathChoice >= 1) || !(userPathChoice <=2)){
    userPathChoice = Number(prompt("You have entered an invalid entry.\n Please enter either the number 1, or 2 for your path choice."))
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
       var totalUserDamage = Number(prompt("Defend yourself " + userName + "! \nEnter how much damage you will do against these grotesque creatures with a number value!"));

    //Test the users entry to make sure it a valid value
    if(isNaN(totalUserDamage) || totalUserDamage == 0){
        //alert user to enter a value that is valid.
        totalUserDamage = Number(prompt("You have entered an invalid entry. Enter how much damage you will inflict " + userName + "! If you do not enter a valid value, you will perish!"));
    }
        //Check to see if the values are captured through console.log
        console.log(totalUserDamage);

         var totalSpiders = 10;
         var individualSpiderHealth = 20;
         var spidersTotalHealth = totalSpiders * individualSpiderHealth;
         console.log(spidersTotalHealth);

    //Create a Ternary condition within this one to determine if the user survives.
    (totalUserDamage > spidersTotalHealth) ? alert("Well done " + userName + ". You have slain your enemies and have claimed the riches. You have fought bravely and have earned the favor of the gods.") : alert(userName + " you have been slain! You fought with all your might, but to no avail. At least you have died with honor.")

}
//Create a condition for this path choice
if(userPathChoice == chooseAPath[1]){
    //Create an alert for this path choice
    alert(userName + ", your bravery has brought you to a Volcanic Valley. You see an open metal chest sitting on small island surrounded by smouldering lava. You foolishly approach and are suddenly struck by the mighty tail of a red dragon! You quickly recover and prepare to cast your ice spells.");
    //Create a prompt for total spells cast by user.

    //
        var totalSpellsCast = Number(prompt(userName + " How many spells will you cast to try and bring down this beast?\nEnter a number value. Each of your spells causes 25 damage."));
    if(isNaN(totalSpellsCast) || totalSpellsCast == 0){
        totalSpellsCast = Number(prompt("You have not entered a value " + userName + "! \n Enter a value worthy of a dragon or face the consequences!"))
    }
         //Create variables to determine the damage and health that will be used to calculate.
         var individualSpellDamage = 25
         var totalSpellDamage = totalSpellsCast * individualSpellDamage
         var redDragonTotalHealth = 150
         var userSuccessConditionValue = redDragonTotalHealth - totalSpellDamage

        userSuccessConditionValue<0 ? alert("The gods smile upon you this day! " + userName + "! Your spells have extinguished the flames of this would be dragon! The riches within the chest are yours for the taking! Well done!") : alert("Your bravery knows no bounds " + userName + "! Alas your bravery alone was not enough to defeat a dragon. Your smoldering corpse will serve as a tasty snack for this beast!");

}





