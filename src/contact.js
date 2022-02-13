import './contact.css';

export default function renderContact() {

    const contactCtr = document.createElement('div');
    contactCtr.id = 'contact-ctr';
    const title = document.createElement('h2');
    title.innerText = 'Contact us';

    const contactMethods = document.createElement('div');
    const email = document.createElement('p');
    email.innerText = 'Email: manager@fancywendys.abc';
    const phone = document.createElement('p');
    phone.innerText= 'Phone: (555) 555-5555';
    const address = document.createElement('p');
    address.innerText = 'Address: 123 DownTheRoad St, Local Town, State 55555'
    contactMethods.append(phone, email, address);

    const textField = document.createElement('textarea');
    textField.rows = 6;
    textField.cols = 40;
    const submitBtn = document.createElement('button');
    submitBtn.innerText = 'Send';


    contactCtr.append(title, contactMethods, textField, submitBtn);

// APPEND CONTENT
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('content-wide');
    content.classList.add('content-narrow');
    content.appendChild(contactCtr);
    document.body.appendChild(content);
}