'use-strict';

var myInfo = '<p>My name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>';

var template = Handlebars.compile(myInfo);

var data = template({name: 'Bob', street: '9107 Main St', city: 'Seattle', state: 'WA'});

document.getElementById('example').innerHTML += data;
