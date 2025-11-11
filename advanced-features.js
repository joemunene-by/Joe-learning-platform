// ============================================
// ADVANCED FEATURES - Joe's Learning Platform
// ============================================

// Study Timer
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerStartTime = null;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerStartTime = Date.now();
        document.getElementById('startTimerBtn').style.display = 'none';
        document.getElementById('pauseTimerBtn').style.display = 'inline-block';
        
        timerInterval = setInterval(() => {
            timerSeconds++;
            updateTimerDisplay();
            saveTimerData();
        }, 1000);
    }
}

function pauseTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('startTimerBtn').style.display = 'inline-block';
    document.getElementById('pauseTimerBtn').style.display = 'none';
    saveTimerData();
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    document.getElementById('startTimerBtn').style.display = 'inline-block';
    document.getElementById('pauseTimerBtn').style.display = 'none';
    updateTimerDisplay();
    saveTimerData();
}

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function saveTimerData() {
    const today = new Date().toDateString();
    const todayData = JSON.parse(localStorage.getItem('timerData') || '{}');
    
    if (!todayData[today]) {
        todayData[today] = { seconds: 0, date: today };
    }
    
    if (timerRunning) {
        todayData[today].seconds = timerSeconds;
    }
    
    localStorage.setItem('timerData', JSON.stringify(todayData));
    updateTimerStats();
}

function updateTimerStats() {
    const data = JSON.parse(localStorage.getItem('timerData') || '{}');
    const today = new Date().toDateString();
    const todaySeconds = data[today]?.seconds || 0;
    
    // Calculate week total
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    let weekSeconds = 0;
    Object.values(data).forEach(day => {
        const dayDate = new Date(day.date);
        if (dayDate >= weekAgo) {
            weekSeconds += day.seconds || 0;
        }
    });
    
    // Calculate streak
    let streak = 0;
    let checkDate = new Date();
    while (data[checkDate.toDateString()]?.seconds > 0) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
    }
    
    document.getElementById('todayTime').textContent = formatTime(todaySeconds);
    document.getElementById('weekTime').textContent = formatTime(weekSeconds);
    document.getElementById('studyStreak').textContent = streak;
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
}

function openTimer() {
    document.getElementById('timerModal').style.display = 'flex';
    updateTimerStats();
}

function closeTimer() {
    document.getElementById('timerModal').style.display = 'none';
}

// Code Playground
function runCode() {
    const code = document.getElementById('codeEditor').value;
    const language = document.getElementById('languageSelect').value;
    const output = document.getElementById('codeOutput');
    
    try {
        if (language === 'javascript') {
            const result = eval(code);
            output.textContent = result !== undefined ? String(result) : 'Code executed successfully';
        } else if (language === 'python') {
            output.textContent = 'Python execution requires a backend server. For now, use JavaScript in the playground.';
        } else {
            output.textContent = `Code for ${language}:\n\n${code}`;
        }
    } catch (error) {
        output.textContent = `Error: ${error.message}`;
    }
}

function clearPlayground() {
    document.getElementById('codeEditor').value = '';
    document.getElementById('codeOutput').textContent = '';
}

function openPlayground() {
    document.getElementById('playgroundModal').style.display = 'flex';
}

function closePlayground() {
    document.getElementById('playgroundModal').style.display = 'none';
}

