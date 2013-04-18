
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkHeader', href: 'http://localhost:3000/component/networkHeader', type: 'application/json' };
};

exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/networkHeader/v1', type: 'application/json' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkHeader/v1', function(request, response) {
        var links = [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/v1/light', type: 'text/html' },
                     { rel: 'dark', href: 'http://localhost:3000/component/networkHeader/v1/dark', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkHeader/v1/light', function(request, response) {
        response_helpers.stream_file('./html/light_header.html', response);
    });

    app.get('/component/networkHeader/v1/dark', function(request, response) {
        response_helpers.stream_file('./html/dark_header.html', response);
    });
};
