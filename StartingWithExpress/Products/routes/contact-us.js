const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contactController = require('../controller/contactUsController')

// /admin/add-product => GET
router.get('/contact-us',contactController.getContactUs);

// /admin/add-product => POST
router.post('/contact-us',contactController.postContactUs);

module.exports = router;