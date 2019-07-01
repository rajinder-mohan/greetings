const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// define a simple route
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');

});

app.get('/in', function(request, response){
	console.log()
  
});

// listen for requests
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
