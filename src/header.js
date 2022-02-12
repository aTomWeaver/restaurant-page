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
    const homeLink = document.createElement('a');
    homeLink.href = '#';
    homeLink.innerText = 'Home';
    home.appendChild(homeLink);

    const menu = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.innerText = 'Menu';
    menu.appendChild(menuLink);

    const contact = document.createElement('li');
    const contactLink = document.createElement('a');
    contactLink.href = '#';
    contactLink.innerText = 'Contact';
    contact.appendChild(contactLink);

    nav.append(home, menu, contact);
    navCtr.appendChild(nav);

    header.append(logo, nav);
    document.body.append(header);
};