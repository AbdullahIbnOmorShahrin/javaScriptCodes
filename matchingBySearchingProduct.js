const products = [
    { id: 1, name: 'xiaomi phone', price: 20000 },
    { id: 2, name: 'iphone x', price: 200000 },
    { id: 3, name: 'mac book', price: 80000 },
    { id: 4, name: 'lenovo pad', price: 50000 },
    { id: 5, name: 'nokiya Phone', price: 19000 },
];

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);


