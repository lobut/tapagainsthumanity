/// <reference path="typings/express/express.d.ts"/>
/// <reference path="typings/node/node.d.ts"/>

import * as http from 'http';
import * as url from 'url';
import * as express from 'express';
let errorHandler = require('errorhandler');

let app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

let env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}

app.get('/', (req, res) => {
  res.render('index', {

  });
});

app.get('/robert', (req, res) => {
  res.render('index', {

  });
});


app.listen(3000, () => {
  console.log('Demonstration express server listening on port %d in %s mode', 3000, app.settings.env);
});

export var App = app;
