
console.log("Testing nodejs.countryList.js");

var lib = require("./nodejs.countryList.js");
var cl = lib.countryList();

if( typeof cl != 'string' ){
	console.log("Fail: typeof cl != 'string'");
	process.exit(1);
}

if( ! cl.match(/(<option value="Serbia and Montenegro" data-alternative-spellings="CS" >)/) ){
	console.log("Fail: test country not in list, or alternative spellings or relevancy booster not set.");
	process.exit(1);
}

if( ! cl.match(/<option value="" selected="selected">Select Country<\/option>/)){
	console.log("Fail: no default selection in list");
	process.exit(1);	
}

cl = lib.countryList('Vanuatu');
if( ! cl.match(/<option value="Vanuatu" selected  data-alternative-spellings="VU" >Vanuatu<\/option>/)){
	console.log("Fail: setting default selection did not work");
	process.exit(1);	
}

var gotEx = false;
try {
	cl = lib.countryList('Vanuatu','no such locale');
} catch(ex){
	console.log("Success: setting invalid locale did throw exception",ex);
	gotEx = true;
}
if( !gotEx ){
	console.log("Fail: setting invalid locale did not throw exception");
	process.exit(1);	
}

cl = lib.countryList(null,"ru-UA"); // will throw exception if missing
if( ! cl.match(/<option value="Эфиопия" data-alternative-spellings="ET" >Эфиопия<\/option>/)){
	console.log("Fail: setting default selection did not work");
	process.exit(1);	
}

process.exit(0);

