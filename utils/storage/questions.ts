
// Question Answer Validation
export const validateAnswer = (questionId: string, selectedAnswer: number): boolean => {
    const { getQuestionById } = require('@/constants/data');
    const question = getQuestionById(questionId);
    return question ? question.correctAnswer === selectedAnswer : false;
};

export const getCorrectAnswerIndex = (questionId: string): number | null => {
    const { getQuestionById } = require('@/constants/data');
    const question = getQuestionById(questionId);
    return question ? question.correctAnswer : null;
};

export const getQuestionExplanation = (questionId: string): string => {
    const { getQuestionById } = require('@/constants/data');
    const question = getQuestionById(questionId);
    return question ? question.explanation : '';
};

export const getQuestionReference = (questionId: string): string | undefined => {
    const { getQuestionById } = require('@/constants/data');
    const question = getQuestionById(questionId);
    return question ? question.reference : undefined;
};

// Question Analysis Utilities
export const analyzeQuestionPerformance = (questionId: string, userAnswer: number, timeSpent: number) => {
    const isCorrect = validateAnswer(questionId, userAnswer);
    const correctAnswerIndex = getCorrectAnswerIndex(questionId);

    return {
        questionId,
        userAnswer,
        correctAnswerIndex,
        isCorrect,
        timeSpent,
        explanation: getQuestionExplanation(questionId),
        reference: getQuestionReference(questionId),
    };
};

export const getQuestionDifficultyMultiplier = (difficulty: 'easy' | 'medium' | 'hard'): number => {
    switch (difficulty) {
        case 'easy': return 1;
        case 'medium': return 1.5;
        case 'hard': return 2;
        default: return 1;
    }
};

export const calculateQuestionScore = (
    isCorrect: boolean,
    timeSpent: number,
    difficulty: 'easy' | 'medium' | 'hard',
    maxTime: number = 30
): number => {
    if (!isCorrect) return 0;

    const difficultyMultiplier = getQuestionDifficultyMultiplier(difficulty);
    const timeBonus = Math.max(0, (maxTime - timeSpent) / maxTime);

    return Math.round((1 + timeBonus) * difficultyMultiplier * 10);
};
