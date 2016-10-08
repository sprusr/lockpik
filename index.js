var express = require('express');
var redis = require('redis');
var bodyParser = require('body-parser');

var client = redis.createClient();
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/code', function(req, res) {
  client.geopos('locks', req.query.code, function(err, replies) {
    res.json(replies);
  })
});

app.get('/api/code/pic', function(req, res) {
  client.hget('lockpics', req.query.code, function(err, replies) {
    res.json(replies);
  })
});

app.post('/api/code', function(req, res) {
  console.log(req.body);
  client.geoadd('locks', req.body.lat, req.body.lon, req.body.code, function(err, replies) {
    res.json(replies);
  });
});

app.post('/api/code/pic', function(req, res) {
  client.hset('lockpics', req.body.code, req.body.pic, function(err, replies) {
    res.json(replies);
  });
});

app.use('/', express.static('public'));

app.listen(8000, function() {
  console.log('listening on port 8000');
});
