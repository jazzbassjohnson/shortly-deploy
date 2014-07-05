var app = require('./server-config.js');

var defaultPort = 4568;
var port = process.env.PORT || defaultPort;


app.listen(port);

console.log('Server now listening on port ' + port);
