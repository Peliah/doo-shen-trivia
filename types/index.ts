// Core User Schema
export interface User {
    userId: string;
    username: string;
    avatar: string;
    techInterests: TechInterest[];
    stats: UserStats;
    achievements: Achievement[];
    friends: string[];
    createdAt: string;
}

export interface UserStats {
    totalGames: number;
    averageScore: number;
    bestScore: number;
    categoryStats: Record<string, CategoryStats>;
}

export interface CategoryStats {
    played: number;
    average: number;
    bestScore: number;
    totalQuestions: number;
    correctAnswers: number;
}

// Tech Interests and Categories
export type TechInterest =
    | 'web'
    | 'mobile'
    | 'ai'
    | 'cybersecurity'
    | 'data-science'
    | 'cloud-devops'
    | 'javascript'
    | 'python'
    | 'react'
    | 'nodejs';

export interface Category {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    techInterest: TechInterest;
}

// Question Schema
export interface Question {
    questionId: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    type: 'multiple_choice' | 'true_false' | 'code_output' | 'fill_blank';
    question: string;
    codeSnippet?: string;
    options: string[];
    correctAnswer: number; // Index of correct option (0-3)
    explanation: string;
    reference?: string;
    tags: string[];
}

// Quiz and Game State
export interface QuizSession {
    sessionId: string;
    userId: string;
    mode: 'single_player' | 'multiplayer';
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    questions: string[]; // Array of question IDs
    answers: Answer[];
    score?: number;
    totalQuestions: number;
    completedAt?: string;
    startTime: string;
    endTime?: string;
    timeTaken?: number;
    isCompleted: boolean;
}

export interface Answer {
    questionId: string;
    selectedAnswer: number; // Index of selected option (0-3)
    isCorrect: boolean;
    timeSpent: number; // Time spent on this question in seconds
}

export interface QuizResult {
    sessionId: string;
    score: number;
    totalQuestions: number;
    timeTaken: number;
    categoryBreakdown: CategoryPerformance[];
    questions: QuestionResult[];
    performanceLevel: PerformanceLevel;
    createdAt: string;
}

export interface QuestionResult {
    question: Question;
    userAnswer: string;
    isCorrect: boolean;
    timeSpent: number;
    explanation: string;
    referenceLink?: string;
}

export interface CategoryPerformance {
    category: string;
    correct: number;
    total: number;
    percentage: number;
}

export type PerformanceLevel =
    | 'Excellent'
    | 'Good'
    | 'Fair'
    | 'Needs Improvement';

// Achievements
export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlockedAt: string;
    category: AchievementCategory;
}

export type AchievementCategory =
    | 'first_quiz'
    | 'perfect_score'
    | 'speed_demon'
    | 'category_master'
    | 'streak'
    | 'social';

// App State
export interface AppState {
    isFirstLaunch: boolean;
    currentUser: User | null;
    isLoading: boolean;
    theme: 'light' | 'dark';
}

// Navigation Types
export type RootStackParamList = {
    Splash: undefined;
    Onboarding: undefined;
    UsernameSetup: undefined;
    Dashboard: undefined;
    QuizLobby: { category?: string };
    Quiz: { sessionId: string };
    Results: { sessionId: string };
    DetailedReview: { sessionId: string };
    Profile: undefined;
};

// Avatar Options
export interface AvatarOption {
    id: string;
    name: string;
    image: any; // React Native ImageSourcePropType
    color: string;
}

// Difficulty Levels
export interface DifficultyLevel {
    id: 'easy' | 'medium' | 'hard';
    name: string;
    description: string;
    color: string;
    estimatedTime: string;
}
