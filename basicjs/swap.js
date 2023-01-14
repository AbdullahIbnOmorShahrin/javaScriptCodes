//swap using temporary

var num1 = 3;
var num2 = 4;
temp = num1;
num1 = num2;
num2 = temp;
console.log('swap using temp ', num1, num2);

//swap using destructuring

var num3 = 6;
var num4 = 8;
[num3, num4] = [num4, num3];
console.log('swap using destructuring ', num3, num4);

//swap using substraction and addition

var a = 5;
var b = 7;
a = a + b;
b = a - b;
a = a - b;
console.log('swap using substraction and addition', a, b);