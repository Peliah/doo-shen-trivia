import { Answer, QuizSession } from '@/types';

// Quiz Session Utilities
export const createQuizSession = (
    userId: string,
    category: string,
    difficulty: 'easy' | 'medium' | 'hard',
    questionIds: string[],
    mode: 'single_player' | 'multiplayer' = 'single_player'
): QuizSession => {
    return {
        sessionId: generateSessionId(),
        userId,
        mode,
        category,
        difficulty,
        questions: questionIds,
        answers: [],
        totalQuestions: questionIds.length,
        startTime: new Date().toISOString(),
        isCompleted: false,
    };
};

export const addAnswerToSession = (
    session: QuizSession,
    questionId: string,
    selectedAnswer: number,
    isCorrect: boolean,
    timeSpent: number
): QuizSession => {
    const newAnswer: Answer = {
        questionId,
        selectedAnswer,
        isCorrect,
        timeSpent,
    };

    return {
        ...session,
        answers: [...session.answers, newAnswer],
    };
};

export const completeQuizSession = (session: QuizSession): QuizSession => {
    const correctAnswers = session.answers.filter(answer => answer.isCorrect).length;
    const score = Math.round((correctAnswers / session.totalQuestions) * 100);
    const endTime = new Date().toISOString();
    const timeTaken = Math.round((new Date(endTime).getTime() - new Date(session.startTime).getTime()) / 1000);

    return {
        ...session,
        score,
        completedAt: endTime,
        endTime,
        timeTaken,
        isCompleted: true,
    };
};

// ID Generation Utilities
export const generateUserId = (): string => {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const generateSessionId = (): string => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Performance Calculation Utilities
export const calculatePerformanceLevel = (score: number): 'Excellent' | 'Good' | 'Fair' | 'Needs Improvement' => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
};

export const calculateAverageScore = (scores: number[]): number => {
    if (scores.length === 0) return 0;
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round(sum / scores.length);
};

export const calculateCategoryStats = (results: any[]): Record<string, any> => {
    const stats: Record<string, any> = {};

    results.forEach(result => {
        const category = result.category || 'unknown';
        if (!stats[category]) {
            stats[category] = {
                played: 0,
                totalScore: 0,
                bestScore: 0,
                average: 0,
            };
        }

        stats[category].played += 1;
        stats[category].totalScore += result.score || 0;
        stats[category].bestScore = Math.max(stats[category].bestScore, result.score || 0);
    });

    // Calculate averages
    Object.keys(stats).forEach(category => {
        const stat = stats[category];
        stat.average = stat.played > 0 ? Math.round(stat.totalScore / stat.played) : 0;
    });

    return stats;
};