// Quiz System
const quizData = {
    'ai-engineering': [
        {
            question: 'What is the primary purpose of AI Engineering?',
            options: ['Building production-ready AI systems', 'Research only', 'Data visualization', 'Web development'],
            correct: 0
        },
        {
            question: 'Which framework is developed by Google?',
            options: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas'],
            correct: 1
        },
        {
            question: 'What does MLOps stand for?',
            options: ['Machine Learning Operations', 'Machine Learning Optimization', 'Model Learning Operations', 'Machine Learning Organization'],
            correct: 0
        },
        {
            question: 'What is the purpose of model versioning?',
            options: ['Track different model versions', 'Increase model speed', 'Reduce model size', 'Change model colors'],
            correct: 0
        },
        {
            question: 'Which is NOT a deep learning framework?',
            options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'JAX'],
            correct: 2
        }
    ],
    'cloud': [
        {
            question: 'What does IaaS stand for?',
            options: ['Infrastructure as a Service', 'Internet as a Service', 'Integration as a Service', 'Information as a Service'],
            correct: 0
        },
        {
            question: 'Which AWS service provides object storage?',
            options: ['EC2', 'S3', 'RDS', 'Lambda'],
            correct: 1
        },
        {
            question: 'What is auto-scaling?',
            options: ['Automatically adjust resources based on demand', 'Scale manually', 'Fixed resources', 'No scaling'],
            correct: 0
        },
        {
            question: 'Which is a serverless computing service?',
            options: ['EC2', 'S3', 'Lambda', 'RDS'],
            correct: 2
        }
    ],
    'ml-data-science': [
        {
            question: 'What is the primary tool for data manipulation in Python?',
            options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
            correct: 1
        },
        {
            question: 'What does EDA stand for?',
            options: ['Exploratory Data Analysis', 'External Data Access', 'Extended Data Array', 'Exact Data Analysis'],
            correct: 0
        },
        {
            question: 'Which algorithm is used for classification?',
            options: ['K-Means', 'Linear Regression', 'Logistic Regression', 'PCA'],
            correct: 2
        }
    ],
    'blockchain': [
        {
            question: 'What is a smart contract?',
            options: ['Self-executing contract with code', 'Paper contract', 'Email contract', 'Phone contract'],
            correct: 0
        },
        {
            question: 'Which language is used for Ethereum smart contracts?',
            options: ['JavaScript', 'Python', 'Solidity', 'Java'],
            correct: 2
        }
    ],
    'web': [
        {
            question: 'What does REST stand for?',
            options: ['Representational State Transfer', 'Remote State Transfer', 'Resource State Transfer', 'Rapid State Transfer'],
            correct: 0
        },
        {
            question: 'Which is a frontend framework?',
            options: ['Express', 'React', 'Django', 'Flask'],
            correct: 1
        }
    ],
    'mobile': [
        {
            question: 'Which is a cross-platform framework?',
            options: ['Swift', 'Kotlin', 'React Native', 'Objective-C'],
            correct: 2
        },
        {
            question: 'What is used for iOS development?',
            options: ['Android Studio', 'Xcode', 'VS Code', 'Eclipse'],
            correct: 1
        },
        {
            question: 'Which state management solution is popular in React Native?',
            options: ['Redux', 'MobX', 'Context API', 'All of the above'],
            correct: 3
        }
    ],
    'database': [
        {
            question: 'What does ACID stand for?',
            options: ['Atomicity, Consistency, Isolation, Durability', 'Access, Control, Integrity, Data', 'Application, Code, Interface, Design', 'Analysis, Creation, Implementation, Deployment'],
            correct: 0
        },
        {
            question: 'Which is a NoSQL database?',
            options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
            correct: 2
        }
    ],
    'security': [
        {
            question: 'What is XSS?',
            options: ['Cross-Site Scripting', 'XML Security Standard', 'Extended Security System', 'X-Server Security'],
            correct: 0
        },
        {
            question: 'Which is NOT an OWASP Top 10 vulnerability?',
            options: ['Injection', 'Broken Authentication', 'Slow Performance', 'Sensitive Data Exposure'],
            correct: 2
        }
    ],
    'analytics': [
        {
            question: 'What does ETL stand for?',
            options: ['Extract, Transform, Load', 'Extract, Transfer, Link', 'External, Transform, Load', 'Extract, Test, Load'],
            correct: 0
        },
        {
            question: 'Which tool is used for data visualization?',
            options: ['Tableau', 'Docker', 'Kubernetes', 'Jenkins'],
            correct: 0
        }
    ],
    'api': [
        {
            question: 'What does REST stand for?',
            options: ['Representational State Transfer', 'Remote State Transfer', 'Resource State Transfer', 'Rapid State Transfer'],
            correct: 0
        },
        {
            question: 'Which HTTP method is used for creating resources?',
            options: ['GET', 'POST', 'PUT', 'DELETE'],
            correct: 1
        }
    ],
    'devops': [
        {
            question: 'What does CI/CD stand for?',
            options: ['Continuous Integration/Continuous Deployment', 'Code Integration/Code Deployment', 'Central Integration/Central Deployment', 'Complete Integration/Complete Deployment'],
            correct: 0
        },
        {
            question: 'Which is a container orchestration tool?',
            options: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
            correct: 1
        }
    ],
    'ui-ux': [
        {
            question: 'What does UX stand for?',
            options: ['User Experience', 'User Extension', 'User Exchange', 'User Execution'],
            correct: 0
        },
        {
            question: 'Which is a popular design tool?',
            options: ['Figma', 'Docker', 'Kubernetes', 'Git'],
            correct: 0
        }
    ],
    'testing-qa': [
        {
            question: 'What does TDD stand for?',
            options: ['Test-Driven Development', 'Test-Data Development', 'Test-Design Development', 'Test-Documentation Development'],
            correct: 0
        },
        {
            question: 'Which is an E2E testing tool?',
            options: ['Jest', 'Cypress', 'JUnit', 'pytest'],
            correct: 1
        }
    ]
};

