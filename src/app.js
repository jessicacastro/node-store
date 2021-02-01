'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conexão com o banco
mongoose.connect('mongodb+srv://jessicacastro:dbpass@cluster-sp-google.f4alk.mongodb.net/nodestore?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});



const Product = require('./models/product');


const indexRoutes = require('./routes/index-route');
const productsRoutes = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/products', productsRoutes);

module.exports = app;