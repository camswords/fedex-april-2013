
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkFooter', href: 'http://localhost:3000/component/networkFooter', type: 'application/json' };
};

exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        response_helpers.return_links([{ rel: 'footer', href: 'http://localhost:3000/component/networkFooter', type: 'text/html' }]);
    });

    app.get('/component/networkFooter', function(request, response) {
        response_helpers.stream_file('./html/dark_header.html', response);
    });
};
