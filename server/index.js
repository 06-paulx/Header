const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
var mysql = require('mysql');
const cors = require('cors');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "properties"
})

app.use(cors()); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
let port = 4000;


app.get('/:listingID/listings', (req, res) => {
  var queryParams = [req.params.listingID];
  con.query('select * from listings where id = ?', queryParams, function(err, results) {
    if (err) {
      console.log(err)
      return;
    } else {
      console.log(JSON.stringify(results))
      res.send(JSON.stringify(results));
    }
  })
})

app.get('/:listingID', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});