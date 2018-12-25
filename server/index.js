const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index.js');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "properties"
})

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));

let port = 4000;
// app.get('./:listingID', function(req, res) {
//   res.send(200).sendFile(path.join(__dirname, '../client/dist.index.html'))
// })

// app.get('/listings', function(req, res) {
//   db.getRandomListing(function(err, results) {
//     if (err) {
//       console.log(err)
//       return;
//     } else {
//       res.send(results);
//     }
//   });
// });
app.get('/listings', (req, res) => {
  var num = Math.floor(Math.random() * 30);
  var queryParams = [1];

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

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});