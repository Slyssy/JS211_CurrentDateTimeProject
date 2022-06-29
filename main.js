// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById('display-element').innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const numToString = (num1, num2) => {
  num1 = +document.querySelector('#number-string-1').value;
  num2 = +document.querySelector('#number-string-2').value;
  const displayResults = document.querySelector('.display-num-to-string');
  displayResults.insertAdjacentHTML(
    'afterbegin',
    `<p>This is the result of adding 2 numbers together.</p>
    <p>${num1} + ${num2} = ${num1 + num2}</p>
    <p>This is the result of adding 2 numbers that have been converted to strings.</p>
    ${num1} + ${num2} = ${num1.toString() + num2.toString()}`
  );

  // console.log(
  //   `User input of ${num.toString()} has been converted a ${typeof num.toString()}`
  // );
};
// numToString(18);
// Write a JavaScript program to convert a string to the number.
const stringToNumber = (input1, input2) => {
  input1 = document.querySelector('#string-number-1').value;
  input2 = document.querySelector('#string-number-2').value;

  const displayResults = document.querySelector('.display-string-to-number');
  displayResults.insertAdjacentHTML(
    'afterbegin',
    `<p>Without converting these numbers the value of adding them together will look like this.</p>
  <p>${input1} + ${input2} = ${input1 + input2}</p>
  <p>We have concatenated two strings.</p>
  <h4>Fear Not! We can easily convert these strings to numbers.</h4>
  <p>After converting them to numbers, we can do math on them.</p>
  ${+input1} + ${+input2} = ${+input1 + +input2}`
  );
};

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const dataType = (data) => typeof data;
console.log(dataType(0 === 1));
console.log(dataType());
console.log(dataType(18));
console.log(dataType(NaN));
console.log(dataType('cat'));

// Write a JavaScript program that adds 2 numbers together.
const sumTwoNumbers = (a, b) => a + b;
console.log(sumTwoNumbers(16, 22));

// Write a JavaScript program that runs only when 2 things are true.
if2True = (item1, item2) => {
  if (item1 && item2) {
    console.log('Both things are true');
  } else {
    console.log(`I'm not doing anything`);
  }
};

if2True(2 + 2 === 4, 2 + 3 === 5);
if2True(2 + 2 === 5, 2 + 3 === 5);
// Write a JavaScript program that runs when 1 of 2 things are true.
if1True = (item1, item2) => {
  if (item1 || item2) {
    console.log('At least one thing is true');
  } else {
    console.log(`I'm not doing anything`);
  }
};
if1True(2 + 2 === 5, 2 + 3 === 5);
if1True(2 + 2 === 5, 2 + 3 === 6);
if1True(2 + 2 === 4, 2 + 3 === 5);

// Write a JavaScript program that runs when both things are not true.

if0True = (item1, item2) => {
  if (!item1 && !item2) {
    console.log(`I'm a liar!`);
  } else {
    console.log(`If I'm not lying, I'm not living.`);
  }
};
if0True(2 + 2 === 4, 2 + 3 === 5);
if0True(2 + 2 === 5, 2 + 3 === 5);
if0True(2 - 2 === 5, 2 - 3 === 6);

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
