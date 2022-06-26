const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const connectToMongo = require('./database/database')
const app = express()

const { request, response } = require('express');

app.use(cors())

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(connectToMongo, () => {
    console.log("database connected")
})

app.get('/', (request, response) => {

    response.send("Server Started")

})

app.listen(3000)