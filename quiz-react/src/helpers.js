export const shuffleAnswers = (question) => {
    // Combine correct and incorrect answers and shuffle them randomly.
    const unshuffledAnswers = [
        question.correctAnswer,
        ...question.incorrectAnswers,
    ];

    return unshuffledAnswers
        .map((unshuffledAnswer) => ({
            // Assign a random value for sorting.
            sort: Math.random(),
            value: unshuffledAnswer,
        }))
        // Sort by the random value.
        .sort((a, b) => a.sort - b.sort)
        // Extract the shuffled values.
        .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
    if (!Array.isArray(backendQuestions)) {
        throw new Error("Invalid data: backendQuestions must be an array");
    }

    return backendQuestions.map((backendQuestion) => {
        if (
            !backendQuestion.correct_answer ||
            !backendQuestion.incorrect_answers ||
            !backendQuestion.question
        ) {
            throw new Error("Invalid question format in backendQuestions");
        }

        const incorrectAnswers = backendQuestion.incorrect_answers.map(
            (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
        );

        return {
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question: decodeURIComponent(backendQuestion.question),
            incorrectAnswers,
        };
    });
};