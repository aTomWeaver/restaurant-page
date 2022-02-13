import Menu from './menu-items.json';
import './menu.css';


export default function renderMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    // render each menu item in a card
    const keys = Object.keys(Menu);
    for (let i = 0; i < keys.length; i++) {
        const itemCtr = document.createElement('div');
        itemCtr.classList.add('item-ctr');

        const itemObj = Menu[keys[i]];

        const img = document.createElement('img');
        const name = document.createElement('h2');
        const kcal = document.createElement('p');
        const price = document.createElement('p');
        img.src = itemObj.image;
        name.innerText = itemObj.name;
        kcal.innerText = itemObj.kcal + ' kcal';
        price.innerText = itemObj.price;

        itemCtr.append(img, name, kcal, price);
        menu.append(itemCtr);
    }

// APPEND CONTENT
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('content-narrow');
    content.classList.add('content-wide');
    content.appendChild(menu);
    document.body.appendChild(content);
}