// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const lastname = "shahrin";
var leter = lastname[2];
console.log(leter);
const firstname = "abdullah"
const fullname = firstname + ' ' + lastname;
console.log(fullname, 'total length is', fullname.length);
//console.log(fullname.length());

const midlename = "omor";
const midlepart = "OMor";
if (midlename.toLowerCase() === midlepart.toLowerCase()) {
    console.log('they are same');
}
else { console.log('they are not same'); }

const line = "How are you?";
const Exist = line.includes("are");
console.log(Exist);

const lineLowerCase = line.toLowerCase();
const doesExist = lineLowerCase.includes("how");
console.log(doesExist);

console.log("index number is " + line.indexOf("you"));

if (line.indexOf("you") != -1) {
    console.log("does exit as the index number is NOT -1")
}
else console.log("does NOT exist as the index number is -1")

console.log("line start with 'how' " + line.startsWith('how'));

const splitLine = line.split(' ');
console.log('split', splitLine);


const fileName = "image.pdf";
console.log("line ends with '.pdf'" + fileName.endsWith(".pdf"));