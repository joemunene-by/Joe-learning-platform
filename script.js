// ============================================
// Joe's Learning Platform - Interactive JavaScript
// ============================================

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Tab Switching for Nexus AI Section
function switchTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Show corresponding content
    const contentId = `${tabName}-tab`;
    const content = document.getElementById(contentId);
    if (content) {
        content.classList.add('active');
    }
}

// Service Modal Functions
const serviceDetails = {
    cloud: {
        title: 'Cloud Infrastructure',
        video: {
            title: 'Cloud Infrastructure Mastery',
            duration: '25:30',
            description: 'Complete guide to building scalable cloud solutions'
        },
        notes: `
            <h4>Introduction to Cloud Infrastructure</h4>
            <p>Cloud infrastructure provides on-demand computing resources over the internet, enabling businesses to scale efficiently without maintaining physical servers.</p>
            
            <h4>Key Concepts:</h4>
            <ul>
                <li><strong>Infrastructure as a Service (IaaS):</strong> Virtualized computing resources</li>
                <li><strong>Platform as a Service (PaaS):</strong> Development and deployment platforms</li>
                <li><strong>Software as a Service (SaaS):</strong> Cloud-based applications</li>
            </ul>
            
            <h4>Major Cloud Providers:</h4>
            <ul>
                <li>AWS (Amazon Web Services)</li>
                <li>Microsoft Azure</li>
                <li>Google Cloud Platform</li>
                <li>DigitalOcean</li>
            </ul>
            
            <h4>Essential Services:</h4>
            <ul>
                <li>Compute (EC2, Lambda, Functions)</li>
                <li>Storage (S3, Blob Storage)</li>
                <li>Databases (RDS, DynamoDB, Cosmos DB)</li>
                <li>Networking (VPC, Load Balancers)</li>
                <li>Security (IAM, Key Management)</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Design for scalability and high availability</li>
                <li>Implement proper security measures</li>
                <li>Use infrastructure as code (Terraform, CloudFormation)</li>
                <li>Monitor and optimize costs</li>
                <li>Implement disaster recovery plans</li>
            </ul>
        `
    },
    mobile: {
        title: 'Mobile Development',
        video: {
            title: 'Mobile App Development Complete Course',
            duration: '35:45',
            description: 'Build native and cross-platform mobile applications'
        },
        notes: `
            <h4>Mobile Development Overview</h4>
            <p>Mobile development involves creating applications for smartphones and tablets, targeting iOS, Android, or both platforms.</p>
            
            <h4>Development Approaches:</h4>
            <ul>
                <li><strong>Native Development:</strong> Platform-specific languages (Swift/Kotlin)</li>
                <li><strong>Cross-Platform:</strong> React Native, Flutter, Xamarin</li>
                <li><strong>Hybrid:</strong> Ionic, Cordova</li>
            </ul>
            
            <h4>iOS Development:</h4>
            <ul>
                <li>Swift programming language</li>
                <li>Xcode IDE</li>
                <li>UIKit and SwiftUI frameworks</li>
                <li>App Store deployment</li>
            </ul>
            
            <h4>Android Development:</h4>
            <ul>
                <li>Kotlin/Java programming</li>
                <li>Android Studio</li>
                <li>Material Design guidelines</li>
                <li>Google Play Store</li>
            </ul>
            
            <h4>Key Concepts:</h4>
            <ul>
                <li>UI/UX design principles</li>
                <li>State management</li>
                <li>API integration</li>
                <li>Offline capabilities</li>
                <li>Push notifications</li>
                <li>App performance optimization</li>
            </ul>
        `
    },
    web: {
        title: 'Web Development',
        video: {
            title: 'Modern Web Development Mastery',
            duration: '40:20',
            description: 'Build responsive, modern web applications'
        },
        notes: `
            <h4>Modern Web Development</h4>
            <p>Web development encompasses creating websites and web applications using various technologies and frameworks.</p>
            
            <h4>Frontend Technologies:</h4>
            <ul>
                <li><strong>HTML5:</strong> Structure and semantics</li>
                <li><strong>CSS3:</strong> Styling and animations</li>
                <li><strong>JavaScript:</strong> Interactivity and logic</li>
                <li><strong>Frameworks:</strong> React, Vue.js, Angular, Svelte</li>
            </ul>
            
            <h4>Backend Technologies:</h4>
            <ul>
                <li>Node.js, Python (Django/Flask), Ruby on Rails</li>
                <li>PHP, Java, .NET</li>
                <li>RESTful and GraphQL APIs</li>
                <li>Serverless architectures</li>
            </ul>
            
            <h4>Essential Tools:</h4>
            <ul>
                <li>Version control (Git)</li>
                <li>Package managers (npm, yarn)</li>
                <li>Build tools (Webpack, Vite)</li>
                <li>Testing frameworks (Jest, Cypress)</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Responsive design</li>
                <li>Performance optimization</li>
                <li>SEO optimization</li>
                <li>Accessibility (a11y)</li>
                <li>Security best practices</li>
            </ul>
        `
    },
    database: {
        title: 'Database Solutions',
        video: {
            title: 'Database Design and Optimization',
            duration: '28:15',
            description: 'Master database architecture and management'
        },
        notes: `
            <h4>Database Fundamentals</h4>
            <p>Databases are essential for storing, organizing, and retrieving data efficiently in applications.</p>
            
            <h4>Database Types:</h4>
            <ul>
                <li><strong>Relational (SQL):</strong> MySQL, PostgreSQL, SQL Server</li>
                <li><strong>NoSQL:</strong> MongoDB, Cassandra, Redis</li>
                <li><strong>Graph:</strong> Neo4j, ArangoDB</li>
                <li><strong>Time-Series:</strong> InfluxDB, TimescaleDB</li>
            </ul>
            
            <h4>Key Concepts:</h4>
            <ul>
                <li>ACID properties</li>
                <li>Normalization and denormalization</li>
                <li>Indexing strategies</li>
                <li>Query optimization</li>
                <li>Transactions and concurrency</li>
            </ul>
            
            <h4>Database Design:</h4>
            <ul>
                <li>Entity-Relationship modeling</li>
                <li>Schema design</li>
                <li>Data integrity constraints</li>
                <li>Partitioning and sharding</li>
            </ul>
            
            <h4>Performance Optimization:</h4>
            <ul>
                <li>Query optimization</li>
                <li>Indexing strategies</li>
                <li>Caching mechanisms</li>
                <li>Connection pooling</li>
            </ul>
        `
    },
    security: {
        title: 'Security Services',
        video: {
            title: 'Application Security Best Practices',
            duration: '32:40',
            description: 'Implement robust security measures'
        },
        notes: `
            <h4>Application Security</h4>
            <p>Security is crucial for protecting applications, data, and users from threats and vulnerabilities.</p>
            
            <h4>Security Principles:</h4>
            <ul>
                <li>Authentication and authorization</li>
                <li>Encryption (at rest and in transit)</li>
                <li>Input validation and sanitization</li>
                <li>Secure coding practices</li>
            </ul>
            
            <h4>Common Vulnerabilities (OWASP Top 10):</h4>
            <ul>
                <li>Injection attacks</li>
                <li>Broken authentication</li>
                <li>Sensitive data exposure</li>
                <li>XML external entities (XXE)</li>
                <li>Broken access control</li>
                <li>Security misconfiguration</li>
                <li>Cross-site scripting (XSS)</li>
                <li>Insecure deserialization</li>
                <li>Using components with known vulnerabilities</li>
                <li>Insufficient logging and monitoring</li>
            </ul>
            
            <h4>Security Tools:</h4>
            <ul>
                <li>Penetration testing tools</li>
                <li>Vulnerability scanners</li>
                <li>Security information and event management (SIEM)</li>
                <li>Web application firewalls (WAF)</li>
            </ul>
        `
    },
    analytics: {
        title: 'Analytics & Data',
        video: {
            title: 'Data Analytics and Business Intelligence',
            duration: '30:25',
            description: 'Harness the power of data analytics'
        },
        notes: `
            <h4>Data Analytics Overview</h4>
            <p>Data analytics involves examining datasets to draw conclusions and identify patterns, trends, and insights.</p>
            
            <h4>Types of Analytics:</h4>
            <ul>
                <li><strong>Descriptive:</strong> What happened?</li>
                <li><strong>Diagnostic:</strong> Why did it happen?</li>
                <li><strong>Predictive:</strong> What will happen?</li>
                <li><strong>Prescriptive:</strong> What should we do?</li>
            </ul>
            
            <h4>Analytics Tools:</h4>
            <ul>
                <li>Google Analytics</li>
                <li>Tableau, Power BI</li>
                <li>Python (Pandas, NumPy, Matplotlib)</li>
                <li>R programming</li>
                <li>Apache Spark</li>
            </ul>
            
            <h4>Data Processing:</h4>
            <ul>
                <li>ETL (Extract, Transform, Load)</li>
                <li>Data warehousing</li>
                <li>Real-time processing</li>
                <li>Machine learning integration</li>
            </ul>
            
            <h4>Key Metrics:</h4>
            <ul>
                <li>User engagement metrics</li>
                <li>Conversion rates</li>
                <li>Revenue metrics</li>
                <li>Performance indicators (KPIs)</li>
            </ul>
        `
    },
    api: {
        title: 'API Development',
        video: {
            title: 'RESTful and GraphQL API Development',
            duration: '27:50',
            description: 'Create powerful and efficient APIs'
        },
        notes: `
            <h4>API Development Fundamentals</h4>
            <p>APIs (Application Programming Interfaces) enable communication between different software systems.</p>
            
            <h4>API Types:</h4>
            <ul>
                <li><strong>REST:</strong> Representational State Transfer</li>
                <li><strong>GraphQL:</strong> Query language for APIs</li>
                <li><strong>gRPC:</strong> High-performance RPC framework</li>
                <li><strong>WebSocket:</strong> Real-time bidirectional communication</li>
            </ul>
            
            <h4>REST API Best Practices:</h4>
            <ul>
                <li>Use proper HTTP methods (GET, POST, PUT, DELETE)</li>
                <li>RESTful URL design</li>
                <li>Status codes and error handling</li>
                <li>Versioning strategies</li>
                <li>Authentication (JWT, OAuth)</li>
            </ul>
            
            <h4>GraphQL Features:</h4>
            <ul>
                <li>Single endpoint</li>
                <li>Client-specified queries</li>
                <li>Type system</li>
                <li>Real-time subscriptions</li>
            </ul>
            
            <h4>API Documentation:</h4>
            <ul>
                <li>OpenAPI/Swagger</li>
                <li>GraphQL Schema</li>
                <li>Postman collections</li>
                <li>Interactive documentation</li>
            </ul>
        `
    },
    devops: {
        title: 'DevOps & Automation',
        video: {
            title: 'DevOps and CI/CD Pipeline',
            duration: '33:10',
            description: 'Streamline development and deployment'
        },
        notes: `
            <h4>DevOps Overview</h4>
            <p>DevOps combines software development and IT operations to shorten the development lifecycle and deliver high-quality software.</p>
            
            <h4>Core Practices:</h4>
            <ul>
                <li>Continuous Integration (CI)</li>
                <li>Continuous Deployment (CD)</li>
                <li>Infrastructure as Code (IaC)</li>
                <li>Monitoring and logging</li>
                <li>Automated testing</li>
            </ul>
            
            <h4>DevOps Tools:</h4>
            <ul>
                <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI</li>
                <li><strong>Containers:</strong> Docker, Kubernetes</li>
                <li><strong>IaC:</strong> Terraform, Ansible, CloudFormation</li>
                <li><strong>Monitoring:</strong> Prometheus, Grafana, ELK Stack</li>
            </ul>
            
            <h4>Containerization:</h4>
            <ul>
                <li>Docker containers</li>
                <li>Container orchestration (Kubernetes)</li>
                <li>Microservices architecture</li>
                <li>Service mesh (Istio, Linkerd)</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Version control everything</li>
                <li>Automate repetitive tasks</li>
                <li>Implement comprehensive testing</li>
                <li>Monitor and log everything</li>
                <li>Foster collaboration</li>
            </ul>
        `
    }
};

function openService(serviceKey) {
    const service = serviceDetails[serviceKey];
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const details = document.getElementById('serviceDetails');
    
    details.innerHTML = `
        <h2 style="font-family: 'Orbitron', sans-serif; color: var(--primary-neon); margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 2px;">${service.title}</h2>
        
        <div style="margin-bottom: 3rem;">
            <h3 style="color: var(--primary-neon); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-video"></i> Video Tutorial
            </h3>
            <div style="background: var(--darker-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 2rem; text-align: center;">
                <i class="fas fa-play-circle" style="font-size: 4rem; color: var(--primary-neon); margin-bottom: 1rem; display: block;"></i>
                <p style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.5rem;">${service.video.title}</p>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">${service.video.description}</p>
                <span style="color: var(--text-muted);">Duration: ${service.video.duration}</span>
            </div>
        </div>
        
        <div>
            <h3 style="color: var(--primary-neon); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-book"></i> Detailed Notes
            </h3>
            <div style="background: var(--darker-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 2rem; color: var(--text-secondary); line-height: 1.8;">
                ${service.notes}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeService() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) {
        closeService();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeService();
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log("Joe's Learning Platform loaded");
});

