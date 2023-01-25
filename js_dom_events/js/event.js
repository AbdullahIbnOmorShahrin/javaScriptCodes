console.log('this is seperate js file');
//option 1
function makeRed() {
    document.body.style.backgroundColor = "red";
};
//option 2
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = "purple";
};
//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
};
//option 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = "pink";
};
//option 5
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});
//option 6
document.getElementById('make-gold').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gold';
});
//option 7
function handleOnClick() {
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = 'Change by onclick function';
};
//option 8
document.getElementById('event-listner').addEventListener('click', function () {
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = 'Change by event listener';
});
//option 9
document.getElementById('update-text').addEventListener('click', function () {
    const inputedText = document.getElementById('inputed-text');
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = 'Change by event listener';
    defaultText.innerText = inputedText.value;
    inputedText.value = '';
});