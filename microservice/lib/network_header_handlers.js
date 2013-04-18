
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkHeader', href: 'http://localhost:3000/component/networkHeader', type: 'application/json' };
};

exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        response_helpers.return_links(
            [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/light', type: 'text/html' },
             { rel: 'dark', href: 'http://localhost:3000/component/networkHeader/dark', type: 'text/html' }], response);
    });

    app.get('/component/networkHeader/light', function(request, response) {
        response_helpers.stream_file('./html/light_header.html', response);
    });

    app.get('/component/networkHeader/dark', function(request, response) {
        response_helpers.stream_file('./html/dark_header.html', response);
    });
};
