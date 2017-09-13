const express = require('express'),
      bodyParser = require('body-parser'),
      port = 3000,
      app = express();

//Middleware: bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Define the route
app.use("/api", require('./routes/orders'));

app.listen(port,function() {
  console.log("Server started on " + port);
})
