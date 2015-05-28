/*
Roberto Gutierrez
Section #01
5/7/15
GoTo Training Week 1
 */

//alert("Testing to see if connected.");


/*First create your prompts, and put a comma between each prompt
in order to make separate values in your array.
Next enter Number in front of each prompt and make sure to put
parenthesis in before the prompt and after the prompt as shown
below.
 */
var myArray = [Number(prompt("How old are you?")), Number(prompt("How old is your brother?")), Number(prompt("How old is your sister?"))]


/*You now have an array, and each different value
can be accessed through array notation like so,
myArray[0], myArray[1], myArray[2]

/* You can now create a variable for total
siblings
 */

var totalSiblings = 3

/*You can now get the average age
of the siblings by using array notation and
the through the use of operators.
 */

var averageSiblingAge = (myArray[0] + myArray[1] + myArray[2]) / totalSiblings

/*console/.log to check your work
 */

console.log(averageSiblingAge)

/* if it shows up in the console, then you are ready to release an alert

 */

alert(averageSiblingAge)




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


//Create attack arrays for each class.

//warriorAttackDamage[0]"Impale" = 50 Damage, warriorAttackDamage[1]"Slash] = 25 Damage, warriorAttackDamage[2]"Power-Swing = 100 damage
var warriorAttackDamageArray = [50,25,100];

//mageAttackArray[0]"Firebolt" = 60, mageAttackArray[1]"Frostbolt" = 40, mageAttackArray[2]"Ligtningbolt = 80
var mageAttackDamageArray = [60,40,80];


//Create a Damage Calculations function
var warriorAttackDamageCalculations = function(q,w,r){
    var attackTotal = (q*warriorAttackDamageArray[0]) + (w*warriorAttackDamageArray[1]) + (r*warriorAttackDamageArray[2]);
    return attackTotal;
    console.log(attackTotal);
}

var zombieHealth = 25

var zombiesTotal = 100

var zombieArmyTotalHealth = zombieHealth * zombiesTotal

console.log("The zombie horde has " + zombieArmyTotalHealth + " total health.")

//Create a zombie defeat success function
var zombieDefeatSuccessFunction = function(u,z){

    var zombieDefeat = z - u;
    return zombieDefeat;
};





if(userClass == "Warrior" || userClass == "warrior"){

    alert("The horde of zombies has begun attacking you! As a warrior you have three attacks at your disposal!\nImpale\nSlash and\nPower-Swing");

    var userWarriorAttackTotal = warriorAttackDamageCalculations(Number(prompt("How many times will you Impale your enemies?\nEnter a number.")),Number(prompt("How many times will you slash your enemies?\nEnter a number")),Number(prompt("How many times will you use a Power-Swing on your enemies?\nEnter a number.")));

    console.log(userName + " has done " + userWarriorAttackTotal + " damage.");

    var warriorSuccessOrFailureFirstTrial = zombieDefeatSuccessFunction(userWarriorAttackTotal,zombieArmyTotalHealth);

    if(warriorSuccessOrFailureFirstTrial <= 0){
        alert("Well done " + userName + "! As a brave " + userClass + " You have successfully defeated the zombie horde! You must now continue through the Cave of Trials. Be on your guard.")
    }else{alert(userName + " You have fought bravely as a " + userClass + "! Alas, bravery alone cannot satisfy the hunger of the horde. You have become a delicious meal for these ravenous monsters.")}

    console.log("The zombies health after taking damage is " + warriorSuccessOrFailureFirstTrial + ".");

}