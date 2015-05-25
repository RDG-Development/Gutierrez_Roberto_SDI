/**
 * Created by NicaDevelopment on 5/17/15.
 */
//alert("Testing Connection")

function calcArea(w,h){
    var area = w * h;
    return area
};

var userRectangleArea = calcArea(Number(prompt("What is the width of your rectangle?")), Number(prompt("What is the length of your rectangle?")));

console.log(userRectangleArea);

alert("Your rectangle area is, " + userRectangleArea + " units.");

