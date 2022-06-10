import { combineReducers } from "redux";
import { questionsReducer } from "./features/survey/reducers";
import { nameReducer } from "./features/survey/survey_name/reducers";
import { endDateReducer } from "./features/survey/survey_end_date/reducers";

export const createReducer = () => {
    return combineReducers({
        name: nameReducer,
        endDate: endDateReducer,
        questions: questionsReducer,
    });
};
