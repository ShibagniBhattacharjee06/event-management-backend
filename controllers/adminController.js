const { User, Event, Registration } = require('../models');

exports.getStats = async (req, res) => {
    try {
        const totalUsers = await User.count({ where: { role: 'user' } });
        const totalEvents = await Event.count();
        const totalRegistrations = await Registration.count({ where: { status: 'registered' } });

        res.json({
            totalUsers,
            totalEvents,
            totalRegistrations
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stats', error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'role', 'createdAt'],
            order: [['createdAt', 'DESC']]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};
