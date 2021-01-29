'use strict'

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products-controller');

router.get('/', productController.get);
router.post('/', productController.post);
router.put('/:id', productController.put);
router.delete('/:id', productController.delete);

module.exports = router;