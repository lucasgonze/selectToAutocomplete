# NPM-selectToAutocomplete

A trivial fork of https://github.com/JamieAppleseed/selectToAutocomplete to make it more accessible in Node apps. The purpose is an HTML country selector that improves UX on standard drop-down country selectors.

On the client side it modifies the default select widget. On the server side it generates HTML for the complete exhaustive country list compatible with the requirements of the client, including specialized attributes. 

In addition to this package you'll need jQuery, a jquery autocomplete plugin, and CSS to style the HTML for the country selector. See sample.html to get started. You might also find test.nodejs.countryList.js a helpful example.

To use on the server side do 'npm i country-selector'. Then in your node module:

````
var lib = require("./nodejs.countryList.js");
var defaultCountry = 'Vanuatu';
var cl = lib.countryList(defaultCountry);
// insert the HTML you have generated into your template
res.render('template.html', { placeholderInHTML: cl } ); 
````


