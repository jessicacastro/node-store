'use strict'
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
  let products = Product.find({
    active: true
  }, 'title price slug').then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(400).send({
      error: 'Error during getting products',
      data: error,
    });
  });
}

exports.post = (req, res, next) => {
  let product = new Product(req.body);
  product.save().then(response => {
    res.status(201).send({message: 'Product has ben saved sucessfully.'});
  }).catch(error => {
    res.status(400).send({ 
      error: 'Error during save the product', 
      data: error 
    })
  });

}

exports.put = (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({
    id, 
    item: req.body
  });
};

exports.delete = (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({ message: `Product with id ${id} has removed from store.`});
};