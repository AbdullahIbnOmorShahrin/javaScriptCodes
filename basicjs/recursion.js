/* let sum = 0;
for (let i = 5; i >= 1; i-- -) {
    sum = sum + i;
}
console.log(sum); */
//a function calling it self
function sum(i) {               //is called recusive function 
    if (i == 1) {               // 5 + sum(4)
        return 1;               // 5 + 4 + sum(3)
    }                           // 5 + 4 + 3 + sum(2)
    return i + sum(i - 1);      // 5 + 4 + 3 + 2 Sum(1)
}                               // 5 + 4 + 3 + 2 + 1
