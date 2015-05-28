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

//Create attack arrays for each class.

//warriorAttackDamage[0]"Impale" = 50 Damage, warriorAttackDamage[1]"Slash] = 25 Damage, warriorAttackDamage[2]"Power-Swing = 100 damage
var warriorAttackDamageArray = [50,25,100];

//mageAttackArray[0]"Firebolt" = 60, mageAttackArray[1]"Frostbolt" = 40, mageAttackArray[2]"Ligtningbolt = 80
var mageAttackDamageArray = [60,40,80];

//rangerAttackArray[0]"FocusedShot" = 55, rangerAttackArray[1]"Explosive Bolt" = 85, rangerAttackArray[2]"Dual-Weild Slash" = 40
var rangerAttackDamageArray = [55,85,40];

//peasantAttackArray{0}"Throw Potato" = .1, peasantAttackArray[1]"Wooden Spoon Strike" = .1,peasantAttackArray[2]"Shin Kick" = .2
var peasantAttackDamageArray = [.1,.1,.2];


//Create a Damage Calculations for a warrior function
var warriorAttackDamageCalculations = function(q,w,r){
    var attackTotal = (q*warriorAttackDamageArray[0]) + (w*warriorAttackDamageArray[1]) + (r*warriorAttackDamageArray[2]);
    return attackTotal;
    console.log(attackTotal + " Total Warrior damage.");
};

//Create a Damage Calculation function for a mage function
var mageAttackDamageCalculations = function(q,w,r){
    var attackTotal = (q*mageAttackDamageArray[0]) + (w*mageAttackDamageArray[1]) + (r*mageAttackDamageArray[2]);
    return attackTotal;
    console.log(attackTotal + " Total Mage damage.");
};

//Create a Damage Calculation function for a ranger function
var rangerAttackDamageCalculations = function(q,w,r){
    var attackTotal = (q*rangerAttackDamageArray[0]) + (w*rangerAttackDamageArray[1]) + (r*rangerAttackDamageArray[2]);
    return attackTotal
    console.log(attackTotal + " Total Ranger damage.");

};

//Create a Damage Calculation function for a peasant function
var peasantAttackDamageCalculations = function(q,w,r){
    var attackTotal = (q*peasantAttackDamageArray[0]) + (w*peasantAttackDamageArray[1]) + (r*peasantAttackDamageArray[2]);
    return attackTotal
    console.log(attackTotal + " Total Peasant damage.");
};

//Create Zombie Variables for the first Trial
var zombieHealth = 40

var zombiesTotal = 100

var zombieArmyTotalHealth = zombieHealth * zombiesTotal

console.log("The zombie horde has " + zombieArmyTotalHealth + " total health.")

//Create a zombie defeat success function for trial 1 Where u will = user damage calculation, and z will = zombie army total health.
var zombieDefeatSuccessFunction = function(u,z){

    var zombieDefeat = z - u;
    return zombieDefeat;
};


//Create a conditional for users who choose warriors.
if(userClass == "Warrior" || userClass == "warrior"){

//Create an alert to inform user of attacks at their disposal.
    alert("The horde of zombies has begun attacking you! As a warrior you have three attacks at your disposal!\nImpale\nSlash and\nPower-Swing");

//Create a prompts within the Warrior function that allows the user to use the skills as many times as they want to.
    var userWarriorAttackTotal = warriorAttackDamageCalculations(Number(prompt("How many times will you use Impale on your enemies?\nEnter a number only")),Number(prompt("How many times will you use Slash on your enemies?\nEnter only a number")),Number(prompt("How many times will you use a Power-Swing on your enemies?\nEnter only a number.")));

//Create a validity test for the users prompts.
        while(isNaN(userWarriorAttackTotal) || userWarriorAttackTotal <= 0){
            var userWarriorAttackTotal = warriorAttackDamageCalculations(Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter a number for the Impale skill")),Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter a number for the Slash skill")),Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter a number for the Power-Swing skill.")));

};

//Console.log the total user attack as a warrior.
    console.log(userName + " has done " + userWarriorAttackTotal + " damage.");

//Create a variable to hold the warriors success
    var warriorSuccessOrFailureTrial = zombieDefeatSuccessFunction(userWarriorAttackTotal,zombieArmyTotalHealth);

//Create a message for both success of user and failure.
    if(warriorSuccessOrFailureTrial <= 0){
        alert("Well done " + userName + "! As a brave " + userClass + " You have successfully defeated the zombie horde by inflicting" + userWarriorAttackTotal + " DAMAGE! You have survived the Cave of Trials and have won the favor of the Gods.")
    }else{alert(userName + " You have fought bravely as a " + userClass + " and have done " + userWarriorAttackTotal + " Damage! Alas, bravery alone cannot satisfy the hunger of the horde. You have become a delicious meal for these ravenous monsters.")}

//console.log the remaining zombie health.
    console.log("The zombies health after taking damage is " + warriorSuccessOrFailureTrial + ".");
};

//Create a conditional for users who become peasants
if(userClass == "Peasant" || userClass == "peasant"){

//Create an alert to inform user of attacks at their disposal.
    alert("The horde of zombies has begun attacking you! As a peasant you have three attacks at your disposal!\nPotato Toss\nWooden Spoon Strike, and\nShin kick.");

//Create prompts within the Peasant function that allows the user to use the skills as many times as they want to.
var userPeasantAttackTotal = peasantAttackDamageCalculations(Number(prompt("How man times will you throw potatoes at your enemy?\nEnter only a number.?")),Number(prompt("How many times will you use strike your enemies with a wooden spoon?\nEnter only a number.")),Number(prompt("How many times will you kick your enemies in the shins?\nEnter only a number.")));



//Create a validity test for the users prompts.
    while(isNaN(userPeasantAttackTotal) || userPeasantAttackTotal <= 0){
        var userPeasantAttackTotal = peasantAttackDamageCalculations(Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter only a number for the potato toss skill.?")),Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter only a number for the wooden spoon strike skill.")),Number(prompt("You have entered an invalid entry. If a valid number is not entered you may perish.\nEnter only a number for the shin kick skill.")));
    };

//console.log userPeasantAttackTotal.
    console.log(userPeasantAttackTotal + " Total Peasant Attack" );

//Create a variable to hold the peasants success.
    var peasantSuccessOrFailureTrial = zombieDefeatSuccessFunction(userPeasantAttackTotal,zombieArmyTotalHealth);

//Create a message for both success of user and failure.
    if(peasantSuccessOrFailureTrial <= 0){
        alert("Well done " + userName + "! As a brave " + userClass + " You have successfully defeated the zombie horde by inflicting" + userPeasantAttackTotal + " DAMAGE! You have survived the Cave of Trials and have won the favor of the Gods.")
    }else{alert(userName + " You have fought bravely as a " + userClass + " and have done" + userPeasantAttackTotal + " Damage! Alas, bravery alone cannot satisfy the hunger of the horde. You have become a delicious meal for these ravenous monsters.")}

//console.log the remaining zombie health.
    console.log("The zombies health after taking damage is " + warriorSuccessOrFailureTrial + ".");
};





