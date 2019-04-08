Instructions:

Welcome and congrats on starting your first Techdegree project!

For this project, you'll create an app that displays random famous quotes each time a button is clicked. You will select your own quotes from famous historical figures, artists, scientists, celebrities, etc..

Example:

"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie

Please select tasteful, positive and uncontroversial quotes, for the sake of this project. Thank you.

You'll use your growing knowledge of basic JavaScript syntax, variables, loops, conditionals and object literals to complete this project.

To help you get started, you'll be supplied with some basic starter files, including the HTML, CSS, and a JavaScript file containing some starter code and comments. But you'll have to:

Locate and select your own quotes
Build the array of quote objects to store the quotes
Write your own functions for selecting random quotes from the array and printing them to the screen.
This project is a fun and effective way for you to practice basic JavaScript skills while also creating a simple interactive portfolio piece to showcase your understanding of JavaScript fundamentals.

After completing this project, you'll have a tremendous sense of accomplishment, an awesome example of your hard work to show off, and you'll be one important step closer to your goals. Best of luck and happy coding!
--------------------------------------------------------------------------------------------------------------------------------------------------

Before you start:
To prepare for this project you'll need to make sure you complete and understand these steps.

 4 steps
Complete the Unit 1 Curriculum
The courses, workshops and instruction steps in each unit are going to help prepare you for completing the project. You are encouraged to take your time reviewing this material, pausing the videos as needed so you can build alongside the instructor. Remember, there's no substitute for the experience of actually writing the code yourself.
Review the unit material as needed to help with the project’s more challenging steps.

Create a GitHub Repo
You'll submit your finished work for each Techdegree project using GitHub. If you need a reminder on how to use GitHub and GitHub desktop, please refer back to the workshop Share Your Projects with GitHub Desktop.
Pro Tip: A recommended GitHub workflow is to create a new repo when you begin a project. And then to make regular updates to your GitHub repo after important changes and at key stages of development, like after adding new files or implementing new functionality.

Download the Project Files
Project files can be found in the Download files section on this page, just above the Project Resources section.
You are provided with four files:
An index.html file with the basic HTML markup that will be loaded and displayed in the browser. Do not make any changes to this file.
A js/script.js file where you will write your own JavaScript to control how your app functions.
A css/normalize.css file that resets a browser's default styles so projects look the same across multiple browsers. You can ignore this file.
A css/styles.css file that contains the provided project specific CSS styling.

Follow the Instructions Below
When beginning a new project, it is common to feel uncertain of where to start or how to proceed, especially if you are a new developer. It helps to try separating the project into smaller, more manageable sections that can be worked through one at a time. The instructions below begin this process by dividing the project into individual sections, which are further broken up into even smaller steps. Follow along, one step at a time, and if you’re feeling stuck or unsure of how to proceed, try reaching out to your Slack team for guidance.
Pro Tip: Reading through the complete list of instructions before beginning the project can provide a deeper understanding of how each individual section fits in and comes together to create a complete working project.
--------------------------------------------------------------------------------------------------------------------------------------------------

Project Instructions:
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

 10 steps
Seeking assistance
If you're feeling stuck or having trouble with this project
Reach out to your Slack team.
Pro Tip: A good “Help!” Slack post begins with a friendly greeting, details any important info like the problem you’re having and what you’ve tried so far to fix it, and has a link to your repo.
Take a look at this great study guide: A Random Quote Generator Study Guide
Review the unit material.
Practice your Google skills by rephrasing your question in Google until you find helpful results.
Open the project files
In your favorite text editor, open the project files and preview them in the Google Chrome Browser. You are free to develop in your preferred browser, and it’s a best practice to check your project in multiple browsers, but your project will be reviewed in Chrome, and consequently should be checked in Chrome prior to submission.
Pro Tip: Text Editors

If you have questions about selecting a good text editor or popular editer extensions, you can locate multiple recommendations and helpful links by reaching out to your Slack team.
Create an array of objects to store the data for your quotes
In your js/script.js file, start by creating a variable named quotes and setting it equal to an empty array.
Add a minimum of five empty objects to the quotes array.
JavaScript Reminders:

Arrays are defined with brackets: []
Objects are defined with curly braces: {}
The array of quote objects should be accessible in "the global scope", which means it's written outside of any functions rather than being contained in one.
Add data to your quote objects
Add the following properties to each quote object:
quote - a string containing the text of a quote.
source - a string containing the origin or source of the quote. For example: "Mark Twain", "Traditional Irish proverb”, "Anonymous".
Add the following properties to at least one quote object:
citation - a string identifying the venue of the quote. For example, a speech, publication, movie.
year - a number identifying the year of the quote.
JavaScript Reminders:

An object’s key/value pairs are separated by a comma.
An object's key/value pairs are defined like so:
quote: ‘There's no place like home.’
Testing your array of quote objects
Below the array of quote objects, add console.log(quotes);.
Shortcut to open the Chrome console: Ctrl + Shift + J (on Windows) or Ctrl + Option + J (on Mac)
Check out your objects in the console by clicking on them in the console to open them up and inspect their properties.
Consider deleting your log statements as you no longer need them because they can quickly accumulate and clutter up your code, making it harder to manage.
Create the getRandomQuote function
Create a function named getRandomQuote.
In the function body:
Create a variable to store a random number between zero and the length of the quotes array. See the Project Resources section for a link to the related course video.
Use the quotes array, box notation and the random number variable to return a random quote.
Use console.log(getRandomQuote()); immediately after the getRandomQuote function definition to test and display the random quote in the console.
JavaScript Reminders:

Array indexes start at zero.
Box notation uses brackets to target an array index like so, array[0].
Create the printQuote function
Create a function named printQuote.
In the function body:
Create a variable and set it equal to getRandomQuote(). This variable will hold the random quote that you will print to the screen.
Create a variable and set it equal to an empty string, ’’. This variable will eventually hold the entire string of HTML and quote properties. Be sure to use single quotes for your strings to avoid quote mark confusion, since HTML always uses double quotes for element attributes like class names.
Using the random quote variable, and the example HTML template below, concatenate the following strings to the empty string variable.
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
Start with a string that contains:
An opening p tag with a class equal to “quotes”.
The quote property of the quote object in the random quote variable.
A closing p tag.
Next, add a string that contains:
An opening p tag with a class equal to “source”.
The source property of the quote object in the random quote variable.
Do not add a closing p tag for this one yet.
Use an if statement to test if the quote object has a citation property, and if so, concatenate a string that contains:
An opening span tag with a class equal to “citation”.
The citation property of the quote object in the random quote variable.
A closing span tag.
Use an if statement to test if the quote object has a year property, and if so, concatenate a string that contains:
An opening span tag with a class equal to “year”.
The year property of the quote object in the random quote variable.
A closing span tag.
Now concatenate a closing p tag to the HTML string.
A console.log(); with the HTML string variable passed in can be used here to test and display the HTML string in the console. But the “Show Another Quote” button will need to be clicked to call this function.
Lastly, target the div with the id of quote-box, and set its innerHTML equal to the HTML string that’s been assembled.
Now when you click the “Show Another Quote” button, a new quote should be displayed on the page, thanks to the event listener that’s been provided for you at the end of the js/script.js file.
JavaScript Reminders:

Dot notation is used to target a specific property of an object, like so, object.property.
To check if an object property exists, the condition needs only be, (object.property).
Template literals can be used for the HTMl string if you’re comfortable with that approach.
Add code comments
Replace the code comments in the file with your own code comments.
The key to creating good code comments is to keep them brief, but clear, so that your fellow developers can get an idea of what's going on in your code at a glance, and without having to review every line. Generally, good code comments are placed above important code blocks to explain what they do. Trailing comments tend to be discouraged and block comments are prefered over inline comments.
Review the "How you'll be graded" section
Check out the "How you'll be graded" section, located above, next to the instructions tab, just below the project title. This section lists specifically what will be considered and checked when your project is being reviewed, and your project grade is being determined.
Quality Assurance and the Student Project Submission Checklist
Open your project in one or more browsers, at least Chrome, and click every button, and test every feature.
Web development work bears the need for a high level of precision, typically measured in pixels, kilobytes, and milliseconds. So it's essential to follow all instructions closely, and take the time for thorough quality assurance testing on all projects that contain your code. Before you submit your project for review, please do be sure to check off all of the items on the Student Project Submission Checklist. The checklist is designed to help make sure you’ve met the grading requirements, that your project is complete and ready to be submitted, and that you are developing good habits as a developer!
NOTE: What you submit is what will get reviewed.

When you submit your project, a snapshot is taken of your repository, and that is what the reviewer will see. Consequently, any changes made to your repo after submission will not be seen by the reviewer. So before you submit, do a final check to make sure everything in your repo is exactly what you want to to be reviewed.
--------------------------------------------------------------------------------------------------------------------------------------------------

Extra Credit:
To get an "exceeds" rating, you can expand on the project in the following ways:

 3 steps
Add more properties to the quote object
For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
Use the new properties to conditionally add to the HTML string that gets printed to the screen.
Random background color
When the quote changes, randomly change the background color of the page.
Auto-refresh the quote
After a set amount of time, like 20 to 30 seconds, print a new quote to the page. A timing method like setInterval() is helpful here. Avoid using the setTimeout function for this step. See the links in the “Additional Resources” section.
NOTE: Getting an "Exceed Expectations" grade.

See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for