function startQuiz(courseKey) {
    const quiz = quizData[courseKey] || [];
    if (quiz.length === 0) {
        alert('Quiz not available for this course yet!');
        return;
    }
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        const question = quiz[currentQuestion];
        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = `
            <h2>Quiz: ${courseKey}</h2>
            <div class="quiz-progress">
                Question ${currentQuestion + 1} of ${quiz.length}
            </div>
            <div class="quiz-question">
                <h3>${question.question}</h3>
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" onclick="selectAnswer(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="quiz-score" style="display: none;">
                <h2>Quiz Complete!</h2>
                <p>Your Score: ${score}/${quiz.length}</p>
                <button class="btn btn-primary" onclick="closeQuiz()">Close</button>
            </div>
        `;
        document.getElementById('quizModal').style.display = 'flex';
    }
    
    window.selectAnswer = function(selectedIndex) {
        const question = quiz[currentQuestion];
        if (selectedIndex === question.correct) {
            score++;
        }
        
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            showQuestion();
        } else {
            showResults();
        }
    };
    
    function showResults() {
        const quizContent = document.getElementById('quizContent');
        quizContent.innerHTML = `
            <h2>Quiz Results</h2>
            <div class="quiz-results">
                <div class="result-score">
                    <h1>${score}/${quiz.length}</h1>
                    <p>${Math.round((score / quiz.length) * 100)}%</p>
                </div>
                <p>${score >= quiz.length * 0.7 ? 'Great job! You passed!' : 'Keep studying and try again!'}</p>
                <button class="btn btn-primary" onclick="closeQuiz()">Close</button>
                ${score >= quiz.length * 0.7 ? `<button class="btn btn-secondary" onclick="generateCertificate('${courseKey}')">Get Certificate</button>` : ''}
            </div>
        `;
    }
    
    showQuestion();
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}

