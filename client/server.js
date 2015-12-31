var express = require('express');
var errorHandler = require('errorhandler');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}
app.get('/', function (req, res) {
    res.render('index', {});
});
app.get('/robert', function (req, res) {
    res.render('index', {});
});
app.listen(3000, function () {
    console.log('Demonstration express server listening on port %d in %s mode', 3000, app.settings.env);
});
exports.App = app;
//# sourceMappingURL=server.js.map