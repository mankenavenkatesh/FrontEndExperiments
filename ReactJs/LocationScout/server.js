
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var LOCATIONS_FILE = path.join(__dirname, 'locations.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/locations', function(req, res) {
  fs.readFile(LOCATIONS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/locations', function(req, res) {
  fs.readFile(LOCATIONS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    var locations = JSON.parse(data);
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    var newLocation = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    };
    locations.push(newLocation);
    fs.writeFile(LOCATIONS_FILE, JSON.stringify(locations, null, 4), function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      res.json(locations);
    });
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
