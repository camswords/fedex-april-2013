
var harmon = require('harmon');
var httpProxy = require('http-proxy');

exports.addMiddleware = function(app) {
    var modifiers = [{ query: 'body', func: function(node) {
            node.replace(function (html) {
                return 'The network footer!';
            });
        }
    }];

    app.use(harmon([], modifiers));
};

exports.getLink = function() {
    return { rel: 'networkHeader', href: 'http://localhost:3000/component/networkHeader', type: 'application/json' };
};

exports.addRoutes = function(app) {
    app.get('/component/networkHeader', function(request, response) {
        var links = [{ rel: 'light', href: 'http://localhost:3000/component/networkHeader/light', type: 'text/html' }];
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(links));
    });

    var proxy = new httpProxy.RoutingProxy();



    app.get('/component/networkHeader/light', function(request, response) {
        request.url = '/';
        proxy.proxyRequest(request, response, { host: 'womansday.ninemsn.com.au', port: 80 });
    });
};
