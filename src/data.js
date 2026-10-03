// All portfolio content lives here (taken from the resume). Edit this file to update the site.
export const profile = {
  name: 'Sathishkumar D',
  role: 'Python Full Stack Developer',
  location: 'Chennai',
  email: 'sathish.code27@gmail.com',
  phone: '+91 6381838665',
  github: 'https://github.com/satthsss',
  linkedin: 'https://linkedin.com/in/satthsss',
  intro:
    'I build responsive, scalable web applications with Python, Django, React.js, JavaScript, REST APIs and MySQL.',
  about: [
    'I am a Python Full Stack Developer from Chennai with a Bachelor of Engineering in Computer Science. I work across the stack: backend logic and REST APIs in Django, databases in MySQL, and responsive interfaces in React.js, HTML5 and CSS3.',
    'Through two internships I have built web applications, integrated APIs, handled database operations, fixed bugs and worked with teams to turn requirements into maintainable solutions.',
    'I am looking for a software development role where I can contribute to a team and deliver reliable web solutions.',
  ],
}

export const skills = [
  { title: 'Languages', items: ['Python', 'Async Python', 'JavaScript (ES6+)', 'TypeScript', 'Bash/Shell Scripting', 'SQL'] },
  { title: 'Frontend', items: ['React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind', 'Responsive Web Design', 'Component-Driven UI'] },
  { title: 'Backend', items: ['Django', 'Django REST Framework', 'REST APIs', 'FastAPI', 'Flask', 'Authentication', 'Authorization'] },
  { title: 'Database', items: ['MySQL', 'PostgreSQL', 'SQLite', 'Django ORM', 'Data Modeling', 'Query Optimization'] },
  { title: 'Tools & Platforms', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Postman', 'MySQL Workbench'] },
  { title: 'Practices', items: ['OAuth 2.0', 'JWT Authentication', 'RBAC', 'Secure Coding', 'Code Reviews', 'Debugging', 'System Design'] },
]

export const education = {
  school: 'Dhanalakshmi Srinivasan College of Engineering and Technology',
  degree: 'Bachelor of Engineering in Computer Science',
  period: 'Aug 2022 – June 2026',
  cgpa: '8.1 / 10',
  certifications: [
    { name: 'AI Foundations Associate', issuer: 'Oracle Cloud Infrastructure', note: 'Foundations of AI, ML, and generative AI on OCI.' },
    { name: 'Front End Web Developer', issuer: 'Infosys Springboard', note: 'Core front-end development with HTML, CSS, and JavaScript.' },
    { name: 'Python Essentials 1', issuer: 'Cisco Networking Academy', note: 'Python programming fundamentals and problem-solving.' },
    { name: 'Full Stack Development', issuer: 'Why Global Services', note: 'Core Full Stack development with REST APIs and Responsive Web Design' },
  ],
}

export const experience = [
  {
    company: 'Besant Technologies',
    role: 'Python Full Stack Developer Intern',
    period: 'Mar 2026 – Aug 2026',
    points: [
      'Developed responsive web applications using Python, Django, React.js, JavaScript, HTML5, CSS3, and MySQL.',
      'Built and integrated REST APIs, implemented database operations, resolved bugs, and contributed to application development.',
      'Collaborated with the development team to translate requirements into functional and maintainable web solutions.',
    ],
    tech: ['Python', 'Django', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
  },
  {
    company: 'WHY Global Services',
    role: 'Frontend Developer Intern',
    period: 'June 2025 – Sept 2025',
    points: [
      'Developed responsive and user-friendly web interfaces using HTML5, CSS3, and JavaScript.',
      'Contributed to real-time website development and UI design, building responsive layouts and improving user experience while collaborating with the team.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
]

export const projects = [
  {
    name: 'Cab Booking System (Rapido Clone)',
    summary: 'A full-stack cab/bike booking web application with separate flows for customers and drivers.',
    features: [
      'OTP-based authentication and role-based authorization for Customers and Drivers',
      'End-to-end ride lifecycle tracking: requested → accepted → started → completed',
      'REST-style URL routing and a Django admin panel to manage users and rides',
    ],
    tech: ['Python', 'Django', 'Django Authentication', 'MySQL', 'HTML5', 'CSS3', 'REST API', 'Git', 'GitHub'],
    github: 'https://github.com/satthsss/Cab-booking-django',
    initials: 'CB',
    slug: 'cab-booking',
    meta: 'Full-stack web application',
    title: ['Cab Booking', 'System'],
  },
  {
    name: 'Maternal Health Tracker',
    summary: 'An IoT-based maternal healthcare monitoring system built with ESP32 and React Native.',
    features: [
      'Real-time health tracking, fall detection, and emergency alerts',
      'REST API integration, Bluetooth communication, and MySQL database connectivity',
    ],
    tech: ['React Native', 'Spring Boot', 'MySQL', 'ESP32', 'Arduino IDE', 'REST API', 'BLE', 'IoT'],
    github: 'https://github.com/satthsss/Maternal-Health-Tracker',
    initials: 'MH',
    slug: 'maternal-health',
    meta: 'IoT healthcare system',
    title: ['Maternal Health', 'Tracker'],
  },
  {
    name: 'Voice Activated Virtual Assistant',
    summary: 'An AI-powered virtual assistant built with Python and NLP.',
    features: [
      'Speech recognition, text-to-speech, web search, and application control',
      'Real-time voice command processing for task automation',
    ],
    tech: ['Python', 'NLP', 'Speech Recognition', 'Git', 'GitHub'],
    github: 'https://github.com/satthsss/Voice-Activated-Virtual-Assistant',
    initials: 'VA',
    slug: 'voice-assistant',
    meta: 'AI virtual assistant',
    title: ['Voice Activated', 'Virtual Assistant'],
  },
]
