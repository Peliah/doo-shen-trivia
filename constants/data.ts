import { AvatarOption, Category, DifficultyLevel, TechInterest } from '@/types';

// Tech Interests Configuration
export const TECH_INTERESTS: Record<TechInterest, { name: string; description: string; icon: string }> = {
    web: { name: 'Web Development', description: 'HTML, CSS, JavaScript, React, Vue', icon: '🌐' },
    mobile: { name: 'Mobile Development', description: 'React Native, Flutter, iOS, Android', icon: '📱' },
    ai: { name: 'AI & Machine Learning', description: 'Python, TensorFlow, PyTorch, ML', icon: '🤖' },
    cybersecurity: { name: 'Cybersecurity', description: 'Security, Penetration Testing, Ethical Hacking', icon: '🔒' },
    'data-science': { name: 'Data Science', description: 'Python, R, SQL, Analytics, Visualization', icon: '📊' },
    'cloud-devops': { name: 'Cloud & DevOps', description: 'AWS, Docker, Kubernetes, CI/CD', icon: '☁️' },
    javascript: { name: 'JavaScript', description: 'ES6+, Node.js, TypeScript, Frameworks', icon: '⚡' },
    python: { name: 'Python', description: 'Django, Flask, Data Science, Automation', icon: '🐍' },
    react: { name: 'React', description: 'Components, Hooks, State Management, Next.js', icon: '⚛️' },
    nodejs: { name: 'Node.js', description: 'Backend, APIs, Express, Database Integration', icon: '🟢' },
};

// Categories Configuration
export const CATEGORIES: Category[] = [
    {
        id: 'javascript',
        name: 'JavaScript',
        description: 'ES6+, Async/Await, Closures, Prototypes',
        icon: '⚡',
        color: '#F7DF1E',
        techInterest: 'javascript',
    },
    {
        id: 'react',
        name: 'React',
        description: 'Components, Hooks, State Management',
        icon: '⚛️',
        color: '#61DAFB',
        techInterest: 'react',
    },
    {
        id: 'python',
        name: 'Python',
        description: 'Syntax, Libraries, OOP, Data Structures',
        icon: '🐍',
        color: '#3776AB',
        techInterest: 'python',
    },
    {
        id: 'web-development',
        name: 'Web Development',
        description: 'HTML, CSS, DOM, Browser APIs',
        icon: '🌐',
        color: '#FF6B6B',
        techInterest: 'web',
    },
    {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        description: 'Algorithms, Neural Networks, Data Processing',
        icon: '🤖',
        color: '#4ECDC4',
        techInterest: 'ai',
    },
    {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        description: 'Security Principles, Vulnerabilities, Best Practices',
        icon: '🔒',
        color: '#45B7D1',
        techInterest: 'cybersecurity',
    },
    {
        id: 'data-science',
        name: 'Data Science',
        description: 'Statistics, Visualization, Analysis',
        icon: '📊',
        color: '#96CEB4',
        techInterest: 'data-science',
    },
    {
        id: 'cloud-devops',
        name: 'Cloud & DevOps',
        description: 'AWS, Docker, CI/CD, Infrastructure',
        icon: '☁️',
        color: '#FFEAA7',
        techInterest: 'cloud-devops',
    },
];

// Difficulty Levels
export const DIFFICULTY_LEVELS: DifficultyLevel[] = [
    {
        id: 'easy',
        name: 'Easy',
        description: 'Basic concepts and fundamentals',
        color: '#4CAF50',
        estimatedTime: '2-3 minutes',
    },
    {
        id: 'medium',
        name: 'Medium',
        description: 'Intermediate concepts and practical applications',
        color: '#FF9800',
        estimatedTime: '3-4 minutes',
    },
    {
        id: 'hard',
        name: 'Hard',
        description: 'Advanced concepts and complex scenarios',
        color: '#F44336',
        estimatedTime: '4-5 minutes',
    },
];

