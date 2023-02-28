let hello = function () {
    return "hellow world!";
}
console.log(hello());

let hi = () => "hi";
console.log(hi());

let text = "my";
newText = text => text + "self";
console.log(newText(text));

let grammer = (a, b) => `except ${a} and ${b} everythig is third person`;
console.log(grammer("i", "you"));
