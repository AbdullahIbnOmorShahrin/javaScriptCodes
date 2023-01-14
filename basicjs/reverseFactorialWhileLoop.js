function reverseFactorial(factNum) {

    var i = 1;
    while (factNum >= 1) {
        i = i * factNum;
        factNum--;
    }
    return i;
}

var factNum = 5;
var i = reverseFactorial(factNum);
console.log('the result is', i);
