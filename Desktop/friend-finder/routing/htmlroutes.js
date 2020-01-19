const routes = require('express').Router();
var path = require('path');


routes.get('/survey', function (req, res) {
    res.send('This is a basic Example for Express.js by TUTORIALKART')
    console.log("made it to /survey")
})
routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'))

    console.log("made it to html routes");
})

module.exports = routes;



