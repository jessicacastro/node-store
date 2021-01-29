'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
  title: {
    type: String,
    required: [true, 'The field title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'The field slug is required'],
    trim: true,
    index: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'The field description is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'The field price is required']
  },
  active: {
    type: Boolean,
    required: [true, 'The field active is required'],
    default: true
  },
  tags: [{
    type: String,
    required: [true, 'The field tags is required']
  }]
});

module.exports = mongoose.model('Product', product);