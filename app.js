const express = require('express');
require('dotenv').config();

const app = express();

// middleware functions
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// route
const messageRouter = require('./routes/message');

// Routing Path
app.use('/', messageRouter);


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server is running on - "+port);
});