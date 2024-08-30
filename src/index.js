require('dotenv').config();
const http = require('http');
const express = require('express');
const index_route = require('./index_route');
const connectDB = require('./config/dbConfig');

// console.log(process)
const PORT = process.env.PORT || 4000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/* const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    res.write("Hello from server!");
    res.end();
}) */


/* const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) */

/* app.get('/user', (req, res) => {
    res.status(200).send({status: "OK", msg: "Hello from server!"})
}) */

app.use('/v1', index_route);

connectDB();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))