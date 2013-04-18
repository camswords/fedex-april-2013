var express = require('express');
var harmon = require('harmon');

var app = express();

var actions = [{
    query: 'body',
    func: function(node) {
        node.replace(function (html) {
            return 'The network footer!';
        });
    }
}];

app.use(harmon([], actions));

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
	response.write("<html><body>The network header!</body></html>");
    response.end();
});

app.listen(3000);
console.log("dude, im totally listening on port 3000");
