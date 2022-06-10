const initialState = [
    {
        type: "OPEN",
        question: "",
        answers: [],
    },
    {
        type: "OPEN",
        question: "",
        answers: [],
    },
];

export const questionsReducer = (state = initialState, action) => {
    let newState = [...state];
    switch (action.type) {
        case "ADD_NEW_QUESTION":
            return [
                ...state,
                {
                    type: "OPEN",
                    question: "",
                    answers: [],
                },
            ];
        case "ADD_NEW_QUESTION_NAME":
            newState[action.index].question = action.question;
            return newState;
        case "ADD_NEW_ANSWER":
            newState[action.index].answers = [
                ...newState[action.index].answers,
                action.answer,
            ];
            return newState;
        case "DELETE_QUESTION":
            newState.splice(action.index, 1);
            return newState;
        case "DELETE_ANSWER":
            newState[action.index].answers.splice(action.ans_index, 1);
            return newState;
        case "CHANGE_QUESTION_TYPE": {
            let new_question = newState[action.index];
            new_question.type = action.questionType;
            newState[action.index] = new_question;
            return newState;
        }
        case "DELETE_ALL_ANSWERS":
            newState[action.index].answers.length = 0;
            return newState;
        case "LOAD_FORM":
            return action.questions;
        default:
            return state;
    }
};
