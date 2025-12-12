const { Event } = require('../models');

async function seed() {
    console.log('🌱 Seeding demo events...');
    const now = new Date();

    const events = [
        {
            title: 'FutureVision — AI & Creativity Summit 2025',
            description: 'Join the world\'s leading AI researchers and creative professionals for a deep dive into the future of generative art, design, and innovation. Experience hands-on workshops and keynote speeches from industry pioneers.',
            location: 'San Francisco, CA',
            date: new Date('2025-03-18'),
            capacity: 500,
            image_url: 'https://images.unsplash.com/photo-1485827404703-89f551372e51?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        },
        {
            title: 'InnovateX — Developer Innovation Conference',
            description: 'A 3-day hackathon and conference for developers building the next generation of web and mobile applications. Network with top tech companies and showcase your skills.',
            location: 'New York, NY',
            date: new Date('2025-04-05'),
            capacity: 300,
            image_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        },
        {
            title: 'DesignShift — Human Interface Design Expo',
            description: 'Explore the latest trends in UI/UX design. From spatial computing to ethical design patterns, DesignShift covers it all. Perfect for designers, product managers, and frontend developers.',
            location: 'London, UK',
            date: new Date('2025-05-22'),
            capacity: 450,
            image_url: 'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        },
        {
            title: 'Quantum Now — Emerging Tech Symposium',
            description: 'Quantum computing is no longer just theory. Discover real-world applications and the state of quantum supremacy in this exclusive symposium.',
            location: 'Tokyo, Japan',
            date: new Date('2025-06-12'),
            capacity: 200,
            image_url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        },
        {
            title: 'Creators Forge — Digital Art & Media Festival',
            description: 'A celebration of digital creativity. Motion graphics, 3D art, VR experiences, and more. Come to be inspired and connect with fellow creators.',
            location: 'Berlin, Germany',
            date: new Date('2025-07-08'),
            capacity: 1000,
            image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        }
    ];

    try {
        await Event.bulkCreate(events);
        console.log('✅ 5 Demo Events seeded successfully!');
    } catch (error) {
        console.error('❌ Error seeding events:', error);
    }
}

module.exports = { seed };

// Self-executable if run directly
if (require.main === module) {
    seed().then(() => process.exit());
}
