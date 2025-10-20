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
    id: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    question: string;
    codeSnippet?: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    referenceLink?: string;
    tags: string[];
}

// Quiz and Game State
export interface QuizSession {
    id: string;
    userId: string;
    category: string;
    difficulty: 'easy' | 'medium' | 'hard';
    questions: Question[];
    answers: Answer[];
    startTime: string;
    endTime?: string;
    score?: number;
    timeTaken?: number;
    isCompleted: boolean;
}

export interface Answer {
    questionId: string;
    selectedAnswer: string;
    isCorrect: boolean;
    timeSpent: number;
    timestamp: string;
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
    emoji: string;
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
