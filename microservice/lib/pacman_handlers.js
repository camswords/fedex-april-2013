
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'pacman', href: 'http://localhost:3000/component/pacman', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/pacman', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/pacman/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/pacman/v1', function(request, response) {
        response_helpers.stream_file('./html/pacman.html', response);
    });
};
