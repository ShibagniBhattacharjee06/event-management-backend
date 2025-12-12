const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');
const registrationController = require('../controllers/registrationController');

const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');


// 📌 Public Routes
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);


// 📌 Admin Only Routes (Create / Update / Delete Events)
router.post('/', verifyToken, isAdmin, upload.single('image'), eventController.createEvent);
router.put('/:id', verifyToken, isAdmin, upload.single('image'), eventController.updateEvent);
router.delete('/:id', verifyToken, isAdmin, eventController.deleteEvent);


// 📌 User Registration Route (NEW!)
router.post('/:id/register', verifyToken, registrationController.registerForEvent);


module.exports = router;
