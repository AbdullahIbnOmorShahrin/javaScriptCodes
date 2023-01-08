var shoppingcart = {
    mouse: 3,
    display: 2,
    pen: 5
}
console.log(shoppingcart);

//set properties values
shoppingcart.mouse = 5;
console.log(shoppingcart);

shoppingcart['mouse'] = 7;
console.log(shoppingcart);

var property_name = 'mouse';
shoppingcart[property_name] = 9;
console.log(shoppingcart);

//get property value
var property_value1 = shoppingcart.pen;
console.log(property_value1);

var property_value_2 = shoppingcart['display'];
console.log(property_value_2);

var property_name = 'mouse';
var property_value = shoppingcart[property_name];
console.log(property_name, property_value);


var properties = Object.keys(shoppingcart);
console.log(properties);

var property_values = Object.values(shoppingcart);
console.log(property_values);

var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone["brand"]);