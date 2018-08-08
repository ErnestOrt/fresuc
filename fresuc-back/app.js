
const express = require('express')
var jwt = require('jsonwebtoken')

var user = require('./controllers/users');

const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get('/', user.list);

app.listen(3000, () => console.log('Example app listening on port 3000!'))


app.get('/api', (req, res) => {
  res.json({text:"hi"});
});

app.get('/api/protected', validateToken, (req, res) => {
  jwt.verify(req.token, 'my_secret_key', function(err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        description: 'Protected information. Congrats!',
        data: data
      });
    }
  });
});

function validateToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.post('/api/login', (req, res) => {
  const user = { id: 3 };
  const token = jwt.sign({user}, 'my_secret_key');

    res.json({token});
});
