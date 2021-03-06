const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index0');
})

app.post('/', function (req, res) {
  // res.render('index0');
  console.log(req.body.city);
  res.send(req.body.city);
})
app.listen((process.env.PORT || 3000), function () {
  console.log('Example app listening on port 3000!')
})
