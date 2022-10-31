const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

exports.getAddProducts=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  }


  exports.postAddProducts=(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  }