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
            title: 'AWS Cloud Full Course - Complete Tutorial',
            duration: '11:30:00',
            description: 'Complete AWS cloud infrastructure tutorial covering all major services',
            embedId: 'ulprqHHWlng'
        },
        notes: `
            <h4>Complete Cloud Infrastructure Guide</h4>
            <p>Cloud infrastructure represents a paradigm shift in how businesses deploy and manage IT resources. Instead of maintaining physical servers, networks, and data centers, organizations can leverage cloud providers' massive infrastructure to access computing resources on-demand, paying only for what they use. This model enables unprecedented scalability, flexibility, and cost-efficiency.</p>
            
            <h4>Cloud Service Models - Deep Dive:</h4>
            <ul>
                <li><strong>Infrastructure as a Service (IaaS):</strong> Provides virtualized computing resources over the internet. You get virtual machines, storage, networks, and operating systems. Examples include AWS EC2, Google Compute Engine, Azure Virtual Machines. You manage applications, data, runtime, middleware, and OS, while the provider manages virtualization, servers, storage, and networking.</li>
                
                <li><strong>Platform as a Service (PaaS):</strong> Provides a platform allowing customers to develop, run, and manage applications without dealing with infrastructure. Examples include Heroku, Google App Engine, AWS Elastic Beanstalk. You manage applications and data, while the provider manages runtime, middleware, OS, virtualization, servers, storage, and networking.</li>
                
                <li><strong>Software as a Service (SaaS):</strong> Delivers software applications over the internet on a subscription basis. Examples include Gmail, Salesforce, Microsoft 365. The provider manages everything, and you only use the application.</li>
                
                <li><strong>Function as a Service (FaaS):</strong> Serverless computing where you deploy individual functions that run in response to events. Examples include AWS Lambda, Azure Functions, Google Cloud Functions. You only write code; the provider handles everything else.</li>
            </ul>
            
            <h4>Major Cloud Providers - Comprehensive Comparison:</h4>
            <ul>
                <li><strong>AWS (Amazon Web Services):</strong> Market leader with 200+ services. Strong in compute (EC2, Lambda), storage (S3), databases (RDS, DynamoDB), AI/ML services, and enterprise solutions. Best for: Large enterprises, startups, developers seeking comprehensive services.</li>
                
                <li><strong>Microsoft Azure:</strong> Strong integration with Microsoft ecosystem (Windows, Office 365, Active Directory). Excellent for hybrid cloud deployments. Strong in enterprise applications, .NET development, and Microsoft technologies. Best for: Enterprises using Microsoft stack, hybrid cloud needs.</li>
                
                <li><strong>Google Cloud Platform (GCP):</strong> Strong in data analytics, machine learning (TensorFlow), and container orchestration (Kubernetes). Excellent pricing and performance for data-intensive workloads. Best for: Data analytics, ML/AI projects, containerized applications.</li>
                
                <li><strong>DigitalOcean:</strong> Developer-friendly with simple pricing and excellent documentation. Great for startups and small to medium businesses. Best for: Developers, startups, simple deployments.</li>
                
                <li><strong>IBM Cloud:</strong> Strong in enterprise solutions, AI (Watson), and hybrid cloud. Best for: Large enterprises, AI/ML projects.</li>
            </ul>
            
            <h4>Essential Cloud Services - Complete Breakdown:</h4>
            <ul>
                <li><strong>Compute Services:</strong>
                    <ul>
                        <li>Virtual Machines (EC2, Azure VMs, GCE): Scalable virtual servers</li>
                        <li>Container Services (ECS, EKS, AKS, GKE): Managed Kubernetes and container orchestration</li>
                        <li>Serverless Functions (Lambda, Azure Functions, Cloud Functions): Event-driven code execution</li>
                        <li>Auto Scaling: Automatically adjust resources based on demand</li>
                    </ul>
                </li>
                
                <li><strong>Storage Services:</strong>
                    <ul>
                        <li>Object Storage (S3, Azure Blob, Cloud Storage): Scalable file storage</li>
                        <li>Block Storage (EBS, Azure Disks): Persistent disk volumes</li>
                        <li>File Storage (EFS, Azure Files): Managed file systems</li>
                        <li>Archive Storage: Long-term, cost-effective storage</li>
                    </ul>
                </li>
                
                <li><strong>Database Services:</strong>
                    <ul>
                        <li>Relational Databases (RDS, Azure SQL, Cloud SQL): Managed SQL databases</li>
                        <li>NoSQL Databases (DynamoDB, Cosmos DB, Firestore): Document and key-value stores</li>
                        <li>Data Warehouses (Redshift, Azure Synapse, BigQuery): Analytics databases</li>
                        <li>In-Memory Databases (ElastiCache, Azure Cache): High-performance caching</li>
                    </ul>
                </li>
                
                <li><strong>Networking Services:</strong>
                    <ul>
                        <li>Virtual Private Cloud (VPC): Isolated network environments</li>
                        <li>Load Balancers: Distribute traffic across multiple instances</li>
                        <li>Content Delivery Networks (CDN): Fast content delivery globally</li>
                        <li>VPN and Direct Connect: Secure connections to cloud</li>
                    </ul>
                </li>
                
                <li><strong>Security Services:</strong>
                    <ul>
                        <li>Identity and Access Management (IAM): User and permission management</li>
                        <li>Key Management Services: Encryption key management</li>
                        <li>Web Application Firewalls (WAF): Protect web applications</li>
                        <li>Security Groups and Network ACLs: Network-level security</li>
                        <li>Secrets Management: Secure storage of credentials</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Cloud Architecture Best Practices:</h4>
            <ul>
                <li><strong>Design for Failure:</strong> Assume components will fail. Implement redundancy, health checks, and automatic failover mechanisms. Use multiple availability zones and regions.</li>
                
                <li><strong>Scalability:</strong> Design systems that can scale horizontally (add more instances) and vertically (increase instance size). Implement auto-scaling based on metrics like CPU, memory, or request count.</li>
                
                <li><strong>Security First:</strong> Implement defense in depth with multiple security layers. Use encryption at rest and in transit. Implement least privilege access. Regular security audits and penetration testing.</li>
                
                <li><strong>Infrastructure as Code (IaC):</strong> Use tools like Terraform, CloudFormation, or Pulumi to define infrastructure in code. This enables version control, reproducibility, and automated deployments.</li>
                
                <li><strong>Cost Optimization:</strong> Right-size resources, use reserved instances for predictable workloads, implement auto-scaling to reduce idle resources, use spot instances for fault-tolerant workloads, and regularly review and optimize costs.</li>
                
                <li><strong>Monitoring and Logging:</strong> Implement comprehensive monitoring (CloudWatch, Azure Monitor, Stackdriver). Set up alerts for critical metrics. Centralize logging for troubleshooting and security analysis.</li>
                
                <li><strong>Disaster Recovery:</strong> Implement backup strategies, define RTO (Recovery Time Objective) and RPO (Recovery Point Objective), test disaster recovery procedures regularly, and use multi-region deployments for critical systems.</li>
                
                <li><strong>DevOps Integration:</strong> Implement CI/CD pipelines, use containerization for consistent deployments, automate testing and deployment processes, and implement blue-green or canary deployments.</li>
            </ul>
            
            <h4>Cost Management Strategies:</h4>
            <ul>
                <li>Use cost calculators to estimate expenses</li>
                <li>Implement tagging for cost allocation</li>
                <li>Set up billing alerts and budgets</li>
                <li>Regularly review and optimize resource usage</li>
                <li>Use reserved instances for predictable workloads</li>
                <li>Leverage spot instances for fault-tolerant applications</li>
                <li>Implement auto-scaling to match demand</li>
            </ul>
        `
    },
    mobile: {
        title: 'Mobile Development',
        video: {
            title: 'React Native Full Course for Beginners',
            duration: '5:20:00',
            description: 'Complete React Native tutorial for building cross-platform mobile apps',
            embedId: '0-S5a0eXPoc'
        },
        notes: `
            <h4>Complete Mobile Development Guide</h4>
            <p>Mobile application development has evolved into a sophisticated discipline that requires understanding multiple platforms, programming languages, frameworks, and design principles. Modern mobile apps must deliver exceptional user experiences while handling complex business logic, real-time data synchronization, offline capabilities, and seamless integration with backend services.</p>
            
            <h4>Development Approaches - Comprehensive Comparison:</h4>
            <ul>
                <li><strong>Native Development:</strong> 
                    <ul>
                        <li><strong>iOS (Swift/SwiftUI):</strong> Best performance, full access to platform features, requires separate codebase. Uses Xcode, Swift programming language, UIKit/SwiftUI frameworks. Ideal for apps requiring maximum performance and platform-specific features.</li>
                        <li><strong>Android (Kotlin/Java):</strong> Best performance, full Android SDK access, Material Design components. Uses Android Studio, Kotlin/Java, Jetpack Compose. Ideal for apps needing deep Android integration.</li>
                        <li>Pros: Best performance, full platform access, native UI/UX</li>
                        <li>Cons: Separate codebases, higher development cost, longer time to market</li>
                    </ul>
                </li>
                
                <li><strong>Cross-Platform Frameworks:</strong>
                    <ul>
                        <li><strong>React Native:</strong> JavaScript/TypeScript, shared codebase, hot reload, large community. Used by Facebook, Instagram, Airbnb. Best for teams familiar with React.</li>
                        <li><strong>Flutter:</strong> Dart language, single codebase, excellent performance, beautiful UI. Used by Google, Alibaba. Best for apps requiring custom UI and high performance.</li>
                        <li><strong>Xamarin:</strong> C#/.NET, native performance, Microsoft ecosystem. Best for teams using .NET stack.</li>
                        <li>Pros: Single codebase, faster development, cost-effective</li>
                        <li>Cons: Some platform limitations, larger app size, occasional performance trade-offs</li>
                    </ul>
                </li>
                
                <li><strong>Hybrid Development:</strong>
                    <ul>
                        <li><strong>Ionic:</strong> Web technologies (HTML, CSS, JavaScript), Cordova/Capacitor plugins</li>
                        <li><strong>Apache Cordova:</strong> Web apps wrapped in native container</li>
                        <li>Pros: Web developer friendly, rapid prototyping</li>
                        <li>Cons: Performance limitations, limited native features</li>
                    </ul>
                </li>
            </ul>
            
            <h4>iOS Development - Complete Stack:</h4>
            <ul>
                <li><strong>Programming Languages:</strong> Swift (modern, safe, fast), Objective-C (legacy support)</li>
                <li><strong>Development Tools:</strong> Xcode IDE, Instruments (profiling), Simulator, TestFlight (beta testing)</li>
                <li><strong>UI Frameworks:</strong> SwiftUI (declarative, modern), UIKit (imperative, mature), Combine (reactive programming)</li>
                <li><strong>Architecture Patterns:</strong> MVC, MVVM, VIPER, Clean Architecture</li>
                <li><strong>Key Frameworks:</strong> Core Data (persistence), Core Animation, ARKit, HealthKit, CloudKit</li>
                <li><strong>App Distribution:</strong> App Store Connect, TestFlight, Enterprise distribution</li>
                <li><strong>Design Guidelines:</strong> Human Interface Guidelines (HIG), accessibility standards</li>
            </ul>
            
            <h4>Android Development - Complete Stack:</h4>
            <ul>
                <li><strong>Programming Languages:</strong> Kotlin (preferred, modern), Java (legacy support)</li>
                <li><strong>Development Tools:</strong> Android Studio, Gradle (build system), ADB (debugging)</li>
                <li><strong>UI Frameworks:</strong> Jetpack Compose (modern, declarative), XML layouts (traditional), Material Design 3</li>
                <li><strong>Architecture Components:</strong> ViewModel, LiveData, Room (database), Navigation, WorkManager</li>
                <li><strong>Key Libraries:</strong> Retrofit (networking), Glide/Coil (image loading), Coroutines (async), Hilt/Dagger (dependency injection)</li>
                <li><strong>App Distribution:</strong> Google Play Console, Internal testing, Alpha/Beta channels, Firebase App Distribution</li>
                <li><strong>Design Guidelines:</strong> Material Design, Material You, accessibility guidelines</li>
            </ul>
            
            <h4>Essential Mobile Development Concepts:</h4>
            <ul>
                <li><strong>State Management:</strong> Redux, MobX, Provider, Bloc, Riverpod - Managing app state efficiently</li>
                <li><strong>Navigation:</strong> Stack navigation, tab navigation, drawer navigation, deep linking</li>
                <li><strong>API Integration:</strong> REST APIs, GraphQL, WebSocket, gRPC, authentication (OAuth, JWT)</li>
                <li><strong>Data Persistence:</strong> SQLite, Realm, Core Data, SharedPreferences, AsyncStorage, secure storage</li>
                <li><strong>Offline Capabilities:</strong> Local caching, sync strategies, conflict resolution, background sync</li>
                <li><strong>Push Notifications:</strong> FCM (Firebase Cloud Messaging), APNs (Apple Push Notification service), local notifications</li>
                <li><strong>Performance Optimization:</strong> Image optimization, lazy loading, code splitting, memory management, battery optimization</li>
                <li><strong>Testing:</strong> Unit tests, integration tests, UI tests, end-to-end tests, device testing</li>
            </ul>
            
            <h4>Mobile App Architecture Best Practices:</h4>
            <ul>
                <li>Follow platform-specific design guidelines (Material Design, HIG)</li>
                <li>Implement proper error handling and user feedback</li>
                <li>Optimize for different screen sizes and orientations</li>
                <li>Handle network connectivity changes gracefully</li>
                <li>Implement proper security (certificate pinning, encryption)</li>
                <li>Optimize app size and startup time</li>
                <li>Implement analytics and crash reporting</li>
                <li>Follow accessibility guidelines (WCAG, platform-specific)</li>
            </ul>
        `
    },
    web: {
        title: 'Web Development',
        video: {
            title: 'Full Stack Web Development Course',
            duration: '12:00:00',
            description: 'Complete full stack web development tutorial',
            embedId: 'zJSY8tbfUdY'
        },
        notes: `
            <h4>Complete Full Stack Web Development Guide</h4>
            <p>Modern web development is a comprehensive discipline that combines frontend user interface design, backend server logic, database management, and deployment strategies. Full stack developers work across the entire technology stack, from the user-facing frontend to the server-side backend, creating seamless, performant, and scalable web applications.</p>
            
            <h4>Frontend Technologies - Complete Stack:</h4>
            <ul>
                <li><strong>HTML5:</strong> 
                    <ul>
                        <li>Semantic elements (header, nav, article, section, footer)</li>
                        <li>Forms and input types, validation</li>
                        <li>Canvas and SVG for graphics</li>
                        <li>Web Components and Custom Elements</li>
                        <li>Accessibility features (ARIA attributes)</li>
                    </ul>
                </li>
                
                <li><strong>CSS3:</strong>
                    <ul>
                        <li>Flexbox and Grid layouts</li>
                        <li>CSS Variables (Custom Properties)</li>
                        <li>Animations and transitions</li>
                        <li>Media queries for responsive design</li>
                        <li>CSS Modules and styled-components</li>
                        <li>Preprocessors (SASS, LESS, Stylus)</li>
                    </ul>
                </li>
                
                <li><strong>JavaScript (ES6+):</strong>
                    <ul>
                        <li>Modern syntax (arrow functions, destructuring, spread operator)</li>
                        <li>Async/await and Promises</li>
                        <li>Modules (ES6 modules, CommonJS)</li>
                        <li>DOM manipulation and event handling</li>
                        <li>TypeScript for type safety</li>
                    </ul>
                </li>
                
                <li><strong>Frontend Frameworks & Libraries:</strong>
                    <ul>
                        <li><strong>React:</strong> Component-based, virtual DOM, hooks, large ecosystem</li>
                        <li><strong>Vue.js:</strong> Progressive framework, easy learning curve, excellent documentation</li>
                        <li><strong>Angular:</strong> Full-featured framework, TypeScript-first, enterprise-ready</li>
                        <li><strong>Svelte:</strong> Compile-time optimization, no virtual DOM</li>
                        <li><strong>Next.js:</strong> React framework with SSR, SSG, routing, and optimization</li>
                        <li><strong>Nuxt.js:</strong> Vue.js framework with SSR capabilities</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Backend Technologies - Complete Stack:</h4>
            <ul>
                <li><strong>Node.js:</strong>
                    <ul>
                        <li>Express.js - Minimalist web framework</li>
                        <li>Fastify - High-performance framework</li>
                        <li>NestJS - Enterprise-grade framework with TypeScript</li>
                        <li>Socket.io - Real-time communication</li>
                    </ul>
                </li>
                
                <li><strong>Python:</strong>
                    <ul>
                        <li>Django - Full-featured framework, batteries included</li>
                        <li>Flask - Lightweight, flexible microframework</li>
                        <li>FastAPI - Modern, fast framework for APIs</li>
                        <li>Pyramid - Flexible, scalable framework</li>
                    </ul>
                </li>
                
                <li><strong>Other Backend Technologies:</strong>
                    <ul>
                        <li>Ruby on Rails - Convention over configuration</li>
                        <li>PHP (Laravel, Symfony) - Server-side scripting</li>
                        <li>Java (Spring Boot) - Enterprise applications</li>
                        <li>.NET (ASP.NET Core) - Microsoft ecosystem</li>
                        <li>Go (Gin, Echo) - High-performance language</li>
                    </ul>
                </li>
                
                <li><strong>API Development:</strong>
                    <ul>
                        <li>RESTful APIs - Standard HTTP methods, stateless</li>
                        <li>GraphQL - Query language, single endpoint</li>
                        <li>gRPC - High-performance RPC framework</li>
                        <li>WebSocket - Real-time bidirectional communication</li>
                    </ul>
                </li>
                
                <li><strong>Serverless:</strong>
                    <ul>
                        <li>AWS Lambda, Azure Functions, Google Cloud Functions</li>
                        <li>Vercel, Netlify Functions</li>
                        <li>Serverless Framework</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Database Technologies:</h4>
            <ul>
                <li><strong>SQL Databases:</strong> PostgreSQL, MySQL, SQL Server, SQLite</li>
                <li><strong>NoSQL Databases:</strong> MongoDB, Cassandra, Redis, CouchDB</li>
                <li><strong>ORM/ODM:</strong> Sequelize, TypeORM, Prisma, Mongoose, SQLAlchemy</li>
                <li><strong>Database Design:</strong> Normalization, indexing, query optimization</li>
            </ul>
            
            <h4>Essential Development Tools:</h4>
            <ul>
                <li><strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
                <li><strong>Package Managers:</strong> npm, yarn, pnpm, pip, composer</li>
                <li><strong>Build Tools:</strong> Webpack, Vite, Parcel, Rollup, esbuild</li>
                <li><strong>Task Runners:</strong> Gulp, Grunt, npm scripts</li>
                <li><strong>Testing:</strong> Jest, Mocha, Cypress, Playwright, Selenium</li>
                <li><strong>Linting/Formatting:</strong> ESLint, Prettier, Stylelint</li>
                <li><strong>CI/CD:</strong> GitHub Actions, GitLab CI, Jenkins, CircleCI</li>
            </ul>
            
            <h4>Web Development Best Practices:</h4>
            <ul>
                <li><strong>Responsive Design:</strong> Mobile-first approach, flexible layouts, responsive images</li>
                <li><strong>Performance Optimization:</strong> Code splitting, lazy loading, image optimization, caching, CDN usage</li>
                <li><strong>SEO Optimization:</strong> Semantic HTML, meta tags, structured data, sitemaps, fast loading</li>
                <li><strong>Accessibility (a11y):</strong> WCAG guidelines, keyboard navigation, screen reader support, ARIA attributes</li>
                <li><strong>Security:</strong> HTTPS, input validation, XSS prevention, CSRF protection, secure authentication</li>
                <li><strong>Code Quality:</strong> Clean code principles, SOLID principles, design patterns, code reviews</li>
                <li><strong>Testing:</strong> Unit tests, integration tests, E2E tests, test-driven development (TDD)</li>
            </ul>
            
            <h4>Modern Web Development Trends:</h4>
            <ul>
                <li>Progressive Web Apps (PWA) - Offline capabilities, app-like experience</li>
                <li>Server-Side Rendering (SSR) - Next.js, Nuxt.js for SEO and performance</li>
                <li>Static Site Generation (SSG) - JAMstack architecture</li>
                <li>Micro-frontends - Modular frontend architecture</li>
                <li>WebAssembly (WASM) - High-performance web applications</li>
                <li>Edge Computing - CDN-based serverless functions</li>
            </ul>
        `
    },
    database: {
        title: 'Database Solutions',
        video: {
            title: 'SQL Full Course for Beginners',
            duration: '4:20:00',
            description: 'Complete SQL and database design tutorial',
            embedId: 'HXV3zeQKqGY'
        },
        notes: `
            <h4>Complete Database Solutions Guide</h4>
            <p>Databases form the backbone of modern applications, providing efficient storage, retrieval, and management of data. Understanding database design, query optimization, and choosing the right database type for your use case is crucial for building scalable, performant applications.</p>
            
            <h4>Database Types - Comprehensive Overview:</h4>
            <ul>
                <li><strong>Relational Databases (SQL):</strong>
                    <ul>
                        <li><strong>PostgreSQL:</strong> Advanced open-source RDBMS, ACID compliant, supports JSON, full-text search, excellent for complex queries</li>
                        <li><strong>MySQL:</strong> Popular open-source database, fast, widely used, good for web applications</li>
                        <li><strong>SQL Server:</strong> Microsoft's enterprise database, strong integration with .NET, comprehensive tooling</li>
                        <li><strong>Oracle:</strong> Enterprise-grade database, high performance, advanced features, expensive</li>
                        <li><strong>SQLite:</strong> Lightweight, file-based, perfect for mobile apps and small projects</li>
                    </ul>
                </li>
                
                <li><strong>NoSQL Databases:</strong>
                    <ul>
                        <li><strong>MongoDB:</strong> Document database, flexible schema, JSON-like documents, great for rapid development</li>
                        <li><strong>Cassandra:</strong> Wide-column store, designed for scalability, excellent for time-series data</li>
                        <li><strong>Redis:</strong> In-memory key-value store, extremely fast, used for caching and real-time applications</li>
                        <li><strong>CouchDB:</strong> Document database with multi-master replication</li>
                        <li><strong>DynamoDB:</strong> AWS managed NoSQL, serverless, auto-scaling</li>
                    </ul>
                </li>
                
                <li><strong>Graph Databases:</strong>
                    <ul>
                        <li><strong>Neo4j:</strong> Leading graph database, excellent for relationship-heavy data, social networks, recommendations</li>
                        <li><strong>ArangoDB:</strong> Multi-model database (document, graph, key-value)</li>
                        <li><strong>Amazon Neptune:</strong> Managed graph database service</li>
                    </ul>
                </li>
                
                <li><strong>Time-Series Databases:</strong>
                    <ul>
                        <li><strong>InfluxDB:</strong> Optimized for time-series data, IoT applications, monitoring</li>
                        <li><strong>TimescaleDB:</strong> PostgreSQL extension for time-series data</li>
                        <li><strong>Prometheus:</strong> Monitoring and alerting, time-series database</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Core Database Concepts:</h4>
            <ul>
                <li><strong>ACID Properties:</strong>
                    <ul>
                        <li>Atomicity - All or nothing transactions</li>
                        <li>Consistency - Data remains valid</li>
                        <li>Isolation - Concurrent transactions don't interfere</li>
                        <li>Durability - Committed data persists</li>
                    </ul>
                </li>
                
                <li><strong>Normalization:</strong> Organizing data to reduce redundancy (1NF, 2NF, 3NF, BCNF)</li>
                <li><strong>Denormalization:</strong> Intentionally adding redundancy for performance</li>
                <li><strong>Indexing:</strong> B-tree, Hash, Bitmap indexes for fast data retrieval</li>
                <li><strong>Query Optimization:</strong> EXPLAIN plans, query tuning, index usage</li>
                <li><strong>Transactions:</strong> BEGIN, COMMIT, ROLLBACK, savepoints</li>
                <li><strong>Concurrency Control:</strong> Locks, isolation levels, deadlock prevention</li>
            </ul>
            
            <h4>Database Design Best Practices:</h4>
            <ul>
                <li><strong>Entity-Relationship Modeling:</strong> Identify entities, relationships, attributes, cardinality</li>
                <li><strong>Schema Design:</strong> Table structure, data types, constraints, foreign keys</li>
                <li><strong>Data Integrity:</strong> Primary keys, foreign keys, unique constraints, check constraints</li>
                <li><strong>Partitioning:</strong> Horizontal (sharding) and vertical partitioning for scalability</li>
                <li><strong>Replication:</strong> Master-slave, master-master replication for high availability</li>
                <li><strong>Backup Strategies:</strong> Full, incremental, differential backups, point-in-time recovery</li>
            </ul>
            
            <h4>Performance Optimization Techniques:</h4>
            <ul>
                <li><strong>Query Optimization:</strong> Use EXPLAIN to analyze queries, optimize JOINs, avoid SELECT *</li>
                <li><strong>Indexing Strategies:</strong> Create indexes on frequently queried columns, composite indexes, covering indexes</li>
                <li><strong>Caching:</strong> Redis, Memcached for frequently accessed data</li>
                <li><strong>Connection Pooling:</strong> Reuse database connections, reduce overhead</li>
                <li><strong>Query Caching:</strong> Cache query results for read-heavy applications</li>
                <li><strong>Materialized Views:</strong> Pre-computed views for complex queries</li>
            </ul>
            
            <h4>Database Management Tools:</h4>
            <ul>
                <li><strong>ORM/ODM:</strong> Sequelize, TypeORM, Prisma, Mongoose, SQLAlchemy</li>
                <li><strong>Database Clients:</strong> pgAdmin, MySQL Workbench, DBeaver, TablePlus</li>
                <li><strong>Migration Tools:</strong> Flyway, Liquibase, Alembic, Knex.js</li>
                <li><strong>Monitoring:</strong> Database performance monitoring, query analysis tools</li>
            </ul>
        `
    },
    security: {
        title: 'Security Services',
        video: {
            title: 'Cybersecurity Full Course',
            duration: '11:00:00',
            description: 'Complete cybersecurity and application security guide',
            embedId: 'inWWhr5tnEA'
        },
        notes: `
            <h4>Complete Application Security Guide</h4>
            <p>Application security is a critical discipline that protects software, data, and users from threats, vulnerabilities, and attacks. Implementing robust security measures requires understanding attack vectors, security principles, and best practices across all layers of the application stack.</p>
            
            <h4>Core Security Principles:</h4>
            <ul>
                <li><strong>Authentication:</strong> Verifying user identity (passwords, MFA, OAuth, JWT, biometrics)</li>
                <li><strong>Authorization:</strong> Controlling access to resources (RBAC, ABAC, permissions)</li>
                <li><strong>Encryption:</strong> 
                    <ul>
                        <li>At rest: Database encryption, file encryption</li>
                        <li>In transit: TLS/SSL, HTTPS, certificate pinning</li>
                        <li>Algorithms: AES-256, RSA, ECC</li>
                    </ul>
                </li>
                <li><strong>Input Validation:</strong> Sanitize and validate all user inputs, prevent injection attacks</li>
                <li><strong>Secure Coding:</strong> Follow secure coding guidelines, code reviews, static analysis</li>
                <li><strong>Least Privilege:</strong> Grant minimum necessary permissions</li>
                <li><strong>Defense in Depth:</strong> Multiple security layers</li>
            </ul>
            
            <h4>OWASP Top 10 - Detailed Breakdown:</h4>
            <ul>
                <li><strong>Injection:</strong> SQL, NoSQL, OS command, LDAP injection. Prevention: Parameterized queries, input validation, ORM usage</li>
                <li><strong>Broken Authentication:</strong> Weak passwords, session fixation, credential stuffing. Prevention: Strong password policies, MFA, secure session management</li>
                <li><strong>Sensitive Data Exposure:</strong> Unencrypted data, weak encryption, exposed secrets. Prevention: Encryption, secure key management, data minimization</li>
                <li><strong>XML External Entities (XXE):</strong> XML parser vulnerabilities. Prevention: Disable XML external entities, use simpler data formats</li>
                <li><strong>Broken Access Control:</strong> Unauthorized access, privilege escalation. Prevention: Proper authorization checks, RBAC implementation</li>
                <li><strong>Security Misconfiguration:</strong> Default credentials, exposed debug info, unnecessary features. Prevention: Security hardening, regular audits</li>
                <li><strong>Cross-Site Scripting (XSS):</strong> Stored, reflected, DOM-based XSS. Prevention: Output encoding, Content Security Policy (CSP), input validation</li>
                <li><strong>Insecure Deserialization:</strong> Object injection attacks. Prevention: Avoid deserializing untrusted data, use safe serialization formats</li>
                <li><strong>Using Components with Known Vulnerabilities:</strong> Outdated libraries, unpatched dependencies. Prevention: Dependency scanning, regular updates</li>
                <li><strong>Insufficient Logging & Monitoring:</strong> Missing security events, delayed incident response. Prevention: Comprehensive logging, SIEM, alerting</li>
            </ul>
            
            <h4>Security Implementation Strategies:</h4>
            <ul>
                <li><strong>Authentication Methods:</strong> Password-based, OAuth 2.0, OpenID Connect, SAML, JWT tokens, API keys</li>
                <li><strong>Authorization Models:</strong> Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), Policy-Based Access Control</li>
                <li><strong>Data Protection:</strong> Encryption, hashing (bcrypt, Argon2), data masking, tokenization</li>
                <li><strong>Network Security:</strong> Firewalls, VPN, network segmentation, DDoS protection</li>
                <li><strong>Application Security:</strong> WAF, rate limiting, input validation, output encoding</li>
            </ul>
            
            <h4>Security Testing & Tools:</h4>
            <ul>
                <li><strong>Penetration Testing:</strong> OWASP ZAP, Burp Suite, Metasploit, Nmap</li>
                <li><strong>Vulnerability Scanners:</strong> Nessus, OpenVAS, Qualys, Snyk, OWASP Dependency-Check</li>
                <li><strong>Static Analysis:</strong> SonarQube, Checkmarx, Veracode, CodeQL</li>
                <li><strong>Dynamic Analysis:</strong> DAST tools, runtime application self-protection (RASP)</li>
                <li><strong>SIEM:</strong> Splunk, ELK Stack, IBM QRadar, Azure Sentinel</li>
                <li><strong>WAF:</strong> Cloudflare, AWS WAF, ModSecurity, Imperva</li>
            </ul>
            
            <h4>Security Best Practices:</h4>
            <ul>
                <li>Implement HTTPS everywhere (TLS 1.2+)</li>
                <li>Use secure password storage (hashing with salt, bcrypt/Argon2)</li>
                <li>Implement rate limiting and DDoS protection</li>
                <li>Regular security audits and penetration testing</li>
                <li>Keep dependencies updated, use automated scanning</li>
                <li>Implement comprehensive logging and monitoring</li>
                <li>Follow secure coding guidelines and conduct code reviews</li>
                <li>Implement security headers (CSP, HSTS, X-Frame-Options)</li>
                <li>Regular security training for development teams</li>
                <li>Incident response plan and disaster recovery procedures</li>
            </ul>
        `
    },
    analytics: {
        title: 'Analytics & Data',
        video: {
            title: 'Data Analytics Full Course',
            duration: '9:00:00',
            description: 'Complete data analytics and business intelligence tutorial',
            embedId: 'r-uOLxNrNk8'
        },
        notes: `
            <h4>Complete Data Analytics & Business Intelligence Guide</h4>
            <p>Data analytics transforms raw data into actionable insights, enabling data-driven decision making. Modern analytics encompasses descriptive analysis of historical data, diagnostic analysis to understand causes, predictive modeling for future trends, and prescriptive analytics to recommend actions.</p>
            
            <h4>Types of Analytics - Deep Dive:</h4>
            <ul>
                <li><strong>Descriptive Analytics:</strong> "What happened?"
                    <ul>
                        <li>Historical data analysis, reporting, dashboards</li>
                        <li>Key metrics: Revenue, user counts, conversion rates</li>
                        <li>Tools: SQL queries, Excel, reporting tools</li>
                    </ul>
                </li>
                
                <li><strong>Diagnostic Analytics:</strong> "Why did it happen?"
                    <ul>
                        <li>Root cause analysis, drill-down analysis</li>
                        <li>Correlation analysis, A/B testing</li>
                        <li>Tools: Statistical analysis, data mining</li>
                    </ul>
                </li>
                
                <li><strong>Predictive Analytics:</strong> "What will happen?"
                    <ul>
                        <li>Forecasting, trend analysis, machine learning models</li>
                        <li>Techniques: Regression, time series, classification</li>
                        <li>Tools: Python (scikit-learn), R, TensorFlow, PyTorch</li>
                    </ul>
                </li>
                
                <li><strong>Prescriptive Analytics:</strong> "What should we do?"
                    <ul>
                        <li>Optimization, recommendation systems</li>
                        <li>Decision support systems, simulation</li>
                        <li>Tools: Optimization algorithms, AI/ML models</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Analytics Tools & Platforms:</h4>
            <ul>
                <li><strong>Web Analytics:</strong> Google Analytics, Adobe Analytics, Mixpanel, Amplitude</li>
                <li><strong>Business Intelligence:</strong> Tableau, Power BI, Looker, Qlik Sense, Metabase</li>
                <li><strong>Data Visualization:</strong> D3.js, Plotly, Matplotlib, Seaborn, Chart.js</li>
                <li><strong>Programming Languages:</strong>
                    <ul>
                        <li>Python: Pandas, NumPy, Matplotlib, Seaborn, scikit-learn</li>
                        <li>R: dplyr, ggplot2, shiny, caret</li>
                        <li>SQL: Data extraction and transformation</li>
                    </ul>
                </li>
                <li><strong>Big Data Tools:</strong> Apache Spark, Hadoop, Kafka, Flink</li>
            </ul>
            
            <h4>Data Processing Pipeline:</h4>
            <ul>
                <li><strong>ETL (Extract, Transform, Load):</strong>
                    <ul>
                        <li>Extract: Data from various sources (APIs, databases, files)</li>
                        <li>Transform: Cleaning, validation, aggregation, enrichment</li>
                        <li>Load: Into data warehouse or data lake</li>
                    </ul>
                </li>
                
                <li><strong>ELT (Extract, Load, Transform):</strong> Load raw data first, transform in warehouse</li>
                
                <li><strong>Data Warehousing:</strong> Centralized data storage (Snowflake, BigQuery, Redshift, Azure Synapse)</li>
                
                <li><strong>Data Lakes:</strong> Raw data storage (AWS S3, Azure Data Lake, Hadoop)</li>
                
                <li><strong>Real-time Processing:</strong> Stream processing (Kafka, Flink, Spark Streaming)</li>
            </ul>
            
            <h4>Key Metrics & KPIs:</h4>
            <ul>
                <li><strong>User Metrics:</strong> DAU/MAU, retention rate, churn rate, session duration</li>
                <li><strong>Engagement Metrics:</strong> Page views, bounce rate, time on site, click-through rate</li>
                <li><strong>Conversion Metrics:</strong> Conversion rate, revenue per user, customer lifetime value</li>
                <li><strong>Business Metrics:</strong> Revenue, profit margins, growth rate, market share</li>
                <li><strong>Technical Metrics:</strong> Response time, error rate, uptime, throughput</li>
            </ul>
            
            <h4>Data Analysis Techniques:</h4>
            <ul>
                <li><strong>Statistical Analysis:</strong> Descriptive statistics, hypothesis testing, regression analysis</li>
                <li><strong>Machine Learning:</strong> Classification, clustering, regression, recommendation systems</li>
                <li><strong>Time Series Analysis:</strong> Trend analysis, seasonality, forecasting</li>
                <li><strong>Cohort Analysis:</strong> User behavior over time, retention analysis</li>
                <li><strong>A/B Testing:</strong> Experimentation, statistical significance, conversion optimization</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Define clear business questions and objectives</li>
                <li>Ensure data quality and cleanliness</li>
                <li>Use appropriate visualization techniques</li>
                <li>Implement data governance and security</li>
                <li>Create actionable insights, not just reports</li>
                <li>Automate reporting and dashboards</li>
                <li>Continuously validate and update models</li>
            </ul>
        `
    },
    api: {
        title: 'API Development',
        video: {
            title: 'REST API Full Course',
            duration: '3:30:00',
            description: 'Complete REST API and GraphQL development tutorial',
            embedId: 'Q-BpqyOT3a8'
        },
        notes: `
            <h4>Complete API Development Guide</h4>
            <p>APIs (Application Programming Interfaces) are the foundation of modern software architecture, enabling different systems, services, and applications to communicate and exchange data. Well-designed APIs are crucial for building scalable, maintainable, and interoperable systems.</p>
            
            <h4>API Types - Comprehensive Overview:</h4>
            <ul>
                <li><strong>REST (Representational State Transfer):</strong>
                    <ul>
                        <li>Stateless, resource-based architecture</li>
                        <li>Uses HTTP methods (GET, POST, PUT, PATCH, DELETE)</li>
                        <li>JSON/XML data formats</li>
                        <li>Cacheable, uniform interface</li>
                        <li>Best for: Web applications, mobile apps, public APIs</li>
                    </ul>
                </li>
                
                <li><strong>GraphQL:</strong>
                    <ul>
                        <li>Query language and runtime for APIs</li>
                        <li>Single endpoint, client-specified queries</li>
                        <li>Strong type system, introspection</li>
                        <li>Real-time subscriptions</li>
                        <li>Best for: Complex data requirements, mobile apps, microservices</li>
                    </ul>
                </li>
                
                <li><strong>gRPC:</strong>
                    <ul>
                        <li>High-performance RPC framework</li>
                        <li>Protocol Buffers for serialization</li>
                        <li>HTTP/2, streaming support</li>
                        <li>Strong typing, code generation</li>
                        <li>Best for: Microservices, high-performance systems, internal APIs</li>
                    </ul>
                </li>
                
                <li><strong>WebSocket:</strong>
                    <ul>
                        <li>Full-duplex communication over TCP</li>
                        <li>Real-time, bidirectional</li>
                        <li>Persistent connections</li>
                        <li>Best for: Real-time applications, chat, gaming, live updates</li>
                    </ul>
                </li>
                
                <li><strong>SOAP:</strong> XML-based protocol, enterprise applications</li>
                <li><strong>Webhooks:</strong> Event-driven, HTTP callbacks</li>
            </ul>
            
            <h4>REST API Design Best Practices:</h4>
            <ul>
                <li><strong>URL Design:</strong> Use nouns, hierarchical structure (/users/123/posts), lowercase, hyphens</li>
                <li><strong>HTTP Methods:</strong> GET (read), POST (create), PUT (update), PATCH (partial update), DELETE (remove)</li>
                <li><strong>Status Codes:</strong> 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 404 (Not Found), 500 (Server Error)</li>
                <li><strong>Error Handling:</strong> Consistent error format, meaningful messages, proper status codes</li>
                <li><strong>Versioning:</strong> URL versioning (/v1/), header versioning, query parameter versioning</li>
                <li><strong>Pagination:</strong> Limit/offset, cursor-based pagination, page size limits</li>
                <li><strong>Filtering & Sorting:</strong> Query parameters for filtering, sorting, searching</li>
                <li><strong>Rate Limiting:</strong> Protect APIs, prevent abuse, return rate limit headers</li>
            </ul>
            
            <h4>Authentication & Authorization:</h4>
            <ul>
                <li><strong>JWT (JSON Web Tokens):</strong> Stateless, self-contained tokens</li>
                <li><strong>OAuth 2.0:</strong> Authorization framework, access tokens, refresh tokens</li>
                <li><strong>API Keys:</strong> Simple authentication for server-to-server</li>
                <li><strong>Basic Auth:</strong> Username/password (HTTPS required)</li>
                <li><strong>Bearer Tokens:</strong> Token-based authentication</li>
            </ul>
            
            <h4>GraphQL Implementation:</h4>
            <ul>
                <li><strong>Schema Definition:</strong> Type system, queries, mutations, subscriptions</li>
                <li><strong>Resolvers:</strong> Functions that resolve field values</li>
                <li><strong>DataLoader:</strong> Batch and cache requests (N+1 problem solution)</li>
                <li><strong>Fragments:</strong> Reusable query parts</li>
                <li><strong>Directives:</strong> @include, @skip, @deprecated</li>
                <li><strong>Tools:</strong> Apollo Server, GraphQL Yoga, Hasura</li>
            </ul>
            
            <h4>API Documentation:</h4>
            <ul>
                <li><strong>OpenAPI/Swagger:</strong> Standard API specification, interactive docs</li>
                <li><strong>GraphQL Schema:</strong> Self-documenting, GraphQL Playground</li>
                <li><strong>Postman:</strong> API testing, collections, documentation</li>
                <li><strong>API Blueprint:</strong> Markdown-based API documentation</li>
                <li><strong>RAML:</strong> RESTful API Modeling Language</li>
            </ul>
            
            <h4>API Testing & Monitoring:</h4>
            <ul>
                <li><strong>Testing Tools:</strong> Postman, Insomnia, REST Assured, Karate</li>
                <li><strong>Load Testing:</strong> Apache JMeter, k6, Artillery, Gatling</li>
                <li><strong>Monitoring:</strong> API analytics, error tracking, performance monitoring</li>
                <li><strong>Documentation:</strong> Keep docs updated, provide examples, interactive testing</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Follow RESTful principles or GraphQL best practices</li>
                <li>Implement proper error handling and status codes</li>
                <li>Use HTTPS for all API communications</li>
                <li>Implement rate limiting and throttling</li>
                <li>Version your APIs properly</li>
                <li>Provide comprehensive, up-to-date documentation</li>
                <li>Implement logging and monitoring</li>
                <li>Use caching where appropriate</li>
                <li>Validate and sanitize all inputs</li>
                <li>Implement proper security measures</li>
            </ul>
        `
    },
    devops: {
        title: 'DevOps & Automation',
        video: {
            title: 'DevOps Full Course',
            duration: '10:00:00',
            description: 'Complete DevOps, Docker, Kubernetes, and CI/CD tutorial',
            embedId: '9zUHg7xjIqQ'
        },
        notes: `
            <h4>Complete DevOps & Automation Guide</h4>
            <p>DevOps is a cultural and technical movement that bridges development and operations, emphasizing collaboration, automation, and continuous improvement. It enables organizations to deliver software faster, more reliably, and with higher quality through automation, infrastructure as code, and continuous integration/deployment practices.</p>
            
            <h4>Core DevOps Practices:</h4>
            <ul>
                <li><strong>Continuous Integration (CI):</strong>
                    <ul>
                        <li>Automated code integration and testing</li>
                        <li>Early bug detection</li>
                        <li>Automated builds and tests on every commit</li>
                        <li>Tools: Jenkins, GitHub Actions, GitLab CI, CircleCI</li>
                    </ul>
                </li>
                
                <li><strong>Continuous Deployment (CD):</strong>
                    <ul>
                        <li>Automated deployment to production</li>
                        <li>Blue-green deployments, canary releases</li>
                        <li>Rollback capabilities</li>
                        <li>Zero-downtime deployments</li>
                    </ul>
                </li>
                
                <li><strong>Infrastructure as Code (IaC):</strong>
                    <ul>
                        <li>Version-controlled infrastructure</li>
                        <li>Reproducible environments</li>
                        <li>Tools: Terraform, Ansible, CloudFormation, Pulumi</li>
                    </ul>
                </li>
                
                <li><strong>Monitoring & Logging:</strong>
                    <ul>
                        <li>Application performance monitoring (APM)</li>
                        <li>Infrastructure monitoring</li>
                        <li>Centralized logging</li>
                        <li>Alerting and incident response</li>
                    </ul>
                </li>
                
                <li><strong>Automated Testing:</strong> Unit, integration, E2E tests in CI pipeline</li>
            </ul>
            
            <h4>DevOps Tools Ecosystem:</h4>
            <ul>
                <li><strong>CI/CD Platforms:</strong>
                    <ul>
                        <li>Jenkins - Open-source automation server</li>
                        <li>GitHub Actions - Native GitHub CI/CD</li>
                        <li>GitLab CI - Integrated CI/CD</li>
                        <li>CircleCI - Cloud-based CI/CD</li>
                        <li>Azure DevOps - Microsoft's DevOps platform</li>
                    </ul>
                </li>
                
                <li><strong>Container Technologies:</strong>
                    <ul>
                        <li>Docker - Containerization platform</li>
                        <li>Kubernetes - Container orchestration</li>
                        <li>Docker Compose - Multi-container applications</li>
                        <li>Podman - Docker alternative</li>
                    </ul>
                </li>
                
                <li><strong>Infrastructure as Code:</strong>
                    <ul>
                        <li>Terraform - Multi-cloud IaC</li>
                        <li>Ansible - Configuration management</li>
                        <li>CloudFormation - AWS IaC</li>
                        <li>Pulumi - Code-based IaC</li>
                    </ul>
                </li>
                
                <li><strong>Monitoring & Observability:</strong>
                    <ul>
                        <li>Prometheus - Metrics collection</li>
                        <li>Grafana - Visualization and dashboards</li>
                        <li>ELK Stack - Elasticsearch, Logstash, Kibana</li>
                        <li>New Relic, Datadog - APM solutions</li>
                        <li>Splunk - Log analysis</li>
                    </ul>
                </li>
            </ul>
            
            <h4>Containerization & Orchestration:</h4>
            <ul>
                <li><strong>Docker:</strong>
                    <ul>
                        <li>Container images and Dockerfiles</li>
                        <li>Docker Hub, container registries</li>
                        <li>Multi-stage builds</li>
                        <li>Docker networking and volumes</li>
                    </ul>
                </li>
                
                <li><strong>Kubernetes:</strong>
                    <ul>
                        <li>Pods, Services, Deployments</li>
                        <li>ConfigMaps and Secrets</li>
                        <li>Horizontal Pod Autoscaling</li>
                        <li>Ingress controllers</li>
                        <li>Helm charts for package management</li>
                    </ul>
                </li>
                
                <li><strong>Microservices Architecture:</strong>
                    <ul>
                        <li>Service decomposition</li>
                        <li>API gateways</li>
                        <li>Service discovery</li>
                        <li>Distributed tracing</li>
                    </ul>
                </li>
                
                <li><strong>Service Mesh:</strong> Istio, Linkerd for service-to-service communication</li>
            </ul>
            
            <h4>CI/CD Pipeline Best Practices:</h4>
            <ul>
                <li>Automate everything possible</li>
                <li>Keep builds fast and reliable</li>
                <li>Implement proper testing stages</li>
                <li>Use feature flags for gradual rollouts</li>
                <li>Implement proper security scanning</li>
                <li>Version control all configurations</li>
                <li>Monitor pipeline performance</li>
            </ul>
            
            <h4>DevOps Best Practices:</h4>
            <ul>
                <li><strong>Version Control:</strong> Git, branching strategies, code reviews</li>
                <li><strong>Automation:</strong> Automate repetitive tasks, infrastructure provisioning</li>
                <li><strong>Testing:</strong> Comprehensive test coverage, automated testing</li>
                <li><strong>Monitoring:</strong> Real-time monitoring, alerting, dashboards</li>
                <li><strong>Collaboration:</strong> Cross-functional teams, shared responsibility</li>
                <li><strong>Security:</strong> DevSecOps, security scanning, secrets management</li>
                <li><strong>Documentation:</strong> Keep documentation updated, runbooks</li>
                <li><strong>Continuous Improvement:</strong> Regular retrospectives, metrics-driven decisions</li>
            </ul>
            
            <h4>DevOps Metrics (DORA):</h4>
            <ul>
                <li>Deployment Frequency - How often deployments occur</li>
                <li>Lead Time - Time from code commit to production</li>
                <li>Mean Time to Recovery (MTTR) - Time to recover from failures</li>
                <li>Change Failure Rate - Percentage of deployments causing failures</li>
            </ul>
        `
    }
};

