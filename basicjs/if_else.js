
var chickenfry = 120;
var pocket = 100;
if (chickenfry < pocket) {
    console.log("i will eat fry");
}
else {
    console.log("i will not eat");
}

//multi conditions

var isGraduated = true;
var salary = 20000;
var cars = 1;

if (isGraduated == true && salary > 30000 || cars >= 2) {
    console.log("esho biye kori");
}
else if (cars = 1 && isGraduated == true) {
    console.log("esho kal biye kori");
}
else {
    console.log("tor kopale biya nai")
}

//nasted condition

var group = 'science';
var favouriteSubject = 'math';
var witchTopicLike = '1nd';

if (group == 'science') {
    if (favouriteSubject == 'math') {
        if (witchTopicLike == '2nd') {
            console.log("go for engineering");

        }
        else console.log('go for pure math');

    }
    else console.log('go for doctor');
}

else console.log('go for bba');