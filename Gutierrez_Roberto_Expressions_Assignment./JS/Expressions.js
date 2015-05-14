/*
Roberto Gutierrez
5/14/2015
SDI Section 01
Expressions Assignment
 */
//alert("Are you ready?")

// Tested js and works

//Created a narration to inform the user
alert("You, are are a Battle-Mage in the middle of a war zone.");

alert("A fearsome warrior spots you and begins to charge, with a sword raised to strike you down.");

alert("You have 3 spells at your disposal, but you only have enough energy to cast one.");

alert("Choose which spell with which to destroy this fool who dares to charge you!");

alert("Remember you can only choose one to cast, for even if you get a value, you cannot cast more than one choice in theory.")




//Create a prompt so that the user can choose which spell to cast
var userChose =[Number(prompt("Will you choose a FireBolt spell? Type 1 for yes or 0 for no")), Number(prompt("Will you choose a Icebolt spell? Type 1 for yes or 0 for no")),Number(prompt("Will you choose a DeathBolt spell? Type 1 for yes or 0 for no"))]

//Give a prompt to let the user describe the spell
var describeSpell = prompt("What spell did you choose? A FireBolt, a IceBolt, or a DeathBolt?")

var effectsOfSpell = prompt("Type the phrase that best fits your spell, (Swallowed and Vaporized),(Frozen and Shattered), (Poisoned and Rotted))")


//Create an Array of your spells
var spell = ["FireBolt, IceBolt, DeathBolt"];


//Create a variable for the damage a firebolt does.
var fireBoltImpactDamage = 100;

var fireBoltDamagePerSecondForThreeSeconds = 25 * 3;

var fireBoltSpellTotalDamage = fireBoltImpactDamage + fireBoltDamagePerSecondForThreeSeconds;

spell[0] = fireBoltSpellTotalDamage;

//Test if your value appears on the console.
console.log(spell[0]);

//Create a variable for the damage an icebolt does.
var iceBoltImpactDamage = 150;

var iceBoltDamagePerSecondForThreeSeconds = 5 * 3;

var iceBoltSpellTotalDamage = iceBoltImpactDamage + iceBoltDamagePerSecondForThreeSeconds;

spell[1] = iceBoltSpellTotalDamage

//Test if your value appears on the console.
console.log(spell[1]);

//Create a variable for the damage a deathbolt does.
var deathBoltImpactDamage = 25;

var deathBoltDamagePerSecondForThreeSeconds = 45 * 3;

var deathBoltSpellTotalDamage = deathBoltImpactDamage + deathBoltDamagePerSecondForThreeSeconds;

spell[2] = deathBoltSpellTotalDamage

//Test if your value appears on console.
console.log(spell[2])

Damage = (userChose[0] * spell[0]) + (userChose[1] * spell[1]) + (userChose[2] * spell[2])

console.log(userChose);

//alert the user of their choices.
alert("Your " + describeSpell + " has " + effectsOfSpell + " your enemy leaving the warriors unrecognizable remains on the charred battlefield. Pity any other fool that dares challenge you! You have caused " + Damage + " damage! You retreat to a safer area so that your energy can replenish, and so you can return to the glorious battlefield.");