function openService(serviceKey) {
    const service = serviceDetails[serviceKey];
    if (!service) return;
    
    const modal = document.getElementById('serviceModal');
    const details = document.getElementById('serviceDetails');
    
    const videoEmbed = service.video.embedId ? 
        `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${service.video.embedId}" title="${service.video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 15px;"></iframe>` :
        `<div style="background: var(--darker-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 2rem; text-align: center;">
            <i class="fas fa-play-circle" style="font-size: 4rem; color: var(--primary-neon); margin-bottom: 1rem; display: block;"></i>
            <p style="font-size: 1.2rem; color: var(--text-primary); margin-bottom: 0.5rem;">${service.video.title}</p>
            <p style="color: var(--text-secondary); margin-bottom: 1rem;">${service.video.description}</p>
            <span style="color: var(--text-muted);">Duration: ${service.video.duration}</span>
        </div>`;
    
    details.innerHTML = `
        <h2 style="font-family: 'Orbitron', sans-serif; color: var(--primary-neon); margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 2px;">${service.title}</h2>
        
        <div style="margin-bottom: 3rem;">
            <h3 style="color: var(--primary-neon); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-video"></i> Video Tutorial
            </h3>
            <div style="background: var(--darker-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 1rem;">
                ${videoEmbed}
            </div>
        </div>
        
        <div>
            <h3 style="color: var(--primary-neon); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-book"></i> Comprehensive Notes
            </h3>
            <div style="background: var(--darker-bg); border: 1px solid var(--glass-border); border-radius: 20px; padding: 2rem; color: var(--text-secondary); line-height: 1.8; max-height: 60vh; overflow-y: auto;">
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

