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
