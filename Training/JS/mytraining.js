/**
 * Created by NicaDevelopment on 5/17/15.
 */
//alert("Testing Connection")



function calcArea(w,h){
    var area = w * h;
    return area
    console.log(area);
};


var userRectangleArea = calcArea(Number(prompt("What is the width of your rectangle?")), Number(prompt("What is the length of your rectangle?")));

console.log(userRectangleArea);

alert("Your rectangle area is, " + userRectangleArea + " units.");

//This is a procedure below. It is a function, but does not return a value. IT just performs a list of instructions that are coded into it.

function calcArea(w,h){
    var area = w * h;
    console.log(area);
};



