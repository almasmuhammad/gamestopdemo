var express = require('express');
var cors = require('cors');
var app = express();
var users = require(__dirname + '\\users.json');

// app.use(function(req, res, next) {
//   //res.header('Access-Control-Allow-Headers','*');
//  // res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
//   if(req.method === 'OPTIONS'){
//     res.header('Access-Control-Allow-Headers', req.headers.origin);
//     res.header('Access-Control-Allow-Headers','*');
//     return res.status(200).end();
//   }
//   next();
// });

app.use(cors());

app.get('/', function(req, res){
  res.send('<html><body>api help<br/>' +
  'users/</body></html>');
});
app.get('/users/',function(req,res){
  console.log('route request - users');
        res.json(users);
});
app.get('/users/:id', function (req, res) {
  console.log('route request - users/id');
  if(req.params.id) {
    var user = users["user" + req.params.id];
    if(user){
      res.json(user);
    }
    else{
      res.status(404).end();
    }
  }
});
app.get('/api/Application/Profile', function (req,res){
  var applicationProfileViewModel = JSON.parse('{"roles":["CreatorReadx"],"languages":["en-us"]}');
  res.json(applicationProfileViewModel);
});
app.get('/unauth',function (req, res){
  console.log('route request - unauth');
  res.status(401).end();});

var server = app.listen(65495, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});