// Certificate Generation
function generateCertificate(courseTitle) {
    const printWindow = window.open('', '_blank');
    const date = new Date().toLocaleDateString();
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Certificate - ${courseTitle}</title>
            <style>
                @page { size: landscape; margin: 0; }
                body {
                    font-family: 'Times New Roman', serif;
                    margin: 0;
                    padding: 40px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .certificate {
                    background: white;
                    padding: 60px;
                    border: 20px solid #d4af37;
                    box-shadow: 0 0 30px rgba(0,0,0,0.3);
                    text-align: center;
                    max-width: 900px;
                }
                h1 { color: #333; font-size: 48px; margin: 20px 0; }
                h2 { color: #667eea; font-size: 32px; margin: 30px 0; }
                p { font-size: 18px; color: #666; margin: 15px 0; }
                .signature { margin-top: 60px; }
                .date { margin-top: 40px; }
            </style>
        </head>
        <body>
            <div class="certificate">
                <h1>CERTIFICATE OF COMPLETION</h1>
                <p>This is to certify that</p>
                <h2>Joe Munene</h2>
                <p>has successfully completed the course</p>
                <h2>${courseTitle}</h2>
                <p>on ${date}</p>
                <div class="signature">
                    <p>Joe's Learning Platform</p>
                </div>
                <div class="date">
                    <p>Date: ${date}</p>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

// Analytics Dashboard
function updateAnalytics() {
    // Calculate completed courses
    const allServices = ['cloud', 'mobile', 'web', 'database', 'security', 'analytics', 'api', 'devops', 'ai-engineering', 'ml-data-science', 'blockchain', 'ui-ux', 'testing-qa'];
    let completed = 0;
    allServices.forEach(service => {
        const serviceData = serviceDetails[service];
        if (serviceData) {
            const progress = getProgress(serviceData.title);
            if (progress >= 100) completed++;
        }
    });
    
    // Calculate total study time
    const timerData = JSON.parse(localStorage.getItem('timerData') || '{}');
    let totalSeconds = 0;
    Object.values(timerData).forEach(day => {
        totalSeconds += day.seconds || 0;
    });
    
    // Get achievements count
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    
    // Get certificates count
    const certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    
    document.getElementById('coursesCompleted').textContent = completed;
    document.getElementById('totalStudyTime').textContent = formatTime(totalSeconds);
    document.getElementById('achievementsCount').textContent = achievements.length;
    document.getElementById('certificatesCount').textContent = certificates.length;
    
    // Update profile stats
    document.getElementById('profileStudyTime').textContent = formatTime(totalSeconds);
    document.getElementById('profileAchievements').textContent = achievements.length;
    
    // Update achievements display
    displayAchievements();
    
    // Update progress bars
    displayProgressBars();
}

function displayAchievements() {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    const grid = document.getElementById('achievementsGrid');
    
    const allAchievements = [
        { id: 'first-course', name: 'First Steps', icon: 'fa-baby', desc: 'Complete your first course' },
        { id: 'week-warrior', name: 'Week Warrior', icon: 'fa-calendar-week', desc: 'Study for 7 days straight' },
        { id: 'code-master', name: 'Code Master', icon: 'fa-code', desc: 'Use the code playground 10 times' },
        { id: 'quiz-champion', name: 'Quiz Champion', icon: 'fa-trophy', desc: 'Score 100% on any quiz' },
        { id: 'night-owl', name: 'Night Owl', icon: 'fa-moon', desc: 'Study after midnight' },
        { id: 'early-bird', name: 'Early Bird', icon: 'fa-sun', desc: 'Study before 6 AM' },
        { id: 'marathon', name: 'Marathon', icon: 'fa-running', desc: 'Study for 5 hours in one day' },
        { id: 'perfectionist', name: 'Perfectionist', icon: 'fa-star', desc: 'Complete all courses with 100%' }
    ];
    
    grid.innerHTML = allAchievements.map(achievement => {
        const unlocked = achievements.includes(achievement.id);
        return `
            <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
                <i class="fas ${achievement.icon}"></i>
                <h4>${achievement.name}</h4>
                <p>${achievement.desc}</p>
                ${unlocked ? '<span class="badge">Unlocked</span>' : '<span class="badge locked-badge">Locked</span>'}
            </div>
        `;
    }).join('');
}

function displayProgressBars() {
    const services = [
        { key: 'cloud', name: 'Cloud Infrastructure' },
        { key: 'mobile', name: 'Mobile Development' },
        { key: 'web', name: 'Web Development' },
        { key: 'database', name: 'Database Solutions' },
        { key: 'security', name: 'Security Services' },
        { key: 'analytics', name: 'Analytics & Data' },
        { key: 'api', name: 'API Development' },
        { key: 'devops', name: 'DevOps & Automation' },
        { key: 'ai-engineering', name: 'AI Engineering' },
        { key: 'ml-data-science', name: 'ML & Data Science' },
        { key: 'blockchain', name: 'Blockchain Development' },
        { key: 'ui-ux', name: 'UI/UX Design' },
        { key: 'testing-qa', name: 'Testing & QA' }
    ];
    
    const container = document.getElementById('progressBarsContainer');
    container.innerHTML = services.map(service => {
        const serviceData = serviceDetails[service.key];
        const progress = serviceData ? getProgress(serviceData.title) : 0;
        return `
            <div class="progress-item">
                <div class="progress-header">
                    <span>${service.name}</span>
                    <span>${progress}%</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Resources
function openResource(type) {
    const resources = {
        'code-samples': 'Download code samples and examples',
        'cheat-sheets': 'Download cheat sheets',
        'project-templates': 'Download project templates',
        'documentation': 'Download documentation'
    };
    
    alert(`${resources[type] || 'Resource'} - This feature will download resources. For now, this is a placeholder.`);
}

// Social Sharing
function shareProfile() {
    const text = `Check out my learning progress on Joe's Learning Platform!`;
    const url = window.location.href;
    
    if (navigator.share) {
        navigator.share({
            title: "Joe's Learning Platform - My Progress",
            text: text,
            url: url
        });
    } else {
        navigator.clipboard.writeText(`${text} ${url}`).then(() => {
            alert('Profile link copied to clipboard!');
        });
    }
}

// Notes Search
function searchNotes(searchTerm) {
    const notesContent = document.querySelectorAll('.notes-content');
    notesContent.forEach(notes => {
        const text = notes.textContent.toLowerCase();
        if (text.includes(searchTerm.toLowerCase())) {
            notes.style.display = 'block';
            // Highlight search term (simplified)
            notes.innerHTML = notes.innerHTML.replace(
                new RegExp(searchTerm, 'gi'),
                match => `<mark>${match}</mark>`
            );
        }
    });
}

// Initialize PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

// Initialize all features on page load
document.addEventListener('DOMContentLoaded', () => {
    // Timer button
    const timerBtn = document.getElementById('timerBtn');
    if (timerBtn) {
        timerBtn.addEventListener('click', openTimer);
    }
    
    // Playground button
    const playgroundBtn = document.getElementById('playgroundBtn');
    if (playgroundBtn) {
        playgroundBtn.addEventListener('click', openPlayground);
    }
    
    // Update analytics
    updateAnalytics();
    
    // Check for achievements
    checkAchievements();
});

// Achievement System
function checkAchievements() {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    
    // Check first course
    const allServices = ['cloud', 'mobile', 'web', 'database', 'security', 'analytics', 'api', 'devops', 'ai-engineering', 'ml-data-science', 'blockchain', 'ui-ux', 'testing-qa'];
    let completedCount = 0;
    allServices.forEach(service => {
        const serviceData = serviceDetails[service];
        if (serviceData) {
            const progress = getProgress(serviceData.title);
            if (progress >= 100) completedCount++;
        }
    });
    
    if (completedCount >= 1 && !achievements.includes('first-course')) {
        unlockAchievement('first-course', 'First Steps - You completed your first course!');
    }
    
    if (completedCount === allServices.length && !achievements.includes('perfectionist')) {
        unlockAchievement('perfectionist', 'Perfectionist - You completed all courses!');
    }
}

function unlockAchievement(id, message) {
    const achievements = JSON.parse(localStorage.getItem('achievements') || '[]');
    if (!achievements.includes(id)) {
        achievements.push(id);
        localStorage.setItem('achievements', JSON.stringify(achievements));
        showAchievementNotification(message);
        updateAnalytics();
    }
}

function showAchievementNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <i class="fas fa-trophy"></i>
        <div>
            <h4>Achievement Unlocked!</h4>
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

