var express = require('express');


var app = express();

app.get('/', function(request, response) {
	var links = [{ rel: 'components', href: 'http://localhost:3000/components', type: 'application/json' }];
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(links));
});

app.get('/components', function(request, response) {
	var links = [{ rel: 'networkHeader', href: 'http://localhost:3000/component/networkHeader', type: 'application/json' }];
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(links));
});

app.get('/component/networkHeader', function(request, response) {
	var links = [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/light', type: 'text/html' }];
	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(links));
});

app.get('/component/networkHeader/light', function(request, response) {
	response.setHeader('Content-Type', 'text/html');
	response.end("<html><body>The network header!</body></html>");
});

app.listen(3000);
console.log("dude, im totally listening on port 3000");
