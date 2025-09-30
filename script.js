
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.classList.add('hidden');
    authorElement.classList.add('hidden');

    setTimeout(() => {
        const randomQuote = getRandomQuote();
        quoteElement.textContent = randomQuote.quote;
        authorElement.textContent = `- ${randomQuote.author}`;

        quoteElement.classList.remove('hidden');
        authorElement.classList.remove('hidden');
    }, 500);
}

const refreshButton = document.getElementById('refresh-btn');
const refreshIcon = document.querySelector('i');
console.log(refreshIcon);

refreshButton.addEventListener('click', async () => {
    
    refreshIcon.classList.add('spinning');

   displayQuote();
   

    setTimeout(() => {
       refreshIcon.classList.remove('spinning');
        
    },1000);
});




window.onload = displayQuote;