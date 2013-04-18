
var streaming = require('./streaming');

exports.getLink = function() {
    return { rel: 'networkHeader', href: 'http://localhost:3000/component/networkHeader', type: 'application/json' };
};

exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        var links = [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/light', type: 'text/html' },
                     { rel: 'dark', href: 'http://localhost:3000/component/networkHeader/dark', type: 'text/html' }];

        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(links));
    });

    app.get('/component/networkHeader/light', function(request, response) {
        streaming.stream_file('./html/light_header.html', response);
    });

    app.get('/component/networkHeader/dark', function(request, response) {
        streaming.stream_file('./html/dark_header.html', response);
    });
};
