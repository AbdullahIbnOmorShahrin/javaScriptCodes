function add(number1, number2) {
    var sum = number1 + number2;
    return sum;
}

console.log('sum of two number', add(5, 5));

var total = add(10, 10);
console.log('totol is ' + total)

//no return & no parameter
function juice1() {
    console.log('give me some juice');

}
juice1();

//has return & no parameter
function juice2() {
    console.log('give me a glass of juice');
    return 'glass';
}
juice2();

//no return & has parameter

function juice3(_frutes) {
    console.log('give me a glass of juice without any return');

}
var food = juice3();


//has return & has parameter
function juice4(_frutes1, _frutes2) {
    console.log('give me juice in a glass');
    return 'glass';
}
juice4('apple', 'orrange');



// parctise task

/* 1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing.What will be the output ? Now call
the foo() to see the output. */

function foo() {
    console.log('foo');
    bar();
}

function bar() {
    console.log('bar');
}

//bar();
foo();


/*2) Write a function called make_avg() which will take an three integers and return the
average of those values.*/

function make_avg(int1, int2, int3) {
    var avg = (int1 + int2 + int3) / 3;
    console.log(avg);
    return avg;
}
make_avg(4, 2, 3);


/* 3) Challenging: Write a function called make_average() which will take an array of integers and
the size of that array and return the average of those values. */

var array = [4, 3, 5];
function make_average(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {

        var sum = sum + array[i];
        //console.log(sum);
    }
    console.log(sum);

    return sum;
}
make_average(array);


/* 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd.You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter */

function odd_even(num) {
    var remainder = num % 2;
    if (remainder == 0) {
        console.log('this is even');
    }

    else
        console.log('this is odd')

    return remainder;

}

odd_even(3);



/* 5) You are in a hurry to go to your school on time.But when you are crossing the road, the
traffic signal is red coloured.In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop.If you notice a green
coloured traffic signal, you should cross the road.So write a JS code, where there is a
variable called signal.Its value can be green, yellow or red & we will get different activities as
output depending on the variable.So, hurry up. */


var signal = 'red';
function traffic_activity(signal) {
    if (signal == 'red') {
        console.log('dont try to cross the road');
    }
    else if (signal == 'yellow') {
        console.log('be ready to cross the road');
    }
    else
        console.log('cross the road')
}
traffic_activity(signal);