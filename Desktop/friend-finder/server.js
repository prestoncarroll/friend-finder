var express = require("express");
var path = require("path");
var apiroutes = require("./routing/apiroutes")
var htmlroutes = require("./routing/htmlroutes")



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiroutes);
app.use('/', htmlroutes);






app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});