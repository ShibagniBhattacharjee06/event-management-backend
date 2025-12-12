const { Registration, Event, User, sequelize } = require('../models');

exports.registerForEvent = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const eventId = req.params.id;  // FIXED ✔
        const userId = req.user.id;

        const event = await Event.findByPk(eventId, { transaction });
        if (!event) {
            await transaction.rollback();
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check existing registration
        const existing = await Registration.findOne({
            where: { user_id: userId, event_id: eventId },
            transaction
        });

        if (existing) {
            await transaction.rollback();
            return res.status(400).json({ message: 'Already registered for this event' });
        }

        // Check capacity
        const registeredCount = await Registration.count({
            where: { event_id: eventId, status: 'registered' },
            transaction
        });

        let status = 'registered';
        if (registeredCount >= event.capacity) {
            status = 'waitlisted';
            await event.increment('waitlist_count', { transaction });
        }

        const registration = await Registration.create({
            user_id: userId,
            event_id: eventId,
            status
        }, { transaction });

        await transaction.commit();
        res.status(201).json({ message: `Successfully ${status}`, registration });

    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ message: 'Error registering for event', error: error.message });
    }
};


exports.getUserRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll({
            where: { user_id: req.user.id },
            include: [{ model: Event }]
        });
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching registrations', error: error.message });
    }
};


exports.getEventRegistrations = async (req, res) => {
    try {
        const eventId = req.params.id;  // OPTIONAL FIX ✔
        const registrations = await Registration.findAll({
            where: { event_id: eventId },
            include: [{ model: User, attributes: ['id', 'name', 'email'] }]
        });
        res.json(registrations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event registrations', error: error.message });
    }
};
