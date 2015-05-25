/**
 * Created by NicaDevelopment on 5/17/15.
 */
//alert("Testing Connection")


// This is a normal function

/*function calcArea(w,h){
    var area = w * h;
    return area
    console.log(area);
};
*/


//This is an anonymous function below:


var c = function(w,l){
    var area = w * l;
    return area
};

var userArea = c(Number(prompt("width?")),Number(prompt("length?")));

alert(userArea);

if(isNaN(userArea) || userArea == 0){
    userArea = c(Number(prompt("width?")),Number(prompt("length?")));
}


console.log(userArea);






