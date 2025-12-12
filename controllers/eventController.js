const { Event } = require('../models');

exports.createEvent = async (req, res) => {
    try {
        const { title, description, location, date, capacity } = req.body;
        let image_url = null;
        if (req.file) {
            image_url = req.file.location; // S3 Location
        }

        const event = await Event.create({
            title,
            description,
            location,
            date,
            capacity,
            image_url
        });

        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error creating event', error: error.message });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const { count, rows } = await Event.findAndCountAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [['date', 'ASC']]
        });

        res.json({
            totalEvents: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            events: rows
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        const { title, description, location, date, capacity } = req.body;
        let image_url = event.image_url;
        if (req.file) {
            image_url = req.file.location;
        }

        await event.update({
            title,
            description,
            location,
            date,
            capacity,
            image_url
        });

        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error updating event', error: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByPk(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        await event.destroy();
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting event', error: error.message });
    }
};
