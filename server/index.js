const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

let port = 4000;

app.get('./:listingID', function(req, res) {
  res.send(200).sendFile(path.join(__dirname, '../client/dist.index.html'))
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});