// Avatar Options
export const AVATAR_OPTIONS: AvatarOption[] = [
    { id: 'developer', name: 'Developer', emoji: '👨‍💻', color: '#4ECDC4' },
    { id: 'hacker', name: 'Hacker', emoji: '👨‍💻', color: '#45B7D1' },
    { id: 'designer', name: 'Designer', emoji: '🎨', color: '#96CEB4' },
    { id: 'scientist', name: 'Data Scientist', emoji: '🔬', color: '#FFEAA7' },
    { id: 'robot', name: 'AI Enthusiast', emoji: '🤖', color: '#DDA0DD' },
    { id: 'ninja', name: 'Code Ninja', emoji: '🥷', color: '#FF6B6B' },
    { id: 'wizard', name: 'Tech Wizard', emoji: '🧙‍♂️', color: '#98D8C8' },
    { id: 'astronaut', name: 'Space Explorer', emoji: '🚀', color: '#F7DC6F' },
];

// Sample Questions (This would typically come from an API or database)
export const SAMPLE_QUESTIONS = [
    {
        id: 'js-1',
        category: 'javascript',
        difficulty: 'easy' as const,
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: [
            'var name = "John";',
            'variable name = "John";',
            'v name = "John";',
            'declare name = "John";',
        ],
        correctAnswer: 'var name = "John";',
        explanation: 'In JavaScript, variables are declared using var, let, or const keywords.',
        tags: ['variables', 'declaration'],
    },
    {
        id: 'js-2',
        category: 'javascript',
        difficulty: 'medium' as const,
        question: 'What will be the output of this code?\n\nconst arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);',
        codeSnippet: 'const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);',
        options: ['3', '4', '5', 'undefined'],
        correctAnswer: '4',
        explanation: 'The push() method adds an element to the end of the array, so the length becomes 4.',
        tags: ['arrays', 'methods'],
    },
    {
        id: 'react-1',
        category: 'react',
        difficulty: 'easy' as const,
        question: 'What is JSX in React?',
        options: [
            'A JavaScript extension that allows HTML-like syntax',
            'A CSS preprocessor',
            'A build tool',
            'A testing framework',
        ],
        correctAnswer: 'A JavaScript extension that allows HTML-like syntax',
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
        tags: ['jsx', 'syntax'],
    },
];

// Achievement Definitions
export const ACHIEVEMENT_DEFINITIONS = {
    first_quiz: {
        name: 'First Steps',
        description: 'Complete your first quiz',
        icon: '🎯',
    },
    perfect_score: {
        name: 'Perfect Score',
        description: 'Get 100% on any quiz',
        icon: '💯',
    },
    speed_demon: {
        name: 'Speed Demon',
        description: 'Complete a quiz in under 2 minutes',
        icon: '⚡',
    },
    category_master: {
        name: 'Category Master',
        description: 'Get 90%+ in any category',
        icon: '🏆',
    },
    streak: {
        name: 'Streak Master',
        description: 'Complete 5 quizzes in a row',
        icon: '🔥',
    },
    social: {
        name: 'Social Butterfly',
        description: 'Share your results 3 times',
        icon: '📢',
    },
};

// Performance Messages
export const PERFORMANCE_MESSAGES = {
    excellent: [
        'Outstanding! You\'re a tech genius! 🧠',
        'Incredible performance! Keep it up! 🚀',
        'You\'re absolutely crushing it! 💪',
    ],
    good: [
        'Great job! You\'re doing well! 👍',
        'Nice work! Keep learning! 📚',
        'Solid performance! Well done! 🎯',
    ],
    fair: [
        'Good effort! Room for improvement! 📈',
        'Not bad! Keep practicing! 💪',
        'You\'re getting there! Don\'t give up! 🌟',
    ],
    needs_improvement: [
        'Keep studying! You\'ll get better! 📖',
        'Don\'t worry, practice makes perfect! 🎯',
        'Every expert was once a beginner! 🌱',
    ],
};

// Utility Functions
export const getCategoryById = (id: string): Category | undefined => {
    return CATEGORIES.find(category => category.id === id);
};

export const getTechInterestById = (id: TechInterest) => {
    return TECH_INTERESTS[id];
};

export const getDifficultyById = (id: 'easy' | 'medium' | 'hard'): DifficultyLevel | undefined => {
    return DIFFICULTY_LEVELS.find(difficulty => difficulty.id === id);
};

export const getRandomPerformanceMessage = (level: 'excellent' | 'good' | 'fair' | 'needs_improvement'): string => {
    const messages = PERFORMANCE_MESSAGES[level];
    return messages[Math.floor(Math.random() * messages.length)];
};
