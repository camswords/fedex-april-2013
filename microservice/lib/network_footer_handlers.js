
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'networkFooter', href: 'http://localhost:3000/component/networkFooter', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/networkFooter', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/networkFooter/v1', type: 'application/json' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkFooter/v1', function(request, response) {
        var links = [
            { rel: 'noModuleDecorator', href: 'http://localhost:3000/component/networkFooter/v1/noModuleDecorator', type: 'text/html' },
            { rel: 'standard', href: 'http://localhost:3000/component/networkFooter/v1/standard', type: 'text/html' }
        ];
        response_helpers.return_links(links, response);
    });

    app.get('/component/networkFooter/v1/standard', function(request, response) {
        response_helpers.stream_file('./html/footer.html', response);
    });

    app.get('/component/networkFooter/v1/noModuleDecorator', function(request, response) {
        response_helpers.stream_file('./html/footer_no_module.html', response);
    });
};
