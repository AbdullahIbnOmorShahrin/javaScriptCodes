console.log('this is seperate js file');
function makeRed() {
    document.body.style.backgroundColor = "red";
}

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = "purple";
}

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
};
