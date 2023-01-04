//print output
console.log(68)

//declar variable
var eggPrice = 20;
var onionPrice = 10;

console.log(eggPrice);
console.log(onionPrice);
console.log(onionPrice + eggPrice); //Summation

var totalPrice = eggPrice + onionPrice;
console.log(totalPrice);

var difference = eggPrice - onionPrice; //substraction
console.log(difference);

var multiplication = eggPrice * onionPrice; //multiplication
console.log(multiplication);

var division = eggPrice / onionPrice; //division
console.log(division);

var gpa = '3.22';
console.log(gpa);

var showgpa = parseInt(gpa);  //its show only the integer number and convert string to integer number. 
console.log(showgpa);

var showgpa = parseFloat(gpa);  //its show only the float number and convert string to float number. 
console.log(showgpa);



//variable type finding
var myname = 'shahrin';
console.log(typeof myname);

var gpa = 3.22;
console.log(typeof gpa);

var num = 3;
console.log(typeof num);

var areyouhappy = true;
console.log(typeof areyouhappy);


// toFixed used for defining the range of decimal number

var num1 = 0.1;
var num2 = 0.2;
totalnum = num1 + num2;
console.log(totalnum);

totalnum = totalnum.toFixed(3);
console.log(totalnum);


//caculating the reminder
var num3 = 18;
var num4 = 7;
totalnum2 = num3 % num4;
console.log(totalnum2);
