/*
Roberto Gutierrez
5/14/2015
SDI Section 01
Expressions Assignment
 */
//alert("Are you ready?")

// Tested js and works

//Created a narration to inform the user
alert("You, are a Battle-Mage in the middle of a war zone.");

alert("A fearsome warrior spots you and begins to charge, with a sword raised to strike you down.");

alert("You have 3 spells at your disposal.");

alert("Choose which spell or spells with which to destroy this fool who dares to charge you!");

alert("Remember you can cast one of these spells or all three, but only one cast for each spell. You can choose between Fire, Ice, and Death.")




//Create a prompt so that the user can choose which spell to cast
var userChose =[Number(prompt("Will you choose a FireBolt spell? Type 1 for yes or 0 for no")), Number(prompt("Will you choose a IceBolt spell? Type 1 for yes or 0 for no")),Number(prompt("Will you choose a DeathBolt spell? Type 1 for yes or 0 for no"))]

//Give a prompt to let the user describe the spell
var describeSpell = prompt("What spell did you choose? FireBolt, IceBolt, or DeathBolt? If you chose all three it would look like this. \'FireBolt, IceBolt, and DeathBolt\'")

//Give a prompt to let the user describe the effects of the spell
var effectsOfSpell = prompt("Type the phrase that best fits your spell, (Swallowed and Vaporized),(Frozen and Shattered), (Poisoned and Rotted). Type \'and\' between each phrase if you chose more than one. If you chose more than one type, place a comma between each phrase. Like this \'Swallowed and Vaporized,Frozen and Shattered, and Poisoned and Rotted\'.")


//Create an Array of your spells
var spell = ["FireBolt, IceBolt, DeathBolt"];


//Create a variable for the damage a firebolt does.
var fireBoltImpactDamage = 100;

//Create Damage of FirBolt per second for 3 seconds
var fireBoltDamagePerSecondForThreeSeconds = 25 * 3;

//Create Total Damage for FirBolt spell
var fireBoltSpellTotalDamage = fireBoltImpactDamage + fireBoltDamagePerSecondForThreeSeconds;

//Assign Total damage to FireBolt
spell[0] = fireBoltSpellTotalDamage;

//Test if your value appears on the console.
console.log(spell[0] + " Total FireBolt Damage");

//Create a variable for the damage an icebolt does.
var iceBoltImpactDamage = 150;

//Create Damage per second for IceBolt variable for 3 seconds
var iceBoltDamagePerSecondForThreeSeconds = 5 * 3;

//Create Total Damage for IceBolt by calculating
var iceBoltSpellTotalDamage = iceBoltImpactDamage + iceBoltDamagePerSecondForThreeSeconds;

//assign IceBolt to Total Damage of IceBolt
spell[1] = iceBoltSpellTotalDamage

//Test if your value appears on the console.
console.log(spell[1] + " Total IceBolt Damage");

//Create a variable for the damage a deathbolt does.
var deathBoltImpactDamage = 25;

//Create DeathBolt Damage Per Second for 3 seconds
var deathBoltDamagePerSecondForThreeSeconds = 45 * 3;

//Create DeathBolt Total Damage Calculation
var deathBoltSpellTotalDamage = deathBoltImpactDamage + deathBoltDamagePerSecondForThreeSeconds;

//Assign DeathBolt from array to Total Damage
spell[2] = deathBoltSpellTotalDamage

//Test if your value appears on console.
console.log(spell[2] + " Total Death Bolt Damage")

//Calculate the total damage from the users input.

Damage = (userChose[0] * spell[0]) + (userChose[1] * spell[1]) + (userChose[2] * spell[2])

//Test to see if it appears on console.
console.log(userChose + " ....... (Number of FireBolt Spell Cast), (Number of IceBolt Spell Cast), (Number of DeathBolt Spell Cast), Respectfully");

//alert the user of their choices.
alert("Your " + describeSpell + " has " + effectsOfSpell + " your enemy, leaving the warriors\' unrecognizable remains on the charred battlefield. Pity the next fool that dares challenge you! You have caused " + Damage + " damage! You retreat to a safer area so that your energy can replenish, and so you can return to the glorious battlefield.");

/*
For my Test, I used a DeathBolt Spell.
I entered 0,0,1 when prompted.
I then entered DeathBolt as my spell choice.
I then entered Poisoned and Rotted
Giving me the phrase"Your
DeathBolt has Poisoned and Rotted your
enemy, leaving the warriors' unrecognizable
remains on the charred battlefield. Pity any other
fool that dares challenge you! You have caused 160 damage!
 You retreat to a safer area so that your energy can replenish, and so you can return to the glorious battlefield.
 */









