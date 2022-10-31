const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const shopcontroller = require('../controller/shopController')

router.get('/',shopcontroller.getShop);

module.exports = router;