
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'einstein', href: 'http://localhost:3000/component/einstein', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/einstein', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/einstein/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/einstein/v1', function(request, response) {
        response_helpers.stream_file('./html/einstein.html', response);
    });
};
