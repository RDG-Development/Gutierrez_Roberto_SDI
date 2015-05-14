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

//Problem 4
/* Discover your average weekly grocery spending
over the past 5 weeks
 */

//Create 5 prompts that ask the user how much they spent on groceries for 5 consecutive weeks.
var fiveWeekGroceryTotals = [Number(prompt("How much did you spend on groceries your first week?")),Number(prompt("How much did you spend on groceries your second week?")),Number(prompt("How much did you spend on groceries your third week?")),Number(prompt("How much did you spend on groceries your fourth week?")),Number(prompt("How much did you spend on groceries your fifth week?"))];

//Enter the number of weeks that your array spans over.
var numberOfWeeks = 5;

//Get the total amount of spending by adding up the five weeks through array notation.
var totalAmountSpentOnGroceries = fiveWeekGroceryTotals[0] + fiveWeekGroceryTotals[1] + fiveWeekGroceryTotals[2] + fiveWeekGroceryTotals[3] + fiveWeekGroceryTotals[4];

//alert the user of the total spent over 5 weeks and the average per week.
alert("You have spent a total of $" + totalAmountSpentOnGroceries + " over 5 weeks. " + "Your average grocery spending per week is $" + (totalAmountSpentOnGroceries / numberOfWeeks) + " per week.");

/* I used the array [95,100,107,84,102].
I added these up to get the total amount spent and then
divided that total by 5 in order to get the average spent.
The total is $488 in a 5 week period, and the average is $97.6.
 */


//Problem 5 Calculate the discounted price of an item

//Create a prompt that asks the user to enter an itme they want discounted.
var descriptionOfItem = prompt(" What kind of Item are you discounting? Please list the item itself and nothing more. Example: Chair or pair of shoes");

//Create a prompt that asks the user what the original price of that item is.
var originalPrice = Number(prompt("What is the original price of your item? Example: For $1000 type only 1000"));

//Create a prompt that asks the user what the percentage discount is.
var discountPercentage = Number(prompt("What is the percentage discount on your item? Example: Type 20 if your discount is 20%.")) / 100;

//Create a prompt that asks the user what the sales tax is.
var salesTaxPercentage = Number(prompt("What is the sales tax in your area? Example: Type 7.25 if your discount is 7.25%.")) / 100;


//Create a variable that calculates the price of the discounted item without tax.
var priceOFTheItemWithoutTax = originalPrice - (originalPrice * discountPercentage);

//Create a variable that calculates the price of the discounted item with tax.
var priceOfTheItemWithTax = priceOFTheItemWithoutTax + (priceOFTheItemWithoutTax * salesTaxPercentage);


alert("Your " + descriptionOfItem + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + priceOFTheItemWithoutTax + " without tax, and $" + priceOfTheItemWithTax + " with tax.");

/* For my item I chose a car valued at $20,250.
The discount was 20%, and the sales tax was 7.25%. The 20% discount is $4050 off my original price. The price of my car without tax is 16200. The tax adds $1174.50. The price of my car with tax is $17374.5
 */




















