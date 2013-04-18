
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'jimCarey', href: 'http://localhost:3000/component/jimCarey', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/jimCarey', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/jimCarey/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/jimCarey/v1', function(request, response) {
        response_helpers.stream_file('./html/jimcarey.html', response);
    });
};
