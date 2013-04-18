
var fs = require('fs');

exports.stream_file = function(filename, response) {
    fs.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, 'Not Found');
            response.write('<html><body><p>404 Not Found</p><p>Failed to find file ' + filename + '</p></body></html>');
            response.end();
        }

        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(response);
    });
};

exports.return_links = function(links) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(links));
};