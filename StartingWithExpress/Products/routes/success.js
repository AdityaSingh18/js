const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const successController = require('../controller/successController')

// /admin/add-product => GET
router.get('/success',successController.getSucess );

// /admin/add-product => POST
router.post('/success',successController.postSuccess);

module.exports = router;