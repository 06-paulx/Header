var mysql = require('mysql') 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 4000
});

const getRandomListing = function(callback) {
  var num = Math.floor(Math.random() * 101);
  var queryParams = [num];

  connection.query('SELECT * FROM listings', function(err, results) {
    if (err) {
      callback(err);
    } else {
      callback(results)
    }
  })
};

module.exports = {
  getRandomListing,
}

