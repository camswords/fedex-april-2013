
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'yummyFood', href: 'http://localhost:3000/component/yummyFood', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/yummyFood', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/yummyFood/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/yummyFood/v1', function(request, response) {
        response_helpers.stream_file('./html/yummy_food.html', response);
    });
};
