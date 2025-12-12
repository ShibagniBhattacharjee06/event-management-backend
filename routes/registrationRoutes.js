const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');

// User routes
router.post('/', verifyToken, registrationController.registerForEvent);
router.get('/my-registrations', verifyToken, registrationController.getUserRegistrations);

// Admin routes
router.get('/event/:eventId', verifyToken, isAdmin, registrationController.getEventRegistrations);

module.exports = router;
