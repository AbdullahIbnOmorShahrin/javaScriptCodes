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
