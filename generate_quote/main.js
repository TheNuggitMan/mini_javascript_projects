const quoteList = [
    `"Whether it's the best of times or the worst of times, it's the only time we've got." - Art Buchwald`,

    `"Nobody who ever gave his best regretted it." - George Halas`,

    `"The best revenge is massive success." - Frank Sinatra`,

    `"I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." - Marilyn Monroe`,

    `"To give anything less than your best, is to sacrifice the gift." - Steve Prefontaine`,

    `"The best way to predict the future is to create it." - Peter Drucker`,

    '"A problem is a chance for you to do your best." - Duke Ellington'
]

document.getElementById('generateQuoteBtn').addEventListener('click', generateQuote);

function generateQuote() {
    let index = Math.floor(Math.random() * quoteList.length);
    document.getElementById('blockquote').innerHTML = quoteList[index];
}
