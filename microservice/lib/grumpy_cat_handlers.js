
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'grumpyCat', href: 'http://localhost:3000/component/grumpyCat', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/grumpyCat', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/grumpyCat/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/grumpyCat/v1', function(request, response) {
        response_helpers.stream_file('./html/grumpy_cat.html', response);
    });
};
