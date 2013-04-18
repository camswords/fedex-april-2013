
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'pacman', href: 'http://localhost:3000/component/pacman', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/pacman', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/pacman/v1', type: 'application/json' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/pacman/v1', function(request, response) {
        var links = [
            { rel: 'noJquery', href: 'http://localhost:3000/component/pacman/v1/noJquery', type: 'text/html' },
            { rel: 'standard', href: 'http://localhost:3000/component/pacman/v1/standard', type: 'text/html' }
        ];
        response_helpers.return_links(links, response);
    });

    app.get('/component/pacman/v1/standard', function(request, response) {
        response_helpers.stream_file('./html/pacman.html', response);
    });

    app.get('/component/pacman/v1/noJquery', function(request, response) {
        response_helpers.stream_file('./html/pacman_no_jquery.html', response);
    });
};
