'use-strict';

// STEP 1: Grab the template from the script element in index.html. The template can also exist in app.js as shown in Example 2
// STEP 2: compile the template using the Handlebars.compile() method;
// STEP 3: create object input data to be inserted
// STEP 4: append this data to the DOM

/* -----Example 1----- */

var myInfo = document.getElementById('template-1').innerHTML; // grab the template from script element in index.html

var template1 = Handlebars.compile(myInfo); // compile the template

var data1 = template1({name: 'Bob', street: '9107 Main St', city: 'Seattle', state: 'WA'}); // pass data to the template

document.getElementById('example-1').innerHTML += data1; // append compiled data to the DOM

/* -----Example 2----- */

var myQuote = '<h3> My Favorite {{name}} Quotes: </h3> <ol> <li> {{quote1}} </li> <li> {{quote2}} </li> <li> {{quote3}} </li></ol>'; // store template in a variable

var template2 = Handlebars.compile(myQuote); // compile the template

var data2 = template2({ // pass data to the template
  name: 'Winston Churchill',
  quote1: '"If you\'re going through hell, keep going."',
  quote2: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
  quote3: '"Never, never, never give up."'
});

document.getElementById('example-2').innerHTML += data2; // appends compiled data to the DOM

/* -----Example 3, Using Context-----*/

var newQuote = document.getElementById('template-3').innerHTML; // grab template from script element in index.html

var template3 = Handlebars.compile(newQuote); // compile the template

var data3 = template3({ // pass data to the template
  name: 'Winston Churchill',
  quotes: [
    {quote: '"If you\'re going through hell, keep going."'},
    {quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."'},
    {quote: '"Never, never, never give up."'}
  ]
});

document.getElementById('example-3').innerHTML += data3; // appends compiled data to the DOM


/* -----Example 4, Using Helpers, with jQuery----- */

$(function() {

  Handlebars.registerHelper('capitalize', function(str) { // Register a helper
    str = str || ''; // str is the argument passed to the helper when called
    return str.slice(0,1).toUpperCase() + str.slice(1); // returns the first letter in uppercase and concatenates it with the rest of the word
  });

  var theTemplateScript = $('#template-4').html(); // grab template script element in index.html

  var theTemplate = Handlebars.compile(theTemplateScript); // Compile the template

  var context = { // We will call this template on an array of objects
    animals:[
      {
        name: 'cow',
        noise: 'moooo'
      },
      {
        name: 'cat',
        noise: 'meow'
      },
      {
        name: 'fish',
        noise: ''
      },
      {
        name: 'farmer',
        noise: 'Get off my property!'
      }
    ]
  };

  var theCompiledHtml = theTemplate(context); // pass data to the template

  $('#example-4').html(theCompiledHtml); // Add the compiled html to the page

});

/* -----Example 5, Using BlockHelpers, with jQuery----- */

$(function () {

  var theTemplateScript = $('#template-5').html(); // Grab the template script

  // This is our block helper
  Handlebars.registerHelper('uppercase', function(options) { // The name of our helper is provided as the first parameter - in this case 'uppercase'
    // "this" is the context that existed when calling the helper.
    // The options object has a special function - fn. This is a
    // compiled version of the template that is contained between the opening and closing
    // blocks of this helper. To get a string, call fn with the context:
    return options.fn(this).toUpperCase();
  });

  var theTemplate = Handlebars.compile(theTemplateScript); // Compile the template

  var context = {
    'code': 'up up down down left right left right b a select start' // Define our data object
  };

  var theCompiledHtml = theTemplate(context); // Pass our data to the template

  $('#example-5').html(theCompiledHtml); // Add the compiled html to the page

});

//TODO: create your own Handlebars template
