
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'newsBody', href: 'http://localhost:3000/component/newsBody', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/newsBody', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/newsBody/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/newsBody/v1', function(request, response) {
        response_helpers.stream_file('./html/news_body.html', response);
    });
};
