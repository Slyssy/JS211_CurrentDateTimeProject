// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:

const displayDate = () => {
  const date = new Date();
  const currentDate = date.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const displayDate = document.getElementById('display-element');
  displayDate.insertAdjacentHTML(
    'afterbegin',
    `
  <h4 class="date">${currentDate}</h4>
  `
  );
};

// Write a JavaScript program to convert a number to a string.
let emptyValue;
const doesNotExist = document.querySelector('.does-not-exist');
let input1;
let input2;
let typeOfButton;

//# Write a JavaScript program that adds 2 numbers together.
const sumTwoValues = (a, b) => a + b;

const allFunctions = (input1, input2) => {
  // // ? Saving the user inputs to to variables.
  // // ? These inputs are automatically strings.
  input1 = document.querySelector('#number-string-1').value;
  input2 = document.querySelector('#number-string-2').value;
  //# Converting strings to numbers by simply adding the "+" sign.
  const input1Number = +input1;
  const input2Number = +input2;
  //# You can convert them back to strings by using the toString() method.
  const input1String = input1Number.toString();
  const input2String = input2Number.toString();
  // ?Selecting the area where the results will be displayed.
  const displayResults = document.querySelector('.display-results');
  // ?Clearing the display area.
  displayResults.innerHTML = '';
  displayResults.insertAdjacentHTML(
    'afterbegin',
    `    
    <h2 class="results-title">Results</h2>
    <p class="results-description">This is the result of adding 2 numbers together.</p>
  
    <p class="results">${input1String} + ${input2String} = ${
      // #Calling the sumTwoNumbers function to add the values.
      sumTwoValues(input1Number, input2Number)
    }</p>
    <p class="results-description">This is the result of adding 2 numbers that have been converted to strings.</p>
    <p class="results" >${input1Number} + ${input2Number} = ${sumTwoValues(
      input1String,
      input2String
    )}</p>
      <h4>Now lets play with the inputs.</h4>
      <p class="results-description">Set the inputs to equal the same value and click the button below.</p>
      <button id=type-of-button>Click to Learn More</button>
    `
  );
};

const showMoreExamples = (input1, input2) => {
  input1 = +document.querySelector('#number-string-1').value;
  input2 = +document.querySelector('#number-string-2').value;
  const boolean =
    input1 + input2 === sumTwoValues(input1.toString(), input2.toString());
  const nothing = emptyValue;
  const displayMoreResults = document.querySelector('.display-more-results');
  displayMoreResults.insertAdjacentHTML(
    'afterbegin',
    `<p> Does ${input1} equal ${input2.toString()}? <span class="answer">${boolean}</span>
    </p>
    <p class="question">Why not?</p>
    <h5>Let's look at the data types.</h5>
    <p class="results-description">Data type of input 1? : <span class="answer">${
      //# Getting the typeof Number.
      typeof input1
    }</span></p>
    <p class="results-description">Data type of input 2?: <span class="answer">${
      //# Getting the typeof String.
      typeof input2.toString()
    }</span></p>
    <p class="results-description">Data type of the boolean? : <span class="answer">${typeof boolean}</span></p>
    <h5>Now let's try doing some math on values that are numbers and strings.</h5>
    <p>Strings can be converted to number if the values are numbers, but not words.</p>
    <p class="results">(${input1} + five) x 2 = <span class="answer">${
      (input1 + 'five') * 2
    }</span></p>
    <p>Since 'five' is a string, you cannot continue to do math. And NaN is returned.</p>
    <h5>Let's look at this data type.</h5>
    <p>Data type of (${
      //# Getting the type of NaN.
      input1
    } + five) x 2: <span class="answer">${typeof (
      (input1 + 'five') *
      2
    )}</span></span></p>
    <p>That's weird. The type of NaN is still number.</p>
    <p>To learn why this is the case <a href="https://bitsofco.de/javascript-typeof/">click here</a>.</p>
    <h5>Other data types include 'Null' and 'Undefined'</h5>
    <p class="results-description">Data type of something that does not exist: <span class="answer">${
      //#Getting the type of Undefined.
      typeof nothing
    }</span></p>
    <p>The typeof 'null' may not give you the output you expect.</p>
    <p>For example, if I try to select an HTML element that doesn't exist...</p>
    <p class="select-element"><span class="const">const </span><span class="variable">doesNotExist</span> = <span class="document">document</span>.<span class="query">querySelector</span>(<span class="selector">'.does-not-exist'</span>)</p>
    <p class="results-description">Data type of 'null'? <span class="answer">${
      //# Getting the type of Null.
      typeof doesNotExist
    }</span></p>
    <p><a href="https://dmitripavlutin.com/javascript-null/">Click here</a> to learn more about "null" in JavaScript.</p>
    <button class="clear-button">Clear</button>
    `
  );
};

//? Adding an event listener to the button I created in the insertAdjacent HTML.
document.addEventListener('click', function (event) {
  if (event.target.id == 'type-of-button') {
    showMoreExamples(input1, input2);
  }
});

//? Adding event litener to clear divs.
document.addEventListener('click', function (event) {
  if (event.target.classList == 'clear-button') {
    const displayResults = document.querySelector('.display-results');
    // ?Clearing the display area.
    displayResults.innerHTML = '';
    const displayMoreResults = document.querySelector('.display-more-results');
    displayMoreResults.innerHTML = '';
  }
});

//# Write a JavaScript program that runs only when 2 things are true.
changeBackground = (item1, item2) => {
  const word1 = document.querySelector('#enter-word-1').value;
  const word2 = document.querySelector('#enter-word-2').value;

  const background = document.querySelector('.conditionals');
  //# Write a JavaScript program that runs only when 2 things are true.
  if (word1 === 'blue' && word2 === 'blue') {
    background.style.backgroundColor = 'lightblue';
  }
  //# Write a JavaScript program that runs when 1 thing is true.
  else if (word1 === 'pink' || word2 === 'pink') {
    background.style.backgroundColor = 'lightpink';
  }
  //# Write a JavaScript program that runs only when 2 things are NOT true.
  else if (
    (word1 !== 'pink' || word1 !== 'blue') &&
    (word2 !== 'pink' || word2 !== 'blue')
  ) {
    background.style.backgroundColor = 'lightgrey';
  }
};

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
