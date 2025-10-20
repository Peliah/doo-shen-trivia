import { AvatarOption, Category, DifficultyLevel, Question, TechInterest } from '@/types';

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

// Sample Questions Database (This would typically come from an API or database)
export const QUESTIONS_DATABASE: Record<string, Question> = {
    'js-1': {
        questionId: 'js-1',
        category: 'javascript',
        difficulty: 'easy',
        type: 'multiple_choice',
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: [
            'var name = "John";',
            'variable name = "John";',
            'v name = "John";',
            'declare name = "John";',
        ],
        correctAnswer: 0,
        explanation: 'In JavaScript, variables are declared using var, let, or const keywords.',
        reference: 'MDN JavaScript Variables',
        tags: ['variables', 'declaration'],
    },
    'js-2': {
        questionId: 'js-2',
        category: 'javascript',
        difficulty: 'medium',
        type: 'code_output',
        question: 'What will be the output of this code?',
        codeSnippet: 'const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);',
        options: ['3', '4', '5', 'undefined'],
        correctAnswer: 1,
        explanation: 'The push() method adds an element to the end of the array, so the length becomes 4.',
        reference: 'MDN Array.push()',
        tags: ['arrays', 'methods'],
    },
    'js-3': {
        questionId: 'js-3',
        category: 'javascript',
        difficulty: 'hard',
        type: 'code_output',
        question: 'What is the output of this closure example?',
        codeSnippet: 'function outer() {\n  let x = 10;\n  return function inner() {\n    return x++;\n  };\n}\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());',
        options: ['10, 11', '10, 10', '11, 12', 'undefined, undefined'],
        correctAnswer: 0,
        explanation: 'The inner function has access to the outer function\'s variable x, and the post-increment operator returns the value before incrementing.',
        reference: 'MDN Closures',
        tags: ['closures', 'scope'],
    },
    'react-1': {
        questionId: 'react-1',
        category: 'react',
        difficulty: 'easy',
        type: 'multiple_choice',
        question: 'What is JSX in React?',
        options: [
            'A JavaScript extension that allows HTML-like syntax',
            'A CSS preprocessor',
            'A build tool',
            'A testing framework',
        ],
        correctAnswer: 0,
        explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.',
        reference: 'React JSX Documentation',
        tags: ['jsx', 'syntax'],
    },
    'react-2': {
        questionId: 'react-2',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the correct way to update state in a functional component?',
        options: [
            'this.setState({ count: 1 })',
            'setState({ count: 1 })',
            'setCount(1)',
            'state.count = 1',
        ],
        correctAnswer: 2,
        explanation: 'In functional components, you use the setter function returned by useState hook to update state.',
        reference: 'React useState Hook',
        tags: ['hooks', 'state'],
    },
    'python-1': {
        questionId: 'python-1',
        category: 'python',
        difficulty: 'easy',
        type: 'multiple_choice',
        question: 'What is the correct way to create a list in Python?',
        options: [
            'list = [1, 2, 3]',
            'list = (1, 2, 3)',
            'list = {1, 2, 3}',
            'list = "1, 2, 3"',
        ],
        correctAnswer: 0,
        explanation: 'Lists in Python are created using square brackets [] and can contain any data type.',
        reference: 'Python Lists Documentation',
        tags: ['lists', 'data-structures'],
    },
    'web-1': {
        questionId: 'web-1',
        category: 'web-development',
        difficulty: 'easy',
        type: 'multiple_choice',
        question: 'What does HTML stand for?',
        options: [
            'HyperText Markup Language',
            'High Tech Modern Language',
            'Home Tool Markup Language',
            'Hyperlink and Text Markup Language',
        ],
        correctAnswer: 0,
        explanation: 'HTML stands for HyperText Markup Language, which is the standard markup language for creating web pages.',
        reference: 'MDN HTML Introduction',
        tags: ['html', 'basics'],
    },
    'js-4': {
        questionId: 'js-4',
        category: 'javascript',
        difficulty: 'medium',
        type: 'true_false',
        question: 'JavaScript is a statically typed language.',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'JavaScript is dynamically typed, meaning variable types are determined at runtime.',
        reference: 'MDN JavaScript Data Types',
        tags: ['typing', 'basics'],
    },
    'react-3': {
        questionId: 'react-3',
        category: 'react',
        difficulty: 'hard',
        type: 'code_output',
        question: 'What will be logged to the console?',
        codeSnippet: 'const [count, setCount] = useState(0);\nuseEffect(() => {\n  setCount(count + 1);\n}, [count]);\nconsole.log(count);',
        options: ['0', '1', 'Infinite loop', 'Error'],
        correctAnswer: 2,
        explanation: 'This creates an infinite loop because useEffect depends on count, but also updates count inside the effect.',
        reference: 'React useEffect Hook',
        tags: ['hooks', 'effects', 'infinite-loop'],
    },
};

// Question Selection Utilities
export const getQuestionsByCategory = (category: string, difficulty?: 'easy' | 'medium' | 'hard'): Question[] => {
    const questions = Object.values(QUESTIONS_DATABASE).filter(q => q.category === category);
    return difficulty ? questions.filter(q => q.difficulty === difficulty) : questions;
};

export const getRandomQuestions = (category: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): string[] => {
    const questions = getQuestionsByCategory(category, difficulty);
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(q => q.questionId);
};

export const getQuestionById = (id: string): Question | undefined => {
    return QUESTIONS_DATABASE[id];
};

// Question Type Utilities
export const getQuestionTypeIcon = (type: Question['type']): string => {
    switch (type) {
        case 'multiple_choice': return '📝';
        case 'true_false': return '✅';
        case 'code_output': return '💻';
        case 'fill_blank': return '✏️';
        default: return '❓';
    }
};

export const getQuestionTypeLabel = (type: Question['type']): string => {
    switch (type) {
        case 'multiple_choice': return 'Multiple Choice';
        case 'true_false': return 'True/False';
        case 'code_output': return 'Code Output';
        case 'fill_blank': return 'Fill in the Blank';
        default: return 'Unknown';
    }
};

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
