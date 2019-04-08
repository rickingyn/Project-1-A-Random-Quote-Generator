/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// add quotes array; contains objects with 'quotes' property, 'source' property, 'citation' property and 'year' property
var quotes = [
  {
    quote: 'I came in with near zero programming knowledge and halfway in, I’m quite confident of what I can achieve',
    source: 'Kelechi I.',
    citation: 'Lifelong Learner, Intro to Programming Student, Udacity'
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


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(quotes) {
  // create variable to store random number between 0-4
  var randomNum = Math.floor(Math.random() * quotes.length);

  // return a quote object at a random index number generated
  return quotes[randomNum];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {

}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.