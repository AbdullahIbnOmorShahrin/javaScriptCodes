var numbers = [45, 68, 78, 95];

//get element by index
console.log(numbers[2]);

var value = numbers[0];
console.log(value);

//printing all value
console.log(numbers);

//set value by index
numbers[0] = 66;
numbers[1] = 55;
console.log(numbers);

//find index of an element
var positionIndex = numbers.indexOf(55);
console.log(positionIndex);

//push element to array
var friends = ['dihan', 'emon', 'sifat'];
console.log(friends);
friends.push('mizan', 'jumon');
console.log(friends);

//push element using var
var morefriend = 'din islam';
friends.push(morefriend);
console.log(friends);

//pop element from array
friends.pop();
console.log(friends);

// pop element saved on a var
var lastName = friends.pop();
console.log(friends);
console.log(lastName);

//push element at begenning

var countries = ['Bangladesh', 'America', 'Canada', 'Australiya']
console.log(countries);

countries.unshift('Keneya', 'Germany'); //Add element at the begenning
console.log(countries);

//pop element from begenning

var removeCountry = countries.slice(1, 6);
console.log(removeCountry);
