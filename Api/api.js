function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))

};

function displayData(data) {
    const ul = document.getElementById('displayList');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `${user.name}'s zipcode is: ${user.address.zipcode} and lives in ${user.address.street} street`;
        ul.appendChild(li);

    }
}