export const questionsSelector = (state) => state.questions;

export const answerSelector = (state, index, ans_index) =>
    state.questions[index].answers[ans_index];

export const questionNameSelector = (state, index) =>
    state.questions[index].question;

export const allAnswersSelector = (state, index) =>
    state.questions[index].answers;

export const questionAmountSelector = (state) => state.questions.length;

export const isCorrectSelector = (state) => {
    return state.questions.every((question) => {
        return question.type === "OPEN" || question.answers.length >= 2;
    });
};
