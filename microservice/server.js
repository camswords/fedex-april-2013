var express = require('express');


var app = express();


app.get('/', function(request, response) {
	response.send('{ "Cam": "dude"}');
});


app.listen(3000);
console.log("dude, im totally listening on port 3000");