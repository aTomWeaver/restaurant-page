import './style.css';
import renderLanding from './landing';

function renderHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    logo.innerText = 'Wendy\'s';
    header.append(logo);
    document.body.append(header);
    console.log('Output')
};

renderHeader();
renderLanding();
console.log('everything appears to be hipping and flipping!');
