
var harmon = require('harmon');

exports.addMiddleware = function(app) {
    var modifiers = [{
        query: 'body',
        func: function(node) {
            node.replace(function (html) {
                return 'The network footer!';
            });
        }
    }];

    app.use(harmon([], modifiers));
};


exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        var links = [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/light', type: 'text/html' }];
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(links));
    });

    app.get('/component/networkHeader/light', function(request, response) {
        response.setHeader('Content-Type', 'text/html');
        response.write("<html><body>The network header!</body></html>");
        response.end();
    });
};
