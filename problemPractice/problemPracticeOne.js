//Radian to Degree Converter with the range of decimal two

function radianToDegree(r) {
    const oneRadian = 57.2958;
    let d = r * oneRadian;
    let degree = d.toFixed(2);
    return degree;
}

// check a file that is js file or not and give the output by true-false

function isJavaScriptFile(fileName) {
    let CheckfileName = fileName;
    //console.log(CheckfileName.endsWith(".js"))
    return CheckfileName.endsWith(".js");
}

/* return the total oilPrice with different quantity of 
114tk/L diesel; 130tk/L petrol; 135tk/L octen */

function oilPrice(d, p, o) {
    let dieselPrice = d * 114;
    let petrolPrice = p * 130;
    let octenPrice = o * 135;
    let totalPrice = dieselPrice + petrolPrice + octenPrice;
    return totalPrice;
}

/* bus capacity 50, microbus capacity 11, rest of them will go on 
publicbus with 250tk ticket; find the only total publicbus fare */

function publicBusFare(member) {
    let busNeed = Math.floor(member / 50);
    let busMember = busNeed * 50;

    let microbusNeed = Math.floor((member - busNeed * 50) / 11);
    let microbusMember = microbusNeed * 11;

    let publicbusMember = (member - busMember - microbusMember);
    let publicbusFare = publicbusMember * 250;

    return publicbusFare;
}

// get two object and check that they are best friend or not and return true-false

function isBestFriend(obj1, obj2) {
    if (obj1.names === obj2.friend && obj2.names === obj1.friend) {
        return true
    }
    else {
        return false
    }


}

obj1 = { names: 'abul', friend: 'kabul' };
obj2 = { names: 'kabul', friend: 'abul' };
isBestFriend(obj1, obj2);