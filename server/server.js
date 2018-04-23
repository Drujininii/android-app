'use strict';

const express = require('express');
const morgan = require('morgan');
const Controller = require('../app/controllers/controllers');
const controller = new Controller();
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.use(morgan('tiny'));

app.use(express.static('./public'));

app.get('/ping', (req, resp) => {
    resp.send('ping from server');
})

app.get('/favicon.ico', (req, resp) => {
    return 'favicon';
})

app.all('*', async (req, resp) => {
    console.log(req.url);
    const response = await controller.handleReq(req);
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "X-Requested-With");
    resp.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length');
    resp.header('Content-Type', 'application/json; charset=utf-8')
    resp.send(response);
})




const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`Server run on port ${port}`);
})