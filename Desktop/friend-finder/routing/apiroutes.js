const routes = require('express').Router();




routes.get('/friends', function (req, res) {
    res.send('This is a basic Example for Express.js by TUTORIALKART')
})


routes.post('/friends', function (req, res) {
    res.send('This is a basic Example for Express.js by TUTORIALKART')
})

module.exports = routes;
