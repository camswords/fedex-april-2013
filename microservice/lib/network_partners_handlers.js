
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkPartners', href: 'http://localhost:3000/component/networkPartners', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/networkPartners', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/networkPartners/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkPartners/v1', function(request, response) {
        response_helpers.stream_file('./html/network_partners.html', response);
    });
};
