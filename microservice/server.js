var express = require('express');
var _ = require('underscore');
var networkHeader = require('./lib/network_header_handlers');
var networkFooter = require('./lib/network_footer_handlers');
var networkPartners = require('./lib/network_partners_handlers');
var grumpyCat = require('./lib/grumpy_cat_handlers');

var components = [networkHeader, networkFooter, networkPartners, grumpyCat];
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(error, request, response, next){
    console.error(err.stack);
    res.send(500, 'whoopsi daisy! something has gone and broked.');
});

app.get('/', function(request, response) {
	var links = [{ rel: 'components', href: 'http://localhost:3000/components', type: 'application/json' }];

    response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(links));
});

app.get('/components', function(request, response) {
	var links = _.map(components, function(component) { return component.getLink(); });

	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(links));
});

_.each(components, function(component) {
    component.addRoutes(app);
});


app.listen(3000);
console.log("dude, im totally listening on port 3000");
