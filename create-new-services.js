// Script to generate new service pages
const fs = require('fs');

const services = [
    {
        key: 'ml-data-science',
        title: 'Machine Learning & Data Science',
        icon: 'fa-chart-bar',
        duration: '11:30:00',
        embedId: 'i_LwzRVD7QE',
        desc: 'Master data analysis, ML models, and predictive analytics',
        beginner: [
            'Introduction to Data Science (2:30:00)',
            'Python & Pandas Fundamentals (3:00:00)',
            'Data Cleaning & Preprocessing (2:45:00)',
            'Exploratory Data Analysis (3:15:00)',
            'Statistical Foundations (2:00:00)'
        ],
        intermediate: [
            'Machine Learning Algorithms (3:30:00)',
            'Supervised Learning Deep Dive (3:00:00)',
            'Unsupervised Learning & Clustering (2:45:00)',
            'Model Evaluation & Validation (2:30:00)',
            'Feature Engineering (3:00:00)'
        ],
        advanced: [
            'Advanced ML Models (3:15:00)',
            'Deep Learning for Data Science (3:30:00)',
            'Time Series Analysis (3:00:00)',
            'Big Data with Spark (3:45:00)',
            'Production ML Pipelines (3:00:00)'
        ]
    },
    {
        key: 'blockchain',
        title: 'Blockchain Development',
        icon: 'fa-link',
        duration: '10:30:00',
        embedId: 'M576WGiDBdQ',
        desc: 'Build decentralized applications and smart contracts',
        beginner: [
            'Blockchain Fundamentals (2:30:00)',
            'Cryptography Basics (2:00:00)',
            'Bitcoin & Cryptocurrency (2:45:00)',
            'Ethereum Introduction (3:00:00)',
            'Smart Contracts Basics (2:15:00)'
        ],
        intermediate: [
            'Solidity Programming (3:30:00)',
            'DApp Development (3:15:00)',
            'Web3.js & Ethers.js (3:00:00)',
            'DeFi Fundamentals (3:30:00)',
            'NFT Development (2:45:00)'
        ],
        advanced: [
            'Advanced Smart Contracts (3:00:00)',
            'Security & Auditing (3:15:00)',
            'Layer 2 Solutions (3:30:00)',
            'Blockchain Architecture (3:00:00)',
            'Enterprise Blockchain (2:45:00)'
        ]
    },
    {
        key: 'ui-ux',
        title: 'UI/UX Design',
        icon: 'fa-palette',
        duration: '8:30:00',
        embedId: 'c9VeoSwmv-s',
        desc: 'Create beautiful and intuitive user interfaces',
        beginner: [
            'Design Fundamentals (2:00:00)',
            'User Research & Personas (2:30:00)',
            'Wireframing & Prototyping (2:45:00)',
            'Color Theory & Typography (2:15:00)',
            'Figma Basics (2:00:00)'
        ],
        intermediate: [
            'UI Design Principles (3:00:00)',
            'Design Systems (2:45:00)',
            'Responsive Design (2:30:00)',
            'Interaction Design (3:15:00)',
            'Usability Testing (2:00:00)'
        ],
        advanced: [
            'Advanced Prototyping (3:00:00)',
            'Accessibility Design (2:45:00)',
            'Motion Design (3:15:00)',
            'Design Leadership (2:30:00)',
            'Portfolio Development (2:00:00)'
        ]
    },
    {
        key: 'testing-qa',
        title: 'Software Testing & QA',
        icon: 'fa-vial',
        duration: '9:00:00',
        embedId: 'uXl0ouSMfGI',
        desc: 'Ensure quality and reliability through comprehensive testing',
        beginner: [
            'Testing Fundamentals (2:00:00)',
            'Manual Testing Basics (2:30:00)',
            'Test Case Design (2:45:00)',
            'Bug Reporting (2:00:00)',
            'Testing Lifecycle (2:15:00)'
        ],
        intermediate: [
            'Automated Testing (3:00:00)',
            'Selenium WebDriver (3:30:00)',
            'API Testing (2:45:00)',
            'Performance Testing (3:00:00)',
            'Test Automation Frameworks (3:15:00)'
        ],
        advanced: [
            'CI/CD Integration (3:00:00)',
            'Advanced Test Strategies (3:30:00)',
            'Security Testing (2:45:00)',
            'Test Management Tools (2:30:00)',
            'QA Leadership (2:15:00)'
        ]
    }
];

// Template function would go here - but we'll create files directly
console.log('Service pages to create:', services.length);

