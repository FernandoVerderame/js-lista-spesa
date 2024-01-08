const element = document.getElementById('target');

const shoppingList = ['Uova', 'Farina', 'Latte', 'Biscotti', 'Nutella'];

/*
let listItems = '<ul>';

for (let i = 0; i < shoppingList.length; i++) {
    listItems += `<li>${shoppingList[i]}</li>`;
}

listItems += '</ul>';

console.log(listItems);

element.innerHTML = listItems;
*/

let listItems = '<ul>';

let item = 0;

while (item < shoppingList.length) {
    listItems += `<li>${shoppingList[item]}</li>`;

    item++;
}

console.log(listItems);

element.innerHTML = listItems;