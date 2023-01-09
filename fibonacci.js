function fibonacciSeries(a) {
    var fiboArr = [0, 1];
    num1 = fiboArr[0];
    num2 = fiboArr[1];

    for (var i = 1; i < a; i++) {
        num3 = num1 + num2;
        fiboArr.push(num3);
        num1 = num2;
        num2 = num3;

    }
    console.log(fiboArr);

}

fibonacciSeries(8);