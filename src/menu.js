export default function renderMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('content-narrow');
    content.classList.add('content-wide');

    const menu = document.createElement('div');
    menu.innerText = 'testing testing get some burgers';

    content.appendChild(menu);
    document.body.appendChild(content);
}