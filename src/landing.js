export default function renderLanding() {
    
    const content = document.getElementById('content');
    content.innerHTML = '';
    content.classList.remove('content-wide');
    content.classList.add('content-narrow');

    const imgCtr = document.createElement('div');
    const link = document.createElement('a');
    link.href = 'https://www.youtube.com/watch?v=t5OmwqF0WIw';
    const img = document.createElement('img');
    img.src = 'https://i.redd.it/hj4dr1lonal31.png';
    img.id = 'main-image';
    link.append(img);
    imgCtr.appendChild(link);

    const quoteCtr = document.createElement('div');
    const quote = document.createElement('p');
    quote.innerText = 'Suck it down and poop like a regular man.';
    quoteCtr.append(quote);

    content.append(imgCtr, quoteCtr);
    document.body.append(content);

}