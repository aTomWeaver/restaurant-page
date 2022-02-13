import './style.css';
import renderHeader from './header';
import renderLanding from './landing';
import renderMenu from './menu';
import renderContact from './contact';

// const content = document.getElementById('content');

// header render
renderHeader();

// get nav elements and bind events
const homeLink = document.getElementById('link-home');
const menuLink = document.getElementById('link-menu');
const contactLink = document.getElementById('link-contact');
homeLink.addEventListener('click', renderLanding);
menuLink.addEventListener('click', renderMenu);
contactLink.addEventListener('click', renderContact);

// landing page render
renderLanding();







console.log('everything appears to be hipping and flopping!');
