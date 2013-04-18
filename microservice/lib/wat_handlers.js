
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'wat', href: 'http://localhost:3000/component/wat', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/wat', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/wat/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/wat/v1', function(request, response) {
        response_helpers.stream_file('./html/wat.html', response);
    });
};
