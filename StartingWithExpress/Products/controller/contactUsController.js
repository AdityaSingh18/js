const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

exports.getContactUs= (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
  }

exports.postContactUs=(req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }