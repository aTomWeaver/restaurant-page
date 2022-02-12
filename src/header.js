export default function renderHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    logo.innerText = 'Fancy Wendy\'s';
    logo.id = 'logo'

    const navCtr = document.createElement('div')
    navCtr.id = 'nav-container';

    const nav = document.createElement('ul');
    nav.id = 'nav';

    const home = document.createElement('li');
    home.id = 'link-home'
    home.innerText = 'Home';

    const menu = document.createElement('li');
    menu.id = 'link-menu'
    menu.innerText = 'Menu';

    const contact = document.createElement('li');
    contact.id = 'link-contact';
    contact.innerText = 'Contact';

    nav.append(home, menu, contact);
    navCtr.appendChild(nav);

    header.append(logo, nav);
    document.body.append(header);
};