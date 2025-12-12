const { Event } = require('../models');

async function seedTestScenarios() {
    console.log('🧪 Seeding test scenario events...');
    const now = new Date();

    // Low capacity events to test "Waitlist" and "Sold Out" logic easily
    const events = [
        {
            title: '🔥 Exclusive VIP Dinner (Capacity: 1)',
            description: 'This event has only 1 seat! Use this to test the Waitlist feature. Register with User A (Success), then User B (Waitlisted).',
            location: 'Penthouse Suite, NY',
            date: new Date('2025-08-20'),
            capacity: 1, // Easy to fill
            image_url: 'https://images.unsplash.com/photo-1514395465013-4187e388319e?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        },
        {
            title: '⚡ Small Workshop (Capacity: 2)',
            description: 'Intimate workshop with 2 spots. Perfect for testing "Almost Full" states.',
            location: 'Co-working Space',
            date: new Date('2025-09-15'),
            capacity: 2,
            image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
            createdAt: now,
            updatedAt: now
        }
    ];

    try {
        await Event.bulkCreate(events);
        console.log('✅ Test Scenario Events seeded successfully!');
    } catch (error) {
        console.error('❌ Error seeding test events:', error);
    }
}

module.exports = { seedTestScenarios };

if (require.main === module) {
    seedTestScenarios().then(() => process.exit());
}
