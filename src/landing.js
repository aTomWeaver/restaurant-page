export default function renderLanding() {
    
    const content = document.getElementById('content');
    content.innerHTML = '';

    const imgCtr = document.createElement('div');
    const img = document.createElement('img');
    img.src = 'https://i.redd.it/hj4dr1lonal31.png';
    img.width = '500';
    imgCtr.appendChild(img);

    const quoteCtr = document.createElement('div');
    const quote = document.createElement('p');
    quote.innerText = 'Suck it down and poop like a regular man.';
    quoteCtr.append(quote);

    content.append(imgCtr, quoteCtr);
    document.body.append(content);

}