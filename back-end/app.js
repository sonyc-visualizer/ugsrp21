const express = require('express')
const mongoose = require('mongoose')
app.use(express.json())

//routes

app.get('/', function (req, res, next) {
  res.send('SONYC App Home page!')
})

module.exports = app
