import { Question } from "@/types";

export const WEB_QUESTIONS: Question[] = [
    // ==================== WEB DEVELOPMENT (15) ====================
    {
        questionId: 'web-1',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does HTML stand for?',
        options: [
            'Hyper Text Markup Language',
            'High Tech Modern Language',
            'Hyper Transfer Markup Language',
            'Home Tool Markup Language'
        ],
        correctAnswer: 0,
        explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.',
        reference: 'W3Schools HTML Tutorial',
        tags: ['html', 'basics'],
    },
    {
        questionId: 'web-2',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which CSS property is used to change the text color?',
        options: [
            'color',
            'text-color',
            'font-color',
            'text-style'
        ],
        correctAnswer: 0,
        explanation: 'The "color" property in CSS is used to set the color of text.',
        reference: 'MDN CSS color',
        tags: ['css', 'styling'],
    },
    {
        questionId: 'web-3',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the HTML5 <canvas> element?',
        options: [
            'To draw graphics via JavaScript',
            'To create form inputs',
            'To display database content',
            'To play audio files'
        ],
        correctAnswer: 0,
        explanation: 'The <canvas> element is used to draw graphics on the fly via JavaScript, typically for games, charts, and other visualizations.',
        reference: 'MDN Canvas API',
        tags: ['html5', 'canvas', 'graphics'],
    },
    {
        questionId: 'web-4',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which HTTP status code indicates "Not Found"?',
        options: [
            '404',
            '500',
            '403',
            '302'
        ],
        correctAnswer: 0,
        explanation: 'HTTP status code 404 indicates that the server cannot find the requested resource.',
        reference: 'HTTP Status Codes RFC',
        tags: ['http', 'status-codes'],
    },
    {
        questionId: 'web-5',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is CORS and why is it important?',
        options: [
            'Cross-Origin Resource Sharing - security feature for web APIs',
            'Content Optimization and Response System - performance tool',
            'Centralized Origin Request Service - load balancing mechanism',
            'Cached Object Retrieval System - browser caching protocol'
        ],
        correctAnswer: 0,
        explanation: 'CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.',
        reference: 'MDN CORS',
        tags: ['security', 'http', 'apis'],
    },
    {
        questionId: 'web-6',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does the "viewport" meta tag do?',
        options: [
            'Controls layout on mobile browsers',
            'Sets the background view for CSS',
            'Defines the visible area in iframes',
            'Manages browser cache settings'
        ],
        correctAnswer: 0,
        explanation: 'The viewport meta tag gives the browser instructions on how to control the page dimensions and scaling, especially important for responsive design on mobile devices.',
        reference: 'MDN Viewport',
        tags: ['responsive', 'mobile', 'html'],
    },
    {
        questionId: 'web-7',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which tag is used to create a hyperlink in HTML?',
        options: [
            '<a>',
            '<link>',
            '<href>',
            '<hyperlink>'
        ],
        correctAnswer: 0,
        explanation: 'The <a> (anchor) tag is used to create hyperlinks in HTML, with the "href" attribute specifying the destination.',
        reference: 'W3Schools HTML Links',
        tags: ['html', 'links'],
    },
    {
        questionId: 'web-8',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between localStorage and sessionStorage?',
        options: [
            'localStorage persists after browser close, sessionStorage does not',
            'sessionStorage is faster but less secure',
            'localStorage is for large files, sessionStorage for small data',
            'sessionStorage works offline, localStorage requires connection'
        ],
        correctAnswer: 0,
        explanation: 'localStorage data persists even when the browser is closed and reopened, while sessionStorage data is cleared when the page session ends (when the browser tab is closed).',
        reference: 'MDN Web Storage API',
        tags: ['storage', 'browser', 'javascript'],
    },
    {
        questionId: 'web-9',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the Critical Rendering Path?',
        options: [
            'The sequence of steps browsers take to render a page',
            'The process of optimizing CSS delivery',
            'The method for loading above-the-fold content first',
            'The algorithm for DOM tree construction'
        ],
        correctAnswer: 0,
        explanation: 'The Critical Rendering Path is the sequence of steps the browser goes through to convert HTML, CSS, and JavaScript into pixels on the screen.',
        reference: 'Google Web Fundamentals',
        tags: ['performance', 'browser', 'rendering'],
    },
    {
        questionId: 'web-10',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of CSS Grid?',
        options: [
            'Two-dimensional layout system for web pages',
            'Creating responsive images',
            'Managing database relationships',
            'Grid-based animation system'
        ],
        correctAnswer: 0,
        explanation: 'CSS Grid Layout is a two-dimensional system that can handle both columns and rows, unlike flexbox which is largely a one-dimensional system.',
        reference: 'MDN CSS Grid',
        tags: ['css', 'layout', 'responsive'],
    },
    {
        questionId: 'web-11',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which symbol is used for ID selectors in CSS?',
        options: [
            '#',
            '.',
            '@',
            '&'
        ],
        correctAnswer: 0,
        explanation: 'The hash symbol (#) is used in CSS to select elements by their ID attribute.',
        reference: 'W3Schools CSS Selectors',
        tags: ['css', 'selectors'],
    },
    {
        questionId: 'web-12',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a Progressive Web App (PWA)?',
        options: [
            'Web apps that use modern capabilities to deliver app-like experience',
            'Apps that progressively load content as user scrolls',
            'Websites that automatically adapt to progressive enhancement',
            'Applications that use progressive JPEG loading'
        ],
        correctAnswer: 0,
        explanation: 'PWAs are web applications that use service workers, manifests, and other web-platform features combined with progressive enhancement to give users an experience on par with native apps.',
        reference: 'Google PWA',
        tags: ['pwa', 'mobile', 'web-apps'],
    },
    {
        questionId: 'web-13',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the HTTP/2 protocol?',
        options: [
            'Improved performance through multiplexing and header compression',
            'Enhanced security with built-in encryption',
            'Better caching mechanisms',
            'Real-time communication capabilities'
        ],
        correctAnswer: 0,
        explanation: 'HTTP/2 improves web performance through features like multiplexing (multiple requests over a single connection), header compression, and server push.',
        reference: 'HTTP/2 RFC 7540',
        tags: ['http', 'performance', 'networking'],
    },
    {
        questionId: 'web-14',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does CSS stand for?',
        options: [
            'Cascading Style Sheets',
            'Computer Style Sheets',
            'Creative Style System',
            'Cascading Sheet Styles'
        ],
        correctAnswer: 0,
        explanation: 'CSS stands for Cascading Style Sheets, which describes how HTML elements are to be displayed on screen, paper, or in other media.',
        reference: 'W3Schools CSS',
        tags: ['css', 'basics'],
    },
    {
        questionId: 'web-15',
        category: 'web',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which HTML tag is used for the largest heading?',
        options: [
            '<h1>',
            '<head>',
            '<heading>',
            '<h6>'
        ],
        correctAnswer: 0,
        explanation: '<h1> is used for the most important heading (largest), while <h6> is for the least important heading (smallest).',
        reference: 'MDN HTML Headings',
        tags: ['html', 'headings'],
    },

];
export const MOBILE_QUESTIONS: Question[] = [

    // ==================== MOBILE DEVELOPMENT (15) ====================
    {
        questionId: 'mobile-1',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which language is primarily used for Android development?',
        options: [
            'Kotlin',
            'Swift',
            'Dart',
            'C#'
        ],
        correctAnswer: 0,
        explanation: 'Kotlin is now the preferred language for Android development, though Java is still widely used.',
        reference: 'Android Developer Docs',
        tags: ['android', 'kotlin'],
    },
    {
        questionId: 'mobile-2',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What language is used for iOS development?',
        options: [
            'Swift',
            'Kotlin',
            'Java',
            'Python'
        ],
        correctAnswer: 0,
        explanation: 'Swift is the primary programming language for iOS, iPadOS, macOS, watchOS, and tvOS development.',
        reference: 'Apple Developer Documentation',
        tags: ['ios', 'swift'],
    },
    {
        questionId: 'mobile-3',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is React Native?',
        options: [
            'A framework for building native apps using React',
            'A React library for mobile web apps',
            'A tool for converting React web apps to mobile',
            'A mobile-optimized version of React'
        ],
        correctAnswer: 0,
        explanation: 'React Native is a framework that enables developers to build native mobile apps using JavaScript and React.',
        reference: 'React Native Documentation',
        tags: ['react-native', 'cross-platform'],
    },
    {
        questionId: 'mobile-4',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Flutter?',
        options: [
            'Google\'s UI toolkit for natively compiled applications',
            'A animation library for mobile apps',
            'A testing framework for mobile applications',
            'A backend service for mobile apps'
        ],
        correctAnswer: 0,
        explanation: 'Flutter is Google\'s open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        reference: 'Flutter Documentation',
        tags: ['flutter', 'dart', 'cross-platform'],
    },
    {
        questionId: 'mobile-5',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of Gradle in Android development?',
        options: [
            'Build automation and dependency management',
            'UI layout design',
            'Database management',
            'Network request handling'
        ],
        correctAnswer: 0,
        explanation: 'Gradle is a build automation tool used for managing dependencies and building Android applications.',
        reference: 'Android Gradle Plugin',
        tags: ['android', 'build-tools'],
    },
    {
        questionId: 'mobile-6',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is an APK file?',
        options: [
            'Android application package file',
            'Apple application package file',
            'Android programming kit',
            'Application permission key'
        ],
        correctAnswer: 0,
        explanation: 'APK (Android Package Kit) is the package file format used by the Android operating system for distribution and installation of mobile apps.',
        reference: 'Android Developer Guide',
        tags: ['android', 'packaging'],
    },
    {
        questionId: 'mobile-7',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which company developed Flutter?',
        options: [
            'Google',
            'Facebook',
            'Apple',
            'Microsoft'
        ],
        correctAnswer: 0,
        explanation: 'Flutter was developed by Google and first released in 2017.',
        reference: 'Flutter History',
        tags: ['flutter', 'google'],
    },
    {
        questionId: 'mobile-8',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between Stateful and Stateless widgets in Flutter?',
        options: [
            'Stateful widgets can change, Stateless widgets are immutable',
            'Stateful widgets are faster, Stateless are slower',
            'Stateless widgets can change, Stateful widgets are static',
            'They are the same but used in different contexts'
        ],
        correctAnswer: 0,
        explanation: 'Stateful widgets maintain state that might change during the lifetime of the widget, while Stateless widgets are immutable once created.',
        reference: 'Flutter Widgets',
        tags: ['flutter', 'widgets', 'state-management'],
    },
    {
        questionId: 'mobile-9',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is CocoaPods?',
        options: [
            'Dependency manager for iOS projects',
            'UI framework for macOS',
            'Testing tool for Swift applications',
            'Package manager for Android'
        ],
        correctAnswer: 0,
        explanation: 'CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects, similar to npm for JavaScript.',
        reference: 'CocoaPods Documentation',
        tags: ['ios', 'dependency-management'],
    },
    {
        questionId: 'mobile-10',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which programming language does Flutter use?',
        options: [
            'Dart',
            'Swift',
            'Kotlin',
            'JavaScript'
        ],
        correctAnswer: 0,
        explanation: 'Flutter uses Dart programming language, which was also created by Google.',
        reference: 'Flutter Documentation',
        tags: ['flutter', 'dart'],
    },
    {
        questionId: 'mobile-11',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Jetpack Compose?',
        options: [
            'Modern toolkit for building native Android UI',
            'A library for composing network requests',
            'A tool for image composition in mobile apps',
            'A database composition framework'
        ],
        correctAnswer: 0,
        explanation: 'Jetpack Compose is Android\'s modern toolkit for building native UI, using a declarative approach similar to React.',
        reference: 'Android Jetpack Compose',
        tags: ['android', 'ui', 'jetpack'],
    },
    {
        questionId: 'mobile-12',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of Core Data in iOS?',
        options: [
            'Object graph and persistence framework',
            'Real-time data processing',
            'Network data caching',
            'User interface data binding'
        ],
        correctAnswer: 0,
        explanation: 'Core Data is a framework for managing the model layer objects in iOS applications, providing object persistence and lifecycle management.',
        reference: 'Apple Core Data Documentation',
        tags: ['ios', 'database', 'persistence'],
    },
    {
        questionId: 'mobile-13',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does Xcode represent in iOS development?',
        options: [
            'Integrated Development Environment (IDE)',
            'Programming language',
            'Testing framework',
            'UI design tool'
        ],
        correctAnswer: 0,
        explanation: 'Xcode is the official IDE for developing software for Apple platforms including iOS, iPadOS, macOS, watchOS, and tvOS.',
        reference: 'Apple Xcode',
        tags: ['ios', 'ide', 'tools'],
    },
    {
        questionId: 'mobile-14',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which tool is used for Android emulation?',
        options: [
            'Android Virtual Device (AVD) Manager',
            'iOS Simulator',
            'Genymotion',
            'BlueStacks'
        ],
        correctAnswer: 0,
        explanation: 'AVD Manager is the official tool provided by Android for creating and managing virtual devices for testing Android applications.',
        reference: 'Android Developer Tools',
        tags: ['android', 'emulator', 'testing'],
    },
    {
        questionId: 'mobile-15',
        category: 'mobile',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the AppDelegate in iOS?',
        options: [
            'Manages app-level events and lifecycle',
            'Handles database operations',
            'Manages user interface components',
            'Processes network requests'
        ],
        correctAnswer: 0,
        explanation: 'AppDelegate is the heart of an iOS application, responsible for handling app-level events like launch, background state, and termination.',
        reference: 'Apple AppDelegate Documentation',
        tags: ['ios', 'app-lifecycle'],
    },

];
export const AI_QUESTIONS: Question[] = [

    // ==================== AI & MACHINE LEARNING (15) ====================
    {
        questionId: 'ai-1',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Machine Learning?',
        options: [
            'A subset of AI that enables computers to learn without explicit programming',
            'A programming language for artificial intelligence',
            'A type of computer hardware optimized for AI tasks',
            'A database system for storing AI models'
        ],
        correctAnswer: 0,
        explanation: 'Machine Learning is a subset of artificial intelligence that focuses on algorithms that can learn from and make predictions based on data.',
        reference: 'Wikipedia - Machine Learning',
        tags: ['machine-learning', 'basics'],
    },
    {
        questionId: 'ai-2',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which of these is a common machine learning library?',
        options: [
            'TensorFlow',
            'React',
            'Django',
            'Spring'
        ],
        correctAnswer: 0,
        explanation: 'TensorFlow is an open-source machine learning library developed by Google, widely used for various AI applications.',
        reference: 'TensorFlow Documentation',
        tags: ['tensorflow', 'libraries'],
    },
    {
        questionId: 'ai-3',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between supervised and unsupervised learning?',
        options: [
            'Supervised uses labeled data, unsupervised uses unlabeled data',
            'Supervised is faster, unsupervised is more accurate',
            'Supervised requires more data, unsupervised requires less',
            'Supervised is for classification, unsupervised is for regression'
        ],
        correctAnswer: 0,
        explanation: 'Supervised learning uses labeled training data with known outputs, while unsupervised learning finds patterns in unlabeled data without predefined categories.',
        reference: 'Machine Learning Mastery',
        tags: ['supervised-learning', 'unsupervised-learning'],
    },
    {
        questionId: 'ai-4',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a neural network?',
        options: [
            'A computing system inspired by biological neural networks',
            'A network of connected computers for distributed AI',
            'A database system for storing neural data',
            'A protocol for AI communication'
        ],
        correctAnswer: 0,
        explanation: 'Neural networks are computing systems vaguely inspired by biological neural networks that consist of interconnected nodes (neurons) that process information.',
        reference: 'Deep Learning Book',
        tags: ['neural-networks', 'deep-learning'],
    },
    {
        questionId: 'ai-5',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is backpropagation?',
        options: [
            'Algorithm for training neural networks by adjusting weights based on error',
            'Method for propagating data through network layers',
            'Technique for reversing neural network connections',
            'Process of backing up trained AI models'
        ],
        correctAnswer: 0,
        explanation: 'Backpropagation is the algorithm used to train neural networks by calculating the gradient of the loss function with respect to the weights, then adjusting weights to minimize error.',
        reference: 'Neural Networks and Deep Learning',
        tags: ['backpropagation', 'training', 'neural-networks'],
    },
    {
        questionId: 'ai-6',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is overfitting in machine learning?',
        options: [
            'When a model learns training data too well but fails to generalize',
            'When a model is trained for too many epochs',
            'When a model uses too many features',
            'When a model is too large for the available data'
        ],
        correctAnswer: 0,
        explanation: 'Overfitting occurs when a machine learning model learns the training data too well, including its noise and outliers, making it perform poorly on new, unseen data.',
        reference: 'Google Machine Learning Guide',
        tags: ['overfitting', 'model-training'],
    },
    {
        questionId: 'ai-7',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which Python library is most commonly used for machine learning?',
        options: [
            'scikit-learn',
            'NumPy',
            'Pandas',
            'Matplotlib'
        ],
        correctAnswer: 0,
        explanation: 'scikit-learn is one of the most popular and widely-used Python libraries for machine learning, providing simple and efficient tools for data mining and analysis.',
        reference: 'scikit-learn Documentation',
        tags: ['python', 'scikit-learn'],
    },
    {
        questionId: 'ai-8',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of a activation function in neural networks?',
        options: [
            'Introduces non-linearity into the network',
            'Activates the learning process',
            'Determines the network architecture',
            'Controls the training speed'
        ],
        correctAnswer: 0,
        explanation: 'Activation functions introduce non-linear properties to neural networks, allowing them to learn complex patterns and relationships in data.',
        reference: 'Deep Learning Specialization',
        tags: ['activation-functions', 'neural-networks'],
    },
    {
        questionId: 'ai-9',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is natural language processing (NLP)?',
        options: [
            'Field of AI that gives computers ability to understand text and speech',
            'Process of optimizing code for natural execution',
            'Method for processing natural images',
            'Technique for natural user interface design'
        ],
        correctAnswer: 0,
        explanation: 'NLP is a subfield of AI focused on enabling computers to understand, interpret, and generate human language in valuable ways.',
        reference: 'Stanford NLP',
        tags: ['nlp', 'language-processing'],
    },
    {
        questionId: 'ai-10',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does "AI" stand for?',
        options: [
            'Artificial Intelligence',
            'Automated Intelligence',
            'Advanced Intelligence',
            'Applied Intelligence'
        ],
        correctAnswer: 0,
        explanation: 'AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines.',
        reference: 'Wikipedia - Artificial Intelligence',
        tags: ['ai', 'basics'],
    },
    {
        questionId: 'ai-11',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is reinforcement learning?',
        options: [
            'Learning through rewards and punishments',
            'Learning by reinforcing neural connections',
            'Learning through repeated practice',
            'Learning by reinforcing correct answers'
        ],
        correctAnswer: 0,
        explanation: 'Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions and receiving rewards or penalties.',
        reference: 'Reinforcement Learning: An Introduction',
        tags: ['reinforcement-learning'],
    },
    {
        questionId: 'ai-12',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is computer vision?',
        options: [
            'Field of AI that enables computers to interpret visual world',
            'Technology for computer display optimization',
            'Method for visualizing computer programs',
            'Process of computer hardware inspection'
        ],
        correctAnswer: 0,
        explanation: 'Computer vision is a field of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs.',
        reference: 'OpenCV Documentation',
        tags: ['computer-vision', 'image-processing'],
    },
    {
        questionId: 'ai-13',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which company developed the GPT language models?',
        options: [
            'OpenAI',
            'Google',
            'Microsoft',
            'Facebook'
        ],
        correctAnswer: 0,
        explanation: 'GPT (Generative Pre-trained Transformer) models were developed by OpenAI and have revolutionized natural language processing.',
        reference: 'OpenAI Research',
        tags: ['gpt', 'openai', 'nlp'],
    },
    {
        questionId: 'ai-14',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of data normalization in machine learning?',
        options: [
            'To scale features to similar ranges',
            'To remove invalid data points',
            'To organize data into normal distribution',
            'To standardize data formats'
        ],
        correctAnswer: 0,
        explanation: 'Data normalization scales numeric features to a common range (usually 0-1 or -1 to 1) to prevent features with larger scales from dominating the model.',
        reference: 'Machine Learning Mastery - Data Preprocessing',
        tags: ['data-preprocessing', 'normalization'],
    },
    {
        questionId: 'ai-15',
        category: 'ai',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are convolutional neural networks (CNNs) primarily used for?',
        options: [
            'Image recognition and processing',
            'Time series prediction',
            'Natural language processing',
            'Reinforcement learning'
        ],
        correctAnswer: 0,
        explanation: 'CNNs are particularly effective for image recognition and processing tasks because they can automatically learn spatial hierarchies of features.',
        reference: 'Deep Learning for Computer Vision',
        tags: ['cnn', 'computer-vision', 'neural-networks'],
    },

];
export const CYBERSECURITY_QUESTIONS: Question[] = [

    // ==================== CYBERSECURITY (15) ====================
    {
        questionId: 'cybersecurity-1',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is phishing?',
        options: [
            'Fraudulent attempt to obtain sensitive information by disguising as trustworthy entity',
            'A type of network scanning technique',
            'Method for encrypting data in transit',
            'Process of testing system vulnerabilities'
        ],
        correctAnswer: 0,
        explanation: 'Phishing is a cyber attack that uses disguised email, text messages, or websites to trick users into revealing sensitive information.',
        reference: 'CISA Phishing Guidance',
        tags: ['phishing', 'social-engineering'],
    },
    {
        questionId: 'cybersecurity-2',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does VPN stand for?',
        options: [
            'Virtual Private Network',
            'Virtual Public Network',
            'Verified Private Network',
            'Virtual Protection Network'
        ],
        correctAnswer: 0,
        explanation: 'VPN stands for Virtual Private Network, which creates a secure, encrypted connection over a less secure network like the internet.',
        reference: 'NIST VPN Guidelines',
        tags: ['vpn', 'networking'],
    },
    {
        questionId: 'cybersecurity-3',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is two-factor authentication (2FA)?',
        options: [
            'Security process requiring two different authentication methods',
            'Having two passwords for one account',
            'Using two different security questions',
            'Authentication that works on two different devices'
        ],
        correctAnswer: 0,
        explanation: '2FA adds an extra layer of security by requiring two different forms of identification, typically something you know (password) and something you have (phone).',
        reference: 'NIST Digital Identity Guidelines',
        tags: ['2fa', 'authentication'],
    },
    {
        questionId: 'cybersecurity-4',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a DDoS attack?',
        options: [
            'Distributed Denial of Service attack that overwhelms systems with traffic',
            'Data Destruction of Service attack that deletes files',
            'Direct Denial of Service attack from single source',
            'Digital Defense of Systems attack for testing'
        ],
        correctAnswer: 0,
        explanation: 'A DDoS attack attempts to disrupt normal traffic of a targeted server, service, or network by overwhelming it with a flood of internet traffic from multiple sources.',
        reference: 'Cloudflare DDoS Protection',
        tags: ['ddos', 'network-security'],
    },
    {
        questionId: 'cybersecurity-5',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between symmetric and asymmetric encryption?',
        options: [
            'Symmetric uses same key, asymmetric uses different keys',
            'Symmetric is faster, asymmetric is more secure',
            'Symmetric for data, asymmetric for authentication',
            'Symmetric is older, asymmetric is newer'
        ],
        correctAnswer: 0,
        explanation: 'Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a public key for encryption and a private key for decryption.',
        reference: 'Cryptography and Network Security',
        tags: ['encryption', 'cryptography'],
    },
    {
        questionId: 'cybersecurity-6',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a firewall?',
        options: [
            'Network security system that monitors and controls incoming/outgoing traffic',
            'Hardware device for internet connectivity',
            'Software for virus detection',
            'System for user authentication'
        ],
        correctAnswer: 0,
        explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s established security policies.',
        reference: 'Cisco Firewall Documentation',
        tags: ['firewall', 'network-security'],
    },
    {
        questionId: 'cybersecurity-7',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is malware?',
        options: [
            'Malicious software designed to harm computer systems',
            'Software for detecting malicious activity',
            'Legitimate software with bugs',
            'Security measurement tool'
        ],
        correctAnswer: 0,
        explanation: 'Malware is any software intentionally designed to cause damage to a computer, server, client, or computer network.',
        reference: 'US-CERT Malware Guidance',
        tags: ['malware', 'threats'],
    },
    {
        questionId: 'cybersecurity-8',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a zero-day vulnerability?',
        options: [
            'Security flaw unknown to the vendor with no available patch',
            'A vulnerability that appears at midnight',
            'A bug that has zero impact on system',
            'A security feature with zero configuration'
        ],
        correctAnswer: 0,
        explanation: 'A zero-day vulnerability is a software security flaw that is unknown to those who should be interested in mitigating the vulnerability, including the vendor.',
        reference: 'NIST Zero-Day Vulnerabilities',
        tags: ['zero-day', 'vulnerabilities'],
    },
    {
        questionId: 'cybersecurity-9',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is social engineering?',
        options: [
            'Psychological manipulation to trick people into revealing information',
            'Engineering social media algorithms',
            'Building social networking software',
            'Analyzing social media data'
        ],
        correctAnswer: 0,
        explanation: 'Social engineering uses psychological manipulation to trick users into making security mistakes or giving away sensitive information.',
        reference: 'Social Engineering: The Science of Human Hacking',
        tags: ['social-engineering', 'human-factors'],
    },
    {
        questionId: 'cybersecurity-10',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does HTTPS provide that HTTP does not?',
        options: [
            'Encryption and secure communication',
            'Faster data transfer',
            'Better compression',
            'Enhanced caching'
        ],
        correctAnswer: 0,
        explanation: 'HTTPS provides encryption through TLS/SSL, ensuring that data transmitted between the browser and website remains private and secure.',
        reference: 'MDN HTTPS',
        tags: ['https', 'encryption', 'web-security'],
    },
    {
        questionId: 'cybersecurity-11',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is penetration testing?',
        options: [
            'Authorized simulated cyber attack on computer system',
            'Testing pen input devices',
            'Checking physical security perimeters',
            'Testing writing instruments for security'
        ],
        correctAnswer: 0,
        explanation: 'Penetration testing is an authorized simulated attack performed on a computer system to evaluate its security and identify vulnerabilities.',
        reference: 'Penetration Testing Execution Standard',
        tags: ['penetration-testing', 'security-testing'],
    },
    {
        questionId: 'cybersecurity-12',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the principle of least privilege?',
        options: [
            'Users should have only permissions needed to perform their tasks',
            'All users should have equal privileges',
            'Privileges should be granted based on seniority',
            'Minimum number of users should have privileges'
        ],
        correctAnswer: 0,
        explanation: 'The principle of least privilege states that users and programs should be granted only those privileges essential to perform their intended functions.',
        reference: 'NIST Least Privilege',
        tags: ['access-control', 'security-principles'],
    },
    {
        questionId: 'cybersecurity-13',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a man-in-the-middle attack?',
        options: [
            'Attack where attacker secretly intercepts and relays messages',
            'Attack targeting middle management personnel',
            'Attack that compromises mid-level systems',
            'Attack during the middle of data transmission'
        ],
        correctAnswer: 0,
        explanation: 'A man-in-the-middle attack occurs when an attacker intercepts and potentially alters communication between two parties without their knowledge.',
        reference: 'OWASP MitM Attacks',
        tags: ['man-in-the-middle', 'network-attacks'],
    },
    {
        questionId: 'cybersecurity-14',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is encryption?',
        options: [
            'Process of converting data to prevent unauthorized access',
            'Method for compressing data',
            'Process of backing up data',
            'Technique for organizing data'
        ],
        correctAnswer: 0,
        explanation: 'Encryption is the process of converting information or data into a code, especially to prevent unauthorized access.',
        reference: 'Cryptography Basics',
        tags: ['encryption', 'cryptography'],
    },
    {
        questionId: 'cybersecurity-15',
        category: 'cybersecurity',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is SQL injection?',
        options: [
            'Code injection technique that attacks data-driven applications',
            'Method for injecting SQL databases with data',
            'Technique for optimizing SQL queries',
            'Process of backing up SQL databases'
        ],
        correctAnswer: 0,
        explanation: 'SQL injection is a code injection technique that might destroy your database, where malicious SQL statements are inserted into an entry field for execution.',
        reference: 'OWASP SQL Injection',
        tags: ['sql-injection', 'web-security'],
    },

];
export const DATA_SCIENCE_QUESTIONS: Question[] = [

    // ==================== DATA SCIENCE (15) ====================
    {
        questionId: 'data-science-1',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the primary purpose of pandas in Python?',
        options: [
            'Data manipulation and analysis',
            'Data visualization',
            'Machine learning',
            'Web development'
        ],
        correctAnswer: 0,
        explanation: 'pandas is a Python library providing high-performance, easy-to-use data structures and data analysis tools.',
        reference: 'pandas Documentation',
        tags: ['pandas', 'python', 'data-analysis'],
    },
    {
        questionId: 'data-science-2',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a DataFrame?',
        options: [
            'Two-dimensional labeled data structure with columns',
            'A framework for data processing',
            'A method for framing data problems',
            'A visualization of data relationships'
        ],
        correctAnswer: 0,
        explanation: 'A DataFrame is a 2-dimensional labeled data structure with columns of potentially different types, similar to a spreadsheet or SQL table.',
        reference: 'pandas DataFrame',
        tags: ['dataframe', 'pandas'],
    },
    {
        questionId: 'data-science-3',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between supervised and unsupervised learning?',
        options: [
            'Supervised uses labeled data, unsupervised finds patterns in unlabeled data',
            'Supervised is faster, unsupervised is more accurate',
            'Supervised requires more data, unsupervised requires less',
            'Supervised is for prediction, unsupervised is for classification'
        ],
        correctAnswer: 0,
        explanation: 'Supervised learning uses labeled training data with known outputs, while unsupervised learning finds hidden patterns or intrinsic structures in input data.',
        reference: 'Data Science from Scratch',
        tags: ['machine-learning', 'supervised', 'unsupervised'],
    },
    {
        questionId: 'data-science-4',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of NumPy in data science?',
        options: [
            'Numerical computing with arrays and matrices',
            'Natural language processing',
            'Network programming',
            'Neural network development'
        ],
        correctAnswer: 0,
        explanation: 'NumPy is the fundamental package for scientific computing in Python, providing support for large, multi-dimensional arrays and matrices.',
        reference: 'NumPy Documentation',
        tags: ['numpy', 'python', 'numerical-computing'],
    },
    {
        questionId: 'data-science-5',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the bias-variance tradeoff?',
        options: [
            'Balance between underfitting and overfitting',
            'Tradeoff between model speed and accuracy',
            'Balance between data size and model complexity',
            'Tradeoff between training time and prediction time'
        ],
        correctAnswer: 0,
        explanation: 'The bias-variance tradeoff is the property where reducing bias (error from erroneous assumptions) typically increases variance (error from sensitivity to small fluctuations), and vice versa.',
        reference: 'Elements of Statistical Learning',
        tags: ['bias-variance', 'model-evaluation'],
    },
    {
        questionId: 'data-science-6',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Matplotlib used for?',
        options: [
            'Creating static, animated, and interactive visualizations',
            'Mathematical plotting and calculations',
            'Matrix operations and linear algebra',
            'Machine learning model training'
        ],
        correctAnswer: 0,
        explanation: 'Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.',
        reference: 'Matplotlib Documentation',
        tags: ['matplotlib', 'visualization'],
    },
    {
        questionId: 'data-science-7',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Jupyter Notebook?',
        options: [
            'Web-based interactive development environment',
            'Java-based programming environment',
            'JavaScript notebook for web development',
            'Database management tool'
        ],
        correctAnswer: 0,
        explanation: 'Jupyter Notebook is an open-source web application that allows creation and sharing of documents containing live code, equations, visualizations, and narrative text.',
        reference: 'Jupyter Documentation',
        tags: ['jupyter', 'tools'],
    },
    {
        questionId: 'data-science-8',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is cross-validation?',
        options: [
            'Technique for assessing how model generalizes to independent dataset',
            'Method for validating data quality',
            'Process of crossing different validation methods',
            'Technique for cross-referencing multiple datasets'
        ],
        correctAnswer: 0,
        explanation: 'Cross-validation is a resampling procedure used to evaluate machine learning models on a limited data sample, providing insight into how the model will generalize to an independent dataset.',
        reference: 'Scikit-learn Cross-validation',
        tags: ['cross-validation', 'model-evaluation'],
    },
    {
        questionId: 'data-science-9',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of data cleaning?',
        options: [
            'To identify and correct errors in datasets',
            'To remove all duplicate data',
            'To encrypt sensitive data',
            'To compress large datasets'
        ],
        correctAnswer: 0,
        explanation: 'Data cleaning involves detecting and correcting (or removing) corrupt or inaccurate records from a dataset to improve data quality.',
        reference: 'Data Cleaning Best Practices',
        tags: ['data-cleaning', 'data-preparation'],
    },
    {
        questionId: 'data-science-10',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does EDA stand for in data science?',
        options: [
            'Exploratory Data Analysis',
            'Extended Data Assessment',
            'External Data Aggregation',
            'Enhanced Data Analytics'
        ],
        correctAnswer: 0,
        explanation: 'EDA stands for Exploratory Data Analysis, which involves analyzing datasets to summarize their main characteristics, often with visual methods.',
        reference: 'Exploratory Data Analysis - Tukey',
        tags: ['eda', 'data-analysis'],
    },
    {
        questionId: 'data-science-11',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is feature engineering?',
        options: [
            'Process of creating new input features from existing ones',
            'Engineering features for software applications',
            'Method for engineering database features',
            'Process of selecting hardware features'
        ],
        correctAnswer: 0,
        explanation: 'Feature engineering is the process of using domain knowledge to create features that make machine learning algorithms work better.',
        reference: 'Feature Engineering for Machine Learning',
        tags: ['feature-engineering', 'machine-learning'],
    },
    {
        questionId: 'data-science-12',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of Seaborn?',
        options: [
            'Statistical data visualization based on Matplotlib',
            'Seasonal data analysis',
            'Secure data storage',
            'Sequential data processing'
        ],
        correctAnswer: 0,
        explanation: 'Seaborn is a Python data visualization library based on Matplotlib that provides a high-level interface for drawing attractive statistical graphics.',
        reference: 'Seaborn Documentation',
        tags: ['seaborn', 'visualization'],
    },
    {
        questionId: 'data-science-13',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a correlation coefficient?',
        options: [
            'Measure of linear relationship between two variables',
            'Coefficient for correcting data errors',
            'Measurement of data correlation over time',
            'Coefficient for data compression'
        ],
        correctAnswer: 0,
        explanation: 'A correlation coefficient is a numerical measure of some type of correlation, meaning a statistical relationship between two variables.',
        reference: 'Statistics for Data Science',
        tags: ['correlation', 'statistics'],
    },
    {
        questionId: 'data-science-14',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of Scikit-learn?',
        options: [
            'Machine learning library for Python',
            'Scientific computing toolkit',
            'Data scraping framework',
            'Statistical analysis package'
        ],
        correctAnswer: 0,
        explanation: 'Scikit-learn is a free software machine learning library for Python featuring various classification, regression, and clustering algorithms.',
        reference: 'Scikit-learn Documentation',
        tags: ['scikit-learn', 'machine-learning'],
    },
    {
        questionId: 'data-science-15',
        category: 'data-science',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is principal component analysis (PCA)?',
        options: [
            'Dimensionality reduction technique',
            'Principal method for component analysis',
            'Primary classification algorithm',
            'Predictive component assessment'
        ],
        correctAnswer: 0,
        explanation: 'PCA is a statistical procedure that uses orthogonal transformation to convert correlated variables into linearly uncorrelated variables called principal components.',
        reference: 'Principal Component Analysis - Jolliffe',
        tags: ['pca', 'dimensionality-reduction'],
    },

];
export const CLOUD_DEVOPS_QUESTIONS: Question[] = [

    // ==================== CLOUD & DEVOPS (15) ====================
    {
        questionId: 'cloud-devops-1',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is DevOps?',
        options: [
            'Combination of development and operations practices',
            'Development of operations software',
            'Device operation systems',
            'Developer operations management'
        ],
        correctAnswer: 0,
        explanation: 'DevOps is a set of practices that combines software development and IT operations aiming to shorten the systems development life cycle.',
        reference: 'AWS DevOps',
        tags: ['devops', 'basics'],
    },
    {
        questionId: 'cloud-devops-2',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which service is provided by AWS?',
        options: [
            'Amazon EC2',
            'Google Compute Engine',
            'Microsoft Azure Virtual Machines',
            'IBM Cloud Virtual Servers'
        ],
        correctAnswer: 0,
        explanation: 'Amazon EC2 (Elastic Compute Cloud) is a web service that provides secure, resizable compute capacity in the cloud from AWS.',
        reference: 'AWS EC2 Documentation',
        tags: ['aws', 'ec2', 'cloud-compute'],
    },
    {
        questionId: 'cloud-devops-3',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Docker?',
        options: [
            'Platform for developing, shipping, and running applications in containers',
            'Tool for docking applications to cloud',
            'Framework for document management',
            'Platform for data storage'
        ],
        correctAnswer: 0,
        explanation: 'Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.',
        reference: 'Docker Documentation',
        tags: ['docker', 'containers'],
    },
    {
        questionId: 'cloud-devops-4',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Kubernetes?',
        options: [
            'Container orchestration system',
            'Container virtualization technology',
            'Cloud storage solution',
            'Continuous integration tool'
        ],
        correctAnswer: 0,
        explanation: 'Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management.',
        reference: 'Kubernetes Documentation',
        tags: ['kubernetes', 'container-orchestration'],
    },
    {
        questionId: 'cloud-devops-5',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Infrastructure as Code (IaC)?',
        options: [
            'Managing infrastructure through machine-readable definition files',
            'Writing infrastructure in programming languages',
            'Coding infrastructure components manually',
            'Infrastructure development using code editors'
        ],
        correctAnswer: 0,
        explanation: 'IaC is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration.',
        reference: 'Terraform Documentation',
        tags: ['iac', 'infrastructure'],
    },
    {
        questionId: 'cloud-devops-6',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is continuous integration?',
        options: [
            'Practice of merging code changes frequently',
            'Continuous deployment to production',
            'Integration of continuous monitoring',
            'Continuous testing of applications'
        ],
        correctAnswer: 0,
        explanation: 'Continuous integration is the practice of merging all developers working copies to a shared mainline several times a day.',
        reference: 'Jenkins CI',
        tags: ['ci', 'continuous-integration'],
    },
    {
        questionId: 'cloud-devops-7',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does IaaS stand for?',
        options: [
            'Infrastructure as a Service',
            'Internet as a Service',
            'Integration as a Service',
            'Information as a Service'
        ],
        correctAnswer: 0,
        explanation: 'IaaS stands for Infrastructure as a Service, a cloud computing service model that provides virtualized computing resources over the internet.',
        reference: 'Cloud Service Models',
        tags: ['iaas', 'cloud-models'],
    },
    {
        questionId: 'cloud-devops-8',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of Terraform?',
        options: [
            'Infrastructure as Code tool for building cloud resources',
            'Terrain formation modeling',
            'Network terraforming tool',
            'Cloud cost optimization tool'
        ],
        correctAnswer: 0,
        explanation: 'Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services.',
        reference: 'Terraform Documentation',
        tags: ['terraform', 'iac'],
    },
    {
        questionId: 'cloud-devops-9',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a microservices architecture?',
        options: [
            'Developing application as suite of small services',
            'Services for micro applications',
            'Architecture using micro components',
            'Services running on micro instances'
        ],
        correctAnswer: 0,
        explanation: 'Microservices architecture structures an application as a collection of loosely coupled services, which implement business capabilities.',
        reference: 'Microservices Patterns',
        tags: ['microservices', 'architecture'],
    },
    {
        questionId: 'cloud-devops-10',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which company provides Azure cloud services?',
        options: [
            'Microsoft',
            'Amazon',
            'Google',
            'IBM'
        ],
        correctAnswer: 0,
        explanation: 'Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.',
        reference: 'Microsoft Azure',
        tags: ['azure', 'microsoft'],
    },
    {
        questionId: 'cloud-devops-11',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is blue-green deployment?',
        options: [
            'Deployment technique with two identical environments',
            'Deployment using blue and green servers',
            'Environment deployment based on colors',
            'Deployment for blue-green applications'
        ],
        correctAnswer: 0,
        explanation: 'Blue-green deployment is a technique that reduces downtime and risk by running two identical production environments called Blue and Green.',
        reference: 'Martin Fowler - BlueGreenDeployment',
        tags: ['deployment', 'devops'],
    },
    {
        questionId: 'cloud-devops-12',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Jenkins primarily used for?',
        options: [
            'Continuous integration and delivery',
            'Container orchestration',
            'Cloud infrastructure management',
            'Application monitoring'
        ],
        correctAnswer: 0,
        explanation: 'Jenkins is an open-source automation server that enables developers to reliably build, test, and deploy their software.',
        reference: 'Jenkins Documentation',
        tags: ['jenkins', 'ci-cd'],
    },
    {
        questionId: 'cloud-devops-13',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does SaaS stand for?',
        options: [
            'Software as a Service',
            'Storage as a Service',
            'Security as a Service',
            'System as a Service'
        ],
        correctAnswer: 0,
        explanation: 'SaaS stands for Software as a Service, a software licensing and delivery model in which software is licensed on a subscription basis.',
        reference: 'Cloud Service Models',
        tags: ['saas', 'cloud-models'],
    },
    {
        questionId: 'cloud-devops-14',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Git?',
        options: [
            'Distributed version control system',
            'Graphical interface tool',
            'GitHub interface technology',
            'Global internet technology'
        ],
        correctAnswer: 0,
        explanation: 'Git is a distributed version control system that tracks changes in source code during software development.',
        reference: 'Git Documentation',
        tags: ['git', 'version-control'],
    },
    {
        questionId: 'cloud-devops-15',
        category: 'cloud-devops',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is serverless computing?',
        options: [
            'Cloud computing execution model without managing servers',
            'Computing without any servers',
            'Running applications on client devices only',
            'Computing model without internet servers'
        ],
        correctAnswer: 0,
        explanation: 'Serverless computing is a cloud computing execution model where the cloud provider runs the server and dynamically manages the allocation of machine resources.',
        reference: 'AWS Serverless',
        tags: ['serverless', 'cloud-compute'],
    },

];
export const JAVASCRIPT_QUESTIONS: Question[] = [

    // ==================== JAVASCRIPT (15) ====================
    {
        questionId: 'javascript-1',
        category: 'javascript',
        difficulty: 'medium',
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
    {
        questionId: 'javascript-2',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which method adds one or more elements to the end of an array?',
        options: [
            'push()',
            'pop()',
            'shift()',
            'unshift()'
        ],
        correctAnswer: 0,
        explanation: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
        reference: 'MDN Array.push()',
        tags: ['arrays', 'methods'],
    },
    {
        questionId: 'javascript-3',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is closure in JavaScript?',
        options: [
            'Function with access to its own scope, outer function scope, and global scope',
            'Method for closing browser windows',
            'Technique for closing database connections',
            'Process of closing event listeners'
        ],
        correctAnswer: 0,
        explanation: 'A closure is the combination of a function bundled together with references to its surrounding state (lexical environment).',
        reference: 'MDN Closures',
        tags: ['closures', 'functions'],
    },
    {
        questionId: 'javascript-4',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between let and var?',
        options: [
            'let has block scope, var has function scope',
            'let is for constants, var for variables',
            'let is older, var is newer',
            'let is global, var is local'
        ],
        correctAnswer: 0,
        explanation: 'Variables declared with let have block-level scope, while variables declared with var have function-level scope.',
        reference: 'MDN let',
        tags: ['variables', 'scope'],
    },
    {
        questionId: 'javascript-5',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the event loop in JavaScript?',
        options: [
            'Mechanism that handles asynchronous callbacks',
            'Loop that handles DOM events',
            'Process for looping through event listeners',
            'Method for event delegation'
        ],
        correctAnswer: 0,
        explanation: 'The event loop is a fundamental concept in JavaScript that enables asynchronous programming by executing code, collecting and processing events, and executing queued sub-tasks.',
        reference: 'MDN Event Loop',
        tags: ['event-loop', 'asynchronous'],
    },
    {
        questionId: 'javascript-6',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What does the "this" keyword refer to in JavaScript?',
        options: [
            'Depends on how function is called',
            'Always refers to global object',
            'Refers to the function itself',
            'Refers to the parent object'
        ],
        correctAnswer: 0,
        explanation: 'The value of "this" depends on how a function is called (runtime binding) and can refer to different objects in different contexts.',
        reference: 'MDN this',
        tags: ['this', 'context'],
    },
    {
        questionId: 'javascript-7',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which operator is used for strict equality comparison?',
        options: [
            '===',
            '==',
            '=',
            '!!'
        ],
        correctAnswer: 0,
        explanation: 'The === operator checks both value and type equality, while == performs type coercion before comparison.',
        reference: 'MDN Equality Comparisons',
        tags: ['operators', 'equality'],
    },
    {
        questionId: 'javascript-8',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a Promise in JavaScript?',
        options: [
            'Object representing eventual completion of async operation',
            'Function that promises to return value',
            'Method for promising code execution',
            'Object for making commitments in code'
        ],
        correctAnswer: 0,
        explanation: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.',
        reference: 'MDN Promise',
        tags: ['promises', 'asynchronous'],
    },
    {
        questionId: 'javascript-9',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is hoisting in JavaScript?',
        options: [
            'Variable/function declarations moved to top of scope during compilation',
            'Lifting variables to global scope',
            'Raising error priority',
            'Elevating function privileges'
        ],
        correctAnswer: 0,
        explanation: 'Hoisting is JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.',
        reference: 'MDN Hoisting',
        tags: ['hoisting', 'variables'],
    },
    {
        questionId: 'javascript-10',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which method converts JSON string to JavaScript object?',
        options: [
            'JSON.parse()',
            'JSON.stringify()',
            'JSON.convert()',
            'JSON.toObject()'
        ],
        correctAnswer: 0,
        explanation: 'JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.',
        reference: 'MDN JSON.parse()',
        tags: ['json', 'parsing'],
    },
    {
        questionId: 'javascript-11',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are arrow functions?',
        options: [
            'Shorter syntax and lexical "this" binding',
            'Functions that point to other functions',
            'Functions with arrow operators',
            'Functions that return arrows'
        ],
        correctAnswer: 0,
        explanation: 'Arrow functions provide shorter syntax and don\'t have their own "this", "arguments", "super", or "new.target".',
        reference: 'MDN Arrow Functions',
        tags: ['arrow-functions', 'es6'],
    },
    {
        questionId: 'javascript-12',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the map() method?',
        options: [
            'Creates new array with results of calling function on every element',
            'Creates map of array elements',
            'Maps array to object',
            'Creates geographical map from data'
        ],
        correctAnswer: 0,
        explanation: 'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
        reference: 'MDN Array.map()',
        tags: ['arrays', 'methods'],
    },
    {
        questionId: 'javascript-13',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which keyword is used to declare a constant?',
        options: [
            'const',
            'let',
            'var',
            'constant'
        ],
        correctAnswer: 0,
        explanation: 'The const keyword is used to declare constants - variables that cannot be reassigned.',
        reference: 'MDN const',
        tags: ['variables', 'constants'],
    },
    {
        questionId: 'javascript-14',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is destructuring assignment?',
        options: [
            'Unpack values from arrays or properties from objects',
            'Destroy array or object structures',
            'Assign destructive values',
            'Deconstruct functions'
        ],
        correctAnswer: 0,
        explanation: 'Destructuring assignment is a syntax that unpack values from arrays, or properties from objects, into distinct variables.',
        reference: 'MDN Destructuring',
        tags: ['destructuring', 'es6'],
    },
    {
        questionId: 'javascript-15',
        category: 'javascript',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between null and undefined?',
        options: [
            'undefined means variable declared but not assigned, null is intentional absence',
            'null is for objects, undefined for primitives',
            'undefined is older, null is newer',
            'null means empty, undefined means not defined'
        ],
        correctAnswer: 0,
        explanation: 'undefined means a variable has been declared but has not yet been assigned a value, while null is an assignment value representing no value or no object.',
        reference: 'MDN null and undefined',
        tags: ['null', 'undefined', 'types'],
    },

];
export const PYTHON_QUESTIONS: Question[] = [
    // ==================== PYTHON (15) ====================
    {
        questionId: 'python-1',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'How do you create a list in Python?',
        options: [
            'my_list = [1, 2, 3]',
            'my_list = (1, 2, 3)',
            'my_list = {1, 2, 3}',
            'my_list = <1, 2, 3>'
        ],
        correctAnswer: 0,
        explanation: 'Lists are created using square brackets [] in Python.',
        reference: 'Python Lists Documentation',
        tags: ['lists', 'data-structures'],
    },
    {
        questionId: 'python-2',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which keyword is used to define a function in Python?',
        options: [
            'def',
            'function',
            'define',
            'func'
        ],
        correctAnswer: 0,
        explanation: 'The "def" keyword is used to define functions in Python.',
        reference: 'Python Functions Documentation',
        tags: ['functions', 'syntax'],
    },
    {
        questionId: 'python-3',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is a dictionary in Python?',
        options: [
            'Key-value pair data structure',
            'Collection of words and definitions',
            'Sorted list of elements',
            'Array of characters'
        ],
        correctAnswer: 0,
        explanation: 'A dictionary is an unordered collection of key-value pairs, where keys must be unique and immutable.',
        reference: 'Python Dictionaries Documentation',
        tags: ['dictionaries', 'data-structures'],
    },
    {
        questionId: 'python-4',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between list and tuple?',
        options: [
            'Lists are mutable, tuples are immutable',
            'Tuples are faster, lists are slower',
            'Lists use [], tuples use ()',
            'Tuples can contain only numbers'
        ],
        correctAnswer: 0,
        explanation: 'The main difference is that lists are mutable (can be modified) while tuples are immutable (cannot be modified after creation).',
        reference: 'Python Data Structures',
        tags: ['lists', 'tuples', 'mutability'],
    },
    {
        questionId: 'python-5',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are decorators in Python?',
        options: [
            'Functions that modify behavior of other functions',
            'Special syntax for decorating output',
            'Methods for adding visual decorations',
            'Functions that decorate classes'
        ],
        correctAnswer: 0,
        explanation: 'Decorators are functions that modify the behavior of other functions or methods without permanently modifying them.',
        reference: 'Python Decorators Documentation',
        tags: ['decorators', 'functions'],
    },
    {
        questionId: 'python-6',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is list comprehension?',
        options: [
            'Concise way to create lists',
            'Method for understanding lists',
            'Tool for list documentation',
            'Process of comprehending list structures'
        ],
        correctAnswer: 0,
        explanation: 'List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.',
        reference: 'Python List Comprehension',
        tags: ['list-comprehension', 'syntax'],
    },
    {
        questionId: 'python-7',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'How do you install packages in Python?',
        options: [
            'pip install package_name',
            'python install package_name',
            'install package_name',
            'pip get package_name'
        ],
        correctAnswer: 0,
        explanation: 'pip is the package installer for Python and is used to install packages from the Python Package Index.',
        reference: 'Python Packaging',
        tags: ['pip', 'packages'],
    },
    {
        questionId: 'python-8',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the Global Interpreter Lock (GIL)?',
        options: [
            'Mechanism that allows only one thread to execute at a time',
            'Global lock for file operations',
            'Lock for global variables',
            'Interpreter security mechanism'
        ],
        correctAnswer: 0,
        explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes at once.',
        reference: 'Python GIL Documentation',
        tags: ['gil', 'multithreading'],
    },
    {
        questionId: 'python-9',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are *args and **kwargs?',
        options: [
            'Special syntax for variable-length arguments',
            'Arguments for args and kwargs functions',
            'Special keyword arguments',
            'Arguments for arithmetic operations'
        ],
        correctAnswer: 0,
        explanation: '*args allows passing variable number of positional arguments, **kwargs allows passing variable number of keyword arguments.',
        reference: 'Python Function Arguments',
        tags: ['args', 'kwargs', 'functions'],
    },
    {
        questionId: 'python-10',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which module is used for mathematical operations?',
        options: [
            'math',
            'calc',
            'numpy',
            'mathematics'
        ],
        correctAnswer: 0,
        explanation: 'The math module provides mathematical functions and constants in Python.',
        reference: 'Python Math Module',
        tags: ['math', 'modules'],
    },
    {
        questionId: 'python-11',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are Python generators?',
        options: [
            'Functions that return iterable generator objects',
            'Tools for generating code',
            'Functions that generate random numbers',
            'Classes for data generation'
        ],
        correctAnswer: 0,
        explanation: 'Generators are functions that return an iterable generator object using the yield keyword, allowing lazy evaluation.',
        reference: 'Python Generators Documentation',
        tags: ['generators', 'iterators'],
    },
    {
        questionId: 'python-12',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of __init__ method?',
        options: [
            'Constructor method for class initialization',
            'Method for initializing modules',
            'Function for initializing variables',
            'Special method for inheritance'
        ],
        correctAnswer: 0,
        explanation: 'The __init__ method is called when a new object is created from a class and is used to initialize the object\'s attributes.',
        reference: 'Python Classes Documentation',
        tags: ['classes', 'oop'],
    },
    {
        questionId: 'python-13',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'How do you handle exceptions in Python?',
        options: [
            'try-except blocks',
            'catch-throw statements',
            'error-handle blocks',
            'exception-catch methods'
        ],
        correctAnswer: 0,
        explanation: 'Python uses try-except blocks to catch and handle exceptions that may occur during program execution.',
        reference: 'Python Exception Handling',
        tags: ['exceptions', 'error-handling'],
    },
    {
        questionId: 'python-14',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the difference between "is" and "=="?',
        options: [
            '"is" checks identity, "==" checks equality',
            '"is" is for numbers, "==" for strings',
            '"is" is newer, "==" is older',
            '"is" checks type, "==" checks value'
        ],
        correctAnswer: 0,
        explanation: '"is" checks if two variables point to the same object in memory, while "==" checks if the objects referred to by the variables are equal.',
        reference: 'Python Identity vs Equality',
        tags: ['operators', 'comparison'],
    },
    {
        questionId: 'python-15',
        category: 'python',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are metaclasses in Python?',
        options: [
            'Classes of classes that define how classes behave',
            'Special classes for metadata',
            'Base classes for all objects',
            'Classes that contain other classes'
        ],
        correctAnswer: 0,
        explanation: 'Metaclasses are classes whose instances are classes, allowing customization of class creation.',
        reference: 'Python Metaclasses Documentation',
        tags: ['metaclasses', 'advanced'],
    },
];
export const REACT_QUESTIONS: Question[] = [
    // ==================== REACT (15) ====================
    {
        questionId: 'react-1',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is React?',
        options: [
            'JavaScript library for building user interfaces',
            'Programming language',
            'Database management system',
            'Backend framework'
        ],
        correctAnswer: 0,
        explanation: 'React is a JavaScript library developed by Facebook for building interactive user interfaces, particularly for web applications.',
        reference: 'React Documentation',
        tags: ['react', 'basics'],
    },
    {
        questionId: 'react-2',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is JSX?',
        options: [
            'Syntax extension for JavaScript that looks like HTML',
            'JavaScript XML standard',
            'Java Syntax Extension',
            'JSON XML syntax'
        ],
        correctAnswer: 0,
        explanation: 'JSX is a syntax extension for JavaScript that allows writing HTML-like code in JavaScript, which React then transforms into React elements.',
        reference: 'React JSX Documentation',
        tags: ['jsx', 'syntax'],
    },
    {
        questionId: 'react-3',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are React hooks?',
        options: [
            'Functions that let you use state and lifecycle features in functional components',
            'Tools for hooking into React internals',
            'Methods for handling event hooks',
            'Functions for API hooks'
        ],
        correctAnswer: 0,
        explanation: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components, introduced in React 16.8.',
        reference: 'React Hooks Documentation',
        tags: ['hooks', 'functional-components'],
    },
    {
        questionId: 'react-4',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of useState hook?',
        options: [
            'Add state to functional components',
            'Manage global state',
            'Set up state for class components',
            'Initialize state for entire app'
        ],
        correctAnswer: 0,
        explanation: 'useState is a Hook that lets you add React state to function components, returning the current state value and a function to update it.',
        reference: 'React useState Documentation',
        tags: ['useState', 'hooks', 'state'],
    },
    {
        questionId: 'react-5',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the virtual DOM?',
        options: [
            'Lightweight copy of real DOM for efficient updates',
            'Virtual reality DOM implementation',
            'DOM for virtual elements',
            'Simulated DOM for testing'
        ],
        correctAnswer: 0,
        explanation: 'The virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.',
        reference: 'React Reconciliation',
        tags: ['virtual-dom', 'performance'],
    },
    {
        questionId: 'react-6',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of useEffect hook?',
        options: [
            'Perform side effects in functional components',
            'Measure effect of state changes',
            'Create visual effects',
            'Handle user effect events'
        ],
        correctAnswer: 0,
        explanation: 'useEffect lets you perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.',
        reference: 'React useEffect Documentation',
        tags: ['useEffect', 'hooks', 'side-effects'],
    },
    {
        questionId: 'react-7',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'How do you pass data to a child component?',
        options: [
            'Through props',
            'Using state',
            'Via context',
            'With hooks'
        ],
        correctAnswer: 0,
        explanation: 'Props (properties) are how you pass data from a parent component to a child component in React.',
        reference: 'React Props Documentation',
        tags: ['props', 'components'],
    },
    {
        questionId: 'react-8',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is React context?',
        options: [
            'Way to pass data through component tree without props',
            'Context of current component',
            'Method for contextual rendering',
            'Tool for understanding component context'
        ],
        correctAnswer: 0,
        explanation: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.',
        reference: 'React Context Documentation',
        tags: ['context', 'state-management'],
    },
    {
        questionId: 'react-9',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are higher-order components (HOCs)?',
        options: [
            'Functions that take a component and return a new component',
            'Components that are higher in the tree',
            'Components with higher order logic',
            'Advanced component patterns'
        ],
        correctAnswer: 0,
        explanation: 'A higher-order component is a function that takes a component and returns a new component with additional props or functionality.',
        reference: 'React HOCs Documentation',
        tags: ['hoc', 'patterns'],
    },
    {
        questionId: 'react-10',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which company developed React?',
        options: [
            'Facebook',
            'Google',
            'Microsoft',
            'Amazon'
        ],
        correctAnswer: 0,
        explanation: 'React was developed by Facebook (now Meta) and is maintained by Facebook and the community.',
        reference: 'React History',
        tags: ['react', 'history'],
    },
    {
        questionId: 'react-11',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is React Fiber?',
        options: [
            'New reconciliation algorithm in React',
            'React fiber optic implementation',
            'React networking library',
            'React data fiber structure'
        ],
        correctAnswer: 0,
        explanation: 'Fiber is React\'s new reconciliation algorithm that enables features like incremental rendering, pause, abort, or reuse work as new updates come in.',
        reference: 'React Fiber Architecture',
        tags: ['fiber', 'architecture'],
    },
    {
        questionId: 'react-12',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of keys in React lists?',
        options: [
            'Help React identify which items have changed',
            'Encrypt list data',
            'Sort list items',
            'Provide unique access to list elements'
        ],
        correctAnswer: 0,
        explanation: 'Keys help React identify which items have changed, are added, or are removed, and should be given to elements inside arrays for stable identity.',
        reference: 'React Lists and Keys',
        tags: ['keys', 'lists', 'performance'],
    },
    {
        questionId: 'react-13',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'How do you update state in React?',
        options: [
            'Using setState function or state setter from useState',
            'Directly modifying state object',
            'Using updateState method',
            'Calling render() method'
        ],
        correctAnswer: 0,
        explanation: 'State should never be modified directly. Use setState in class components or the setter function from useState in functional components.',
        reference: 'React State and Lifecycle',
        tags: ['state', 'updating'],
    },
    {
        questionId: 'react-14',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is prop drilling?',
        options: [
            'Passing props through multiple levels of components',
            'Drilling into prop objects',
            'Debugging prop values',
            'Optimizing prop passing'
        ],
        correctAnswer: 0,
        explanation: 'Prop drilling refers to the process of passing props through multiple levels of components in the tree, which can be cumbersome for deep hierarchies.',
        reference: 'React Context Documentation',
        tags: ['props', 'patterns'],
    },
    {
        questionId: 'react-15',
        category: 'react',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are React portals?',
        options: [
            'Way to render children into DOM node outside parent hierarchy',
            'Gateways to other React applications',
            'Portals for routing between pages',
            'Methods for portal-based navigation'
        ],
        correctAnswer: 0,
        explanation: 'Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
        reference: 'React Portals Documentation',
        tags: ['portals', 'dom'],
    },
];
export const NODEJS_QUESTIONS: Question[] = [
    // ==================== NODE.JS (15) ====================
    {
        questionId: 'nodejs-1',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is Node.js?',
        options: [
            'JavaScript runtime built on Chrome\'s V8 engine',
            'JavaScript framework for frontend',
            'Node-based JavaScript language',
            'JavaScript database system'
        ],
        correctAnswer: 0,
        explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine that allows running JavaScript on the server side.',
        reference: 'Node.js Documentation',
        tags: ['nodejs', 'basics'],
    },
    {
        questionId: 'nodejs-2',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is npm?',
        options: [
            'Node Package Manager',
            'Node Project Manager',
            'Node Program Manager',
            'Node Process Manager'
        ],
        correctAnswer: 0,
        explanation: 'npm is the default package manager for Node.js, used to install and manage packages and dependencies.',
        reference: 'npm Documentation',
        tags: ['npm', 'packages'],
    },
    {
        questionId: 'nodejs-3',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the event-driven architecture in Node.js?',
        options: [
            'Architecture where flow is determined by events',
            'Architecture driven by user events',
            'Event-based programming model',
            'Architecture for event handling'
        ],
        correctAnswer: 0,
        explanation: 'Node.js uses an event-driven architecture where certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.',
        reference: 'Node.js Events Documentation',
        tags: ['event-driven', 'architecture'],
    },
    {
        questionId: 'nodejs-4',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of package.json?',
        options: [
            'Manifest file containing project metadata and dependencies',
            'JSON package configuration',
            'File for packaging applications',
            'JSON schema for packages'
        ],
        correctAnswer: 0,
        explanation: 'package.json is a manifest file that contains metadata about the project, including dependencies, scripts, version, and other configuration.',
        reference: 'npm package.json',
        tags: ['package.json', 'configuration'],
    },
    {
        questionId: 'nodejs-5',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the Node.js event loop?',
        options: [
            'Mechanism that handles asynchronous operations',
            'Loop for handling events',
            'Process for event iteration',
            'Method for looping through events'
        ],
        correctAnswer: 0,
        explanation: 'The event loop is what allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel when possible.',
        reference: 'Node.js Event Loop Documentation',
        tags: ['event-loop', 'asynchronous'],
    },
    {
        questionId: 'nodejs-6',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the require() function?',
        options: [
            'Import modules in Node.js',
            'Require certain conditions',
            'Import CSS files',
            'Require user input'
        ],
        correctAnswer: 0,
        explanation: 'require() is used in Node.js to import modules, files, and packages into the current file.',
        reference: 'Node.js Modules Documentation',
        tags: ['require', 'modules'],
    },
    {
        questionId: 'nodejs-7',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which module is used for file system operations?',
        options: [
            'fs',
            'file',
            'filesystem',
            'io'
        ],
        correctAnswer: 0,
        explanation: 'The fs module provides an API for interacting with the file system in Node.js.',
        reference: 'Node.js fs Module',
        tags: ['fs', 'file-system'],
    },
    {
        questionId: 'nodejs-8',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What are streams in Node.js?',
        options: [
            'Objects that let you read/write data continuously',
            'Data streaming services',
            'Streaming video capabilities',
            'Continuous data flow objects'
        ],
        correctAnswer: 0,
        explanation: 'Streams are objects that let you read data from a source or write data to a destination in a continuous fashion.',
        reference: 'Node.js Streams Documentation',
        tags: ['streams', 'io'],
    },
    {
        questionId: 'nodejs-9',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is middleware in Express.js?',
        options: [
            'Functions that have access to request/response objects',
            'Software between frontend and backend',
            'Middle layer in three-tier architecture',
            'Functions in middle of execution'
        ],
        correctAnswer: 0,
        explanation: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application\'s request-response cycle.',
        reference: 'Express.js Middleware',
        tags: ['middleware', 'express'],
    },
    {
        questionId: 'nodejs-10',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which command starts a Node.js application?',
        options: [
            'node app.js',
            'npm start app.js',
            'start node app.js',
            'run node app.js'
        ],
        correctAnswer: 0,
        explanation: 'The "node" command followed by the filename is used to execute a Node.js application.',
        reference: 'Node.js Getting Started',
        tags: ['commands', 'basics'],
    },
    {
        questionId: 'nodejs-11',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is clustering in Node.js?',
        options: [
            'Creating child processes to handle load',
            'Grouping similar nodes together',
            'Clustering data in memory',
            'Grouping related modules'
        ],
        correctAnswer: 0,
        explanation: 'Clustering allows you to create child processes (workers) that share server ports, taking advantage of multi-core systems.',
        reference: 'Node.js Cluster Documentation',
        tags: ['clustering', 'performance'],
    },
    {
        questionId: 'nodejs-12',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of process.env?',
        options: [
            'Access environment variables',
            'Process environmental data',
            'Environment process management',
            'Process environment configuration'
        ],
        correctAnswer: 0,
        explanation: 'process.env returns an object containing the user environment, commonly used to access environment variables in Node.js applications.',
        reference: 'Node.js process.env',
        tags: ['environment-variables', 'configuration'],
    },
    {
        questionId: 'nodejs-13',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'Which framework is commonly used with Node.js for web applications?',
        options: [
            'Express.js',
            'React.js',
            'Django',
            'Spring'
        ],
        correctAnswer: 0,
        explanation: 'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
        reference: 'Express.js Documentation',
        tags: ['express', 'frameworks'],
    },
    {
        questionId: 'nodejs-14',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is callback hell?',
        options: [
            'Nested callbacks making code hard to read',
            'Callback function errors',
            'Hellish callback patterns',
            'Callback debugging challenges'
        ],
        correctAnswer: 0,
        explanation: 'Callback hell refers to heavily nested callbacks that make code difficult to read and maintain, often occurring in asynchronous JavaScript.',
        reference: 'Node.js Callback Hell',
        tags: ['callbacks', 'asynchronous'],
    },
    {
        questionId: 'nodejs-15',
        category: 'nodejs',
        difficulty: 'medium',
        type: 'multiple_choice',
        question: 'What is the purpose of the Buffer class?',
        options: [
            'Handle binary data directly',
            'Buffer I/O operations',
            'Cache data in memory',
            'Buffer network requests'
        ],
        correctAnswer: 0,
        explanation: 'The Buffer class is used to handle binary data directly, providing instances to work with raw memory allocated outside the V8 heap.',
        reference: 'Node.js Buffer Documentation',
        tags: ['buffer', 'binary-data'],
    },
];

// Utility function to get questions by category
export function getQuestionsByCategory(categoryId: string): Question[] {
    switch (categoryId) {
        case 'web':
        case 'web-development':
            return WEB_QUESTIONS;
        case 'mobile':
        case 'mobile-development':
            return MOBILE_QUESTIONS;
        case 'ai':
        case 'ai-machine-learning':
            return AI_QUESTIONS;
        case 'cybersecurity':
            return CYBERSECURITY_QUESTIONS;
        case 'data-science':
            return DATA_SCIENCE_QUESTIONS;
        case 'cloud-devops':
            return CLOUD_DEVOPS_QUESTIONS;
        case 'javascript':
            return JAVASCRIPT_QUESTIONS;
        case 'python':
            return PYTHON_QUESTIONS;
        case 'react':
            return REACT_QUESTIONS;
        case 'nodejs':
            return NODEJS_QUESTIONS;
        default:
            return JAVASCRIPT_QUESTIONS; // Default fallback
    }
}

// Get random questions from a category
export function getRandomQuestionsByCategory(categoryId: string, count: number = 10): Question[] {
    const questions = getQuestionsByCategory(categoryId);
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}