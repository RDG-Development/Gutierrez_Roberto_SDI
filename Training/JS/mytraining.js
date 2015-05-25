/**
 * Created by NicaDevelopment on 5/17/15.
 */
//alert("Testing Connection")

 function writeUserWelcome(userName, userAge){
    console.log("Welcome to my website " + userName + ".")
    console.log("You are " + userAge + " years old.")
    console.log("I hope you enjoy my website.")
};

writeUserWelcome(prompt("What is your name?"), Number(prompt("What is your age?")));

function convertToCentigrade(degFahren)
{
    var degCent;
    degCent = 5/9 * (degFahren - 32);

    return degCent;
}
var degFahren = new Array(212, 32, -459.15);
var degCent = new Array();
var loopCounter;
for (loopCounter = 0; loopCounter <= 2; loopCounter++)
{
    degCent[loopCounter] = convertToCentigrade(degFahren[loopCounter]);
}
for (loopCounter = 2; loopCounter >= 0; loopCounter-- )
{
    console.log("Value " + loopCounter +  " was " + degFahren[loopCounter] +
                  " degrees Fahrenheit");
    console.log( "Which is " + degCent[loopCounter] +
                    " degrees centigrade");
}