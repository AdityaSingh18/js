const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminController = require('../controller/adminController')

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProducts);

module.exports = router;


//router gets exported and it has two routes registered 