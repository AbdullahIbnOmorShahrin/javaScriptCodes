console.log('this is seperate js file');
//option 1
function makeRed() {
    document.body.style.backgroundColor = "red";
}
//option 2
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = "purple";
}
//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = "purple";
};
//option 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = "pink";
}
//option 5
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});
//option 6
document.getElementById('make-gold').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gold';
});