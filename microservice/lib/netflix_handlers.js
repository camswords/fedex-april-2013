
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'netflix', href: 'http://localhost:3000/component/netflix', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/netflix', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/netflix/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/netflix/v1', function(request, response) {
        response_helpers.stream_file('./html/netflix.html', response);
    });
};
