// Casting

var stringVar = "6";

var result = 7 + Number(stringVar);

console.log(result);

//Typing Number in front of stringVar causes a
//temporary change of stringVar into a number
//This is called CASTING.

var areaCode = 407;
var firstPart = 203;
var secPart = 4529;

var phoneNo = areaCode + firstPart + secPart;
console.log(phoneNo);

var phoneNumber = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);

console.log(phoneNumber);


//Written in the first method, it adds them ass
//numbers, but when CAST as Strings, it adds them as
//they are, or aka strings.

 