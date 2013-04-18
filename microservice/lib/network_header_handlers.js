
var path = require('path');
var fs = require('fs');

exports.addMiddleware = function(app) {
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

    app.get('/component/networkHeader/light', function(request, response) {
        var filename = path.join(process.cwd(), './html/womansday.ninemsn.com.au.html');

        fs.exists(filename, function(exists) {
            if(!exists) {
                response.writeHead(404, 'Not Found');
                response.write('<html><body><p>404 Not Found</p><p>Failed to find file ' + filename + '</p></body></html>');
                response.end();
            }

            var fileStream = fs.createReadStream('./html/womansday.ninemsn.com.au.html');
            fileStream.pipe(response);
        });
    });
};
