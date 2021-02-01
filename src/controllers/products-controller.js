'use strict'
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
  Product.find({
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

exports.getBySlug = (req, res, next) => {
  const { slug } = req.params;
  Product.findOne({
    active: true,
    slug: slug
  }, 'title price slug description tags').then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(400).send({
      error: 'Error during getting products',
      data: error,
    });
  });
}

exports.getById = (req, res, next) => {
  const { id } = req.params;
  Product.findById(id).then(response => {
    res.status(200).send(response);
  }).catch(error => {
    res.status(400).send({
      error: 'Error during getting products',
      data: error,
    });
  });
}

exports.getByTag = (req, res, next) => {
  const { tag } = req.params;
  Product.find({
    active: true,
    tags: tag
  }, 'title description price slug tags').then(response => {
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
  const { title, description, price, slug } = req.body;

  Product.findByIdAndUpdate(id, {
    $set: {
      title,
      description,
      price,
      slug
    }
  }).then(response => {
    res.status(201).send({ message: 'The product has been updated.'});
  }).catch(error => {
    res.status(400).send({
      message: 'Failed to update product',
      data: error
    })
  });
};

exports.delete = (req, res, next) => {
  const { id } = req.params;

  Product.findOneAndRemove(id).then(response => {
    res.status(201).send({ message: 'The product has been deleted.'});
  }).catch(error => {
    res.status(400).send({
      message: 'Failed to delete the product',
      data: error
    })
  });
};