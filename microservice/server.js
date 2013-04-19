var express = require('express');
var _ = require('underscore');
var networkHeader = require('./lib/network_header_handlers');
var networkFooter = require('./lib/network_footer_handlers');
var networkPartners = require('./lib/network_partners_handlers');
var grumpyCat = require('./lib/grumpy_cat_handlers');
var wat = require('./lib/wat_handlers');
var pacman = require('./lib/pacman_handlers');
var news_body = require('./lib/news_body_handlers');
var jimcarey = require('./lib/jim_carey_handlers');
var yummyfood = require('./lib/yummy_food_handlers');
var truestory = require('./lib/true_story_handlers');
var einstein = require('./lib/einstein_handlers');
var twitter = require('./lib/twitter_handlers');
var netflix = require('./lib/netflix_handlers');


var components = [networkHeader, networkFooter, networkPartners, grumpyCat, wat,
                   pacman, news_body, jimcarey, yummyfood, truestory, einstein,
                    twitter, netflix];
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
