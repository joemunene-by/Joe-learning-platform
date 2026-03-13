import { defineStore } from 'pinia'

const COURSES = [
  {
    id: 1,
    title: 'Advanced JavaScript & ES2024',
    instructor: 'Sarah Thompson',
    category: 'Programming',
    level: 'Advanced',
    videoId: 'W6NZfCO5SIk', /* JavaScript OOP Full Course - FreeCodeCamp */
    duration: '42h 30m',
    rating: 4.9,
    students: 18420,
    price: 89,
    image: '🟨',
    color: '#f7df1e',
    progress: 0,
    tags: ['ES2024', 'Closures', 'Promises', 'Design Patterns'],
    description: 'Master cutting-edge JavaScript features and modern async patterns. Deep-dive into ES2024 syntax, design patterns, performance optimization, and real-world application architecture.',
    syllabus: [
      { week: 1, topic: 'The Event Loop & Async/Await', notes: '<h3>Understanding the Event Loop</h3><p>JavaScript is single-threaded, meaning it can only do one thing at a time. However, it can handle asynchronous operations using the Event Loop.</p><ul><li><strong>Call Stack:</strong> Where your synchronous code executes.</li><li><strong>Web APIs:</strong> Browser-provided features like <code>setTimeout</code> or <code>fetch</code>.</li><li><strong>Task Queue:</strong> Where callbacks wait to be executed.</li></ul><p>When an async operation finishes, its callback is pushed to the Queue. The Event Loop constantly checks: <em>Is the Call Stack empty?</em> If yes, it moves the first item from the Queue to the Stack.</p><h4>Async/Await Syntax</h4><p>Introduced in ES8, async/await is syntactic sugar over Promises, making asynchronous code look synchronous.</p><pre><code>async function fetchData() {\n  try {\n    const response = await fetch("api/data");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Error fetching data", error);\n  }\n}</code></pre>' },
      { week: 2, topic: 'Advanced Closures & Scope' },
      { week: 3, topic: 'Functional Programming Patterns' },
      { week: 4, topic: 'Proxies & Reflect API' },
      { week: 5, topic: 'Performance Optimization' },
      { week: 6, topic: 'Final Project: Building a Framework' },
    ],
  },
  {
    id: 2,
    title: 'Vue 3 Masterclass',
    instructor: 'Marcus Lee',
    category: 'Frontend',
    level: 'Intermediate',
    videoId: 'qZXt1Aom3Cs', /* Traversy Media - Vue 3 Crash Course */
    duration: '31h 15m',
    rating: 4.8,
    students: 12050,
    price: 79,
    image: '💚',
    color: '#42b883',
    progress: 0,
    tags: ['Vue 3', 'Composition API', 'Pinia', 'Vue Router'],
    description: 'Go from fundamentals to advanced patterns in Vue 3. Covers the Composition API in-depth, state management with Pinia, TypeScript integration, and building scalable, production-ready applications.',
    syllabus: [
      { week: 1, topic: 'Composition API Fundamentals', notes: '<h3>Why Composition API?</h3><p>The Composition API is a set of additive, function-based APIs that allow flexible composition of component logic. It solves the limitations of the Options API in large components by grouping code by logical concern.</p><h4>Core Reactivity: <code>ref</code> vs <code>reactive</code></h4><ul><li><code>ref()</code>: Takes an inner value and returns a reactive and mutable ref object. Used primarily for primitives (strings, numbers, booleans).</li><li><code>reactive()</code>: Returns a reactive proxy of the object. Used for complex objects and arrays.</li></ul><p>Example using setup script:</p><pre><code>&lt;script setup&gt;\nimport { ref, computed } from "vue";\n\nconst count = ref(0);\nconst double = computed(() =&gt; count.value * 2);\n\nfunction increment() {\n  count.value++;\n}\n&lt;/script&gt;</code></pre>' },
      { week: 2, topic: 'State Management with Pinia' },
      { week: 3, topic: 'Advanced Vue Router Integration' },
      { week: 4, topic: 'Custom Directives & Plugins' },
      { week: 5, topic: 'Server-Side Rendering (SSR)' },
      { week: 6, topic: 'Final Project: SaaS Dashboard' },
    ],
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Priya Nair',
    category: 'Design',
    level: 'Beginner',
    videoId: 'c9Wg6Cb_YlU', /* UI / UX Design Tutorial - Wireframe, Mockup & Design in Figma */
    duration: '25h 00m',
    rating: 4.7,
    students: 21300,
    price: 69,
    image: '🎨',
    color: '#ff6b6b',
    progress: 0,
    tags: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    description: 'Learn the principles of great user experience from scratch. This course covers user research, wireframing, high-fidelity prototyping in Figma, and building comprehensive design systems.',
    syllabus: [
      { week: 1, topic: 'Introduction to User-Centered Design', notes: '<h3>The User-Centered Design (UCD) Process</h3><p>UCD is an iterative design process in which designers focus on the users and their needs in each phase of the design process.</p><ol><li><strong>Empathize:</strong> Learn about your users through research and interviews.</li><li><strong>Define:</strong> Identify the core problems and user pain points.</li><li><strong>Ideate:</strong> Brainstorm out-of-the-box solutions.</li><li><strong>Prototype:</strong> Create low and high-fidelity wireframes in tools like Figma.</li><li><strong>Test:</strong> Validate your designs with real users.</li></ol><h4>Wireframing vs Mockup vs Prototype</h4><ul><li><strong>Wireframe:</strong> A low-fidelity structural blueprint.</li><li><strong>Mockup:</strong> A high-fidelity static visual representation covering color, typography, and assets.</li><li><strong>Prototype:</strong> An interactive mockup demonstrating user flows and transitions.</li></ul>' },
      { week: 2, topic: 'Wireframing in Figma' },
      { week: 3, topic: 'Color Theory & Typography' },
      { week: 4, topic: 'Building Design Systems' },
      { week: 5, topic: 'Interactive Prototyping' },
      { week: 6, topic: 'Final Project: Mobile App Redesign' },
    ],
  },
  {
    id: 4,
    title: 'Node.js & Backend Architecture',
    instructor: 'David Mensah',
    category: 'Backend',
    level: 'Intermediate',
    videoId: 'Oe421EPjeEQ', /* Node.js and Express.js - Full Course - FreeCodeCamp */
    duration: '38h 45m',
    rating: 4.8,
    students: 9800,
    price: 85,
    image: '🟢',
    color: '#68a063',
    progress: 0,
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    description: 'Build scalable, production-ready backend services with Node.js. Covers RESTful API design, authentication, database integration with PostgreSQL, and deployment strategies.',
    syllabus: [
      { week: 1, topic: 'Building RESTful APIs with Express', notes: '<h3>Introduction to Express.js</h3><p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p><h4>REST Architecture Principles</h4><ul><li><strong>Statelessness:</strong> Each request from client to server must contain all info needed to understand the request.</li><li><strong>Client-Server:</strong> Clear separation of concerns between UI and data storage.</li><li><strong>Uniform Interface:</strong> Standardizing communication using HTTP verbs (GET, POST, PUT, DELETE).</li></ul><h4>Basic Express Route</h4><pre><code>const express = require("express");\nconst app = express();\n\n// Middleware to parse JSON\napp.use(express.json());\n\napp.get("/api/users", (req, res) =&gt; {\n  res.status(200).json({ success: true, users: [] });\n});\n\napp.listen(3000, () =&gt; console.log("Server running..."));</code></pre>' },
      { week: 2, topic: 'Database Integration (MongoDB)' },
      { week: 3, topic: 'Authentication with JWT' },
      { week: 4, topic: 'Microservices Architecture' },
      { week: 5, topic: 'Performance & Caching' },
      { week: 6, topic: 'Final Project: E-commerce API' },
    ],
  },
  {
    id: 5,
    title: 'Python for Data Science',
    instructor: 'Amira Hassan',
    category: 'Data Science',
    level: 'Beginner',
    videoId: 'LHBE6Q9XlzI', /* Python for Data Science - FreeCodeCamp */
    duration: '44h 00m',
    rating: 4.9,
    students: 34500,
    price: 95,
    image: '🐍',
    color: '#306998',
    progress: 0,
    tags: ['Python', 'Pandas', 'Machine Learning', 'Jupyter'],
    description: 'A complete journey into data science with Python. Learn data manipulation with Pandas, visualization with Matplotlib and Seaborn, and introductory machine learning with Scikit-learn.',
    syllabus: [
      { week: 1, topic: 'Pandas Dataframes & Series', notes: '<h3>Introduction to Pandas</h3><p>Pandas is a fast, powerful, flexible, and easy-to-use open-source data analysis and manipulation tool built on top of the Python programming language.</p><h4>Core Data Structures</h4><ul><li><strong>Series:</strong> A one-dimensional labeled array capable of holding any data type.</li><li><strong>DataFrame:</strong> A two-dimensional, size-mutable, potentially heterogeneous tabular data structure (like an Excel spreadsheet).</li></ul><h4>Loading and Inspecting Data</h4><pre><code>import pandas as pd\n\n# Load CSV data\ndf = pd.read_csv("dataset.csv")\n\n# View first 5 rows\ndf.head()\n\n# Get statistical summary\ndf.describe()</code></pre>' },
      { week: 2, topic: 'Data Cleaning & Preprocessing' },
      { week: 3, topic: 'Statistical Analysis' },
      { week: 4, topic: 'Machine Learning Basics (Scikit-Learn)' },
      { week: 5, topic: 'Deep Learning Intro (PyTorch)' },
      { week: 6, topic: 'Final Project: Sentiment Analysis Model' },
    ],
  },
  {
    id: 6,
    title: 'Cloud Architecture with AWS',
    instructor: 'James OConnor',
    category: 'Cloud',
    level: 'Advanced',
    videoId: 'SOTamWtvDe4', /* AWS Certified Cloud Practitioner Certification Course (Pass the Exam!) */
    duration: '50h 00m',
    rating: 4.7,
    students: 7200,
    price: 110,
    image: '☁️',
    color: '#ff9900',
    progress: 0,
    tags: ['AWS', 'Cloud Computing', 'Docker', 'Kubernetes'],
    description: 'Become an AWS solutions architect. This course covers core AWS services (EC2, S3, Lambda, RDS), infrastructure as code with Terraform, serverless architecture, and exam preparation.',
    syllabus: [
      { week: 1, topic: 'AWS Core Services (EC2, S3, RDS)', notes: '<h3>Introduction to AWS Core Services</h3><p>Amazon Web Services (AWS) provides hundreds of cloud services. Understanding the core compute, storage, and database offerings is critical.</p><h4>1. Compute (EC2)</h4><p>Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity. You can boot servers, configure security and networking, and manage storage.</p><h4>2. Storage (S3)</h4><p>Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Data is stored in "Buckets".</p><h4>3. Databases (RDS)</h4><p>Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database (like PostgreSQL or MySQL) in the cloud.</p><h4>Shared Responsibility Model</h4><p>Security <em>of</em> the cloud is maintained by AWS. Security <em>in</em> the cloud is the responsibility of the customer (you).</p>' },
      { week: 2, topic: 'Networking & VPCs' },
      { week: 3, topic: 'Serverless Computing (Lambda)' },
      { week: 4, topic: 'Container orchestration (EKS/ECS)' },
      { week: 5, topic: 'Infrastructure as Code (Terraform)' },
      { week: 6, topic: 'Final Project: High Availability Architecture' },
    ],
  },
]

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: COURSES,
    enrolledIds: [],
    progressMap: {},
  }),
  getters: {
    getCourseById: (state) => (id) => state.courses.find((c) => c.id === parseInt(id)),
    enrolledCourses: (state) => state.courses.filter((c) => state.enrolledIds.includes(c.id)),
    isEnrolled: (state) => (id) => state.enrolledIds.includes(parseInt(id)),
    getCourseProgress: (state) => (id) => state.progressMap[id] || 0,
  },
  actions: {
    enroll(courseId) {
      const id = parseInt(courseId)
      if (!this.enrolledIds.includes(id)) {
        this.enrolledIds.push(id)
        this.progressMap[id] = 0
      }
    },
    updateProgress(courseId, percent) {
      this.progressMap[parseInt(courseId)] = Math.min(100, Math.max(0, percent))
    },
  },
})
