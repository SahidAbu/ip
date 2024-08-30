const app = require('express')();
const user_route = require('./route/user-route');



app.use('/user', user_route);



module.exports = app;