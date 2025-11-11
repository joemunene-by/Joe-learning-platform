// Helper script to generate service pages - will be used to create remaining pages
// This is a reference for creating service pages with full stack learning paths

const services = {
    mobile: {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Development',
        description: 'Master iOS and Android app development',
        duration: '5:20:00',
        videoId: '0-S5a0eXPoc',
        videoTitle: 'React Native Full Course for Beginners',
        beginner: [
            'Introduction to Mobile Development (2:00:00)',
            'React Native Setup & Environment (1:30:00)',
            'Components & JSX Basics (2:15:00)',
            'State Management Fundamentals (2:00:00)',
            'Navigation & Routing (1:45:00)'
        ],
        intermediate: [
            'API Integration & Networking (2:30:00)',
            'Database & Local Storage (2:00:00)',
            'Advanced UI Components (2:45:00)',
            'Push Notifications (1:30:00)',
            'Testing & Debugging (2:00:00)'
        ],
        advanced: [
            'Performance Optimization (2:15:00)',
            'Native Module Integration (2:30:00)',
            'Advanced State Management (Redux) (3:00:00)',
            'CI/CD for Mobile Apps (2:00:00)',
            'Publishing to App Stores (1:45:00)'
        ]
    }
    // Add other services similarly
};

