// taxRoutes.js
const express = require('express');
const router = express.Router();
const taxController = require('../controllers/taxController');  // Make sure you are importing the correct controller

// POST route for calculating tax
router.post('/tax-calculate', taxController.calculateTax);  // Ensure calculateTax is correctly defined in the controller


module.exports = router;
