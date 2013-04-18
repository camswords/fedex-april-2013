
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkFooter', href: 'http://localhost:3000/component/networkFooter', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/networkFooter', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/networkFooter/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkFooter/v1', function(request, response) {
        response_helpers.stream_file('./html/footer.html', response);
    });
};
