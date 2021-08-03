// import and instantiate express
const express = require('express') // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios') //library to handle API calls
const mongoose = require('mongoose') //library for connecting to mongodb
require('dotenv').config({ silent: true }) //dotenv setup for authentication

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//home route
app.get('/', (req, res) => {
  res.send('Welcome to Sonyc!  ')
})