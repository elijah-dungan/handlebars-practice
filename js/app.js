'use-strict';

// STEP 1: Grab the template from the script element in index.html. The Template can also exist in app.js as shown in Example 2
// STEP 2: compile the template using the Handlebars.compile() method;
// STEP 3: create object input data to be inserted
// STEP 4: append this data to the DOM

/* -----Example 1----- */

var myInfo = document.getElementById('template-1').innerHTML; // html with handlebars

var template1 = Handlebars.compile(myInfo); // compiles myInfo

var data1 = template1({name: 'Bob', street: '9107 Main St', city: 'Seattle', state: 'WA'}); // input data for template

document.getElementById('example-1').innerHTML += data1; // appends input data to the DOM

/* -----Example 2----- */

var myQuote = '<h3> My Favorite {{name}} Quotes: </h3> <ol> <li> {{quote1}} </li> <li> {{quote2}} </li> <li> {{quote3}} </li></ol>'; // html with handlebars

var template2 = Handlebars.compile(myQuote); // compiles myQuotes

var data2 = template2({ // input data for template
  name: 'Winston Churchill',
  quote1: '"If you\'re going through hell, keep going."',
  quote2: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
  quote3: '"Never, never, never give up."'
});

document.getElementById('example-2').innerHTML += data2; // appends input data to the DOM

/* -----Example 3-----*/

//TODO: create your own Handlebars template
