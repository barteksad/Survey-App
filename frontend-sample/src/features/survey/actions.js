export const addNewQuestionName = (index, question) => ({
    type: "ADD_NEW_QUESTION_NAME",
    index,
    question,
});

export const addNewAnswer = (index, answer) => ({
    type: "ADD_NEW_ANSWER",
    index,
    answer,
});

export const deleteQuestion = (index) => ({
    type: "DELETE_QUESTION",
    index,
});

export const deleteAnswer = (index, ans_index) => ({
    type: "DELETE_ANSWER",
    index,
    ans_index,
});

export const changeQuestionType = (index, questionType) => ({
    type: "CHANGE_QUESTION_TYPE",
    index,
    questionType,
});

export const deleteAllAnswers = (index) => ({
    type: "DELETE_ALL_ANSWERS",
    index,
});

export const loadForm = (questions) => ({
    type: "LOAD_FORM",
    questions,
});
