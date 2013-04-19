
var response_helpers = require('./response_helpers');

exports.getLink = function() {
    return { rel: 'trueStory', href: 'http://localhost:3000/component/trueStory', type: 'application/json' };
};

exports.addRoutes = function(app) {

    app.get('/component/trueStory', function(request, response) {
        var links = [{ rel: 'v1', href: 'http://localhost:3000/component/trueStory/v1', type: 'text/html' }];
        response_helpers.return_links(links, response);
    });

    app.get('/component/trueStory/v1', function(request, response) {
        response_helpers.stream_file('./html/true_story.html', response);
    });
};
