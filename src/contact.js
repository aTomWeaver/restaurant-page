export default function renderContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('content-wide');
    content.classList.add('content-narrow');

    const contact = document.createElement('div');
    contact.innerText = 'this is the contact page';

    content.appendChild(contact);
    document.body.appendChild(content);
}