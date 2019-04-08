/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// add quotes array; contains objects with 'quotes' property, 'source' property, 'citation' property and 'year' property
const quotes = [
  {
    quote: 'I came in with near zero programming knowledge and halfway in, I’m quite confident of what I can achieve',
    source: 'Kelechi I.',
    citation: 'Lifelong Learner, Intro to Programming Student, Udacity',
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler',
  },
  {
    quote: 'One of the best programming skills you can have is knowing when to walk away for awhile.',
    source: 'Oscar Godson',
    year: 2017
  },
  {
    quote: 'I love to smile, even through pain.',
    source: 'Victoria Arlen'
  },
  {
    quote: 'Don\'t cry because it\'s over, smile because it happened.',
    source: 'Dr. Seuss'
  },
];

// log quotes array to console
console.log(quotes);

function getRandomQuote(quotes) {
  // create variable to store random number between 0-4
  const randomNum = getRandomNumber(quotes.length);

  // call getRandomColor function
  getRandomColor();

  // return a quote object at a random index number generated
  return quotes[randomNum];
}

function printQuote() {
  // create variable to call the getRandomQuote function
  const randomQuote = getRandomQuote(quotes);
  // create empty string variable
  let messageDisplayed = "";

  // access properties from randomQuote variable and add to empty string
  messageDisplayed += '<p class="quote">' + randomQuote.quote + '"</p>';
  messageDisplayed += '<p class="source">' + randomQuote.source;

  // check if there is a citation property; if true, add citation to string
  if(randomQuote.citation) {
    messageDisplayed += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  // check if there is a year property; if true, add citation to string
  if(randomQuote.year) {
    messageDisplayed += '<span class="year">' + randomQuote.year + '</span>';
  }

  // add closing 'p' tag to string
  messageDisplayed += '</p>';

  // access element with 'quote-box' Id and change html to generated string
  return document.getElementById('quote-box').innerHTML = messageDisplayed;
}

// function to create random
function getRandomColor() {
  // create random number between 0-255 for RGB colors
  const r = getRandomNumber(256);
  const b = getRandomNumber(256);
  const g = getRandomNumber(256);

  // concatenate random RGB colors generated into string with template literal
  const randomColor = `rgb(${r}, ${g}, ${b})`;

  // access the body element's background and change to the random RGB color created
  document.body.style.backgroundColor = randomColor;
  // access the button and change the background color to the random RGB color created
  document.getElementById('loadQuote').style.backgroundColor = randomColor;
}

// create random number function to use in getRandomColor and getRandomQuote function
function getRandomNumber(max) {
  return Math.floor(Math.random() * max );
}

// call setInterval method to call printQuote function every 20 seconds
setInterval(printQuote, 20000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

