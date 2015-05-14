/*Roberto Gutierrez
 5/13/2015
 SDI Section 01
 Expressions Worksheet
  */

//Problem 1  Find Spark's age in Dog Years

//Enter the age of Sparky in Human years when prompted.
var sparkysHumanAge = Number(prompt("How old is Sparky in human years?"));


//How many times more does a dog age than a human each year?
var dogAgesToHumans = 7 * 1

//Multiply Sparkys human age by the dogAgesToHumans variable.
var sparkysDogAge = dogAgesToHumans * sparkysHumanAge;

//Alert user of Sparky's age in dog years.
alert("Sparky is " + sparkysDogAge + " dog years old.")


/* I entered 5 for the number of human years.
The result I get is 35 dog years.
This answer is correct
 */

//Problem 2
/* How much pizza will each party attendee get?
 */

// Create a variable of number of slices per pizza that prompts the user to enter a value.
var numberOfSlicesPerPizza = Number(prompt("How many slices of pizza does each pizza have?"));


// Create a variable that prompts the user to enter number of pizzas ordered.
var numberOfPizzasOrdered = Number(prompt("How many pizzas were ordered?"));


// Create a variable that prompts the user to enter number of people at the party.
var numberOfPeopleAtTheParty = Number(prompt("How many people are at the party?"));


// Create a variable that calculates how many slices each person gets.
var numberOfSlicesPerPerson = ((numberOfSlicesPerPizza * numberOfPizzasOrdered) - ((numberOfSlicesPerPizza * numberOfPizzasOrdered)%numberOfPeopleAtTheParty))/numberOfPeopleAtTheParty;


// Create an alert that tells the user how many slices of pizza each person receives.

alert("Each person at the party should get " + numberOfSlicesPerPerson + " slices of pizza");

/* I entered 8 slices per pizza for each pizza.
I entered 10 for the number of pizzas were ordered.
I entered 40 people at the party

The result came back as 2 slices of pizza per person, which is correct.
 */



//Problem 3
/* How many slices of Pizza will Sparky get to eat if he gets left overs?
The people at the party can only eat whole slices.
 */

// Use Modulo in order to get the remainder of slices left when divided by the number of people. Sparky gets to eat this number of slices.
var numberOfSlicesSparkyGetsToEat = (numberOfSlicesPerPizza * numberOfPizzasOrdered)%numberOfPeopleAtTheParty;

//Alert the user of the number of slices that Sparky gets to eat.
alert("Sparky gets " + numberOfSlicesSparkyGetsToEat + " slices of pizza.");

/* I edited my initial problem by subtracting
the remainder of pizzas in order to give everyone
at the party whole slices of pizza.
By doing so I was able to give
Sparky the remainder of slices.
I used the given values of 8 slices per pizza,
4 pizzas total,
and 10 people at the party.
This gave me the result of 3 slices
per person and 2 slices for sparky which
is the desired outcome.
 */



















