const phone = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, quantity: 2 },
    { name: 'Walton', camera: 12, storage: '32gb', price: 22000, quantity: 3 },
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, quantity: 4 },
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, quantity: 5 },
    { name: 'Xaomi', camera: 12, storage: '32gb', price: 70000, quantity: 6 },
];

function totalPrice(phone) {
    var total = 0;
    for (var i = 0; i < phone.length; i++) {
        total = total + phone[i].price * phone[i].quantity;
    }
    return total;

}
const totalPhonePrice = totalPrice(phone);
console.log('total price of phones ', totalPhonePrice);

function cheapestPhone(phones) {
    let cheapPhone = phone[0];
    for (let i = 0; i < phone.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapPhone.price) {
            cheapPhone = phone;
        }

    }
    const cheapPhoneBrand = cheapPhone.name;
    //console.log(cheapPhone);
    return cheapPhoneBrand;
}

const mySelection = cheapestPhone(phone);
console.log('cheapest phone brand is ', mySelection);