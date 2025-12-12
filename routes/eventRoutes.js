const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Public
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);

// Admin Only
router.post('/', verifyToken, isAdmin, upload.single('image'), eventController.createEvent);
router.put('/:id', verifyToken, isAdmin, upload.single('image'), eventController.updateEvent);
router.delete('/:id', verifyToken, isAdmin, eventController.deleteEvent);

module.exports = router;
