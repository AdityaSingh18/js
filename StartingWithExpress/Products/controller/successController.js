const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

exports.getSucess=(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
  }

exports.postSuccess=  (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }