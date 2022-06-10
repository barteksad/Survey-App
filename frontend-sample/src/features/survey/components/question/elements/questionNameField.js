import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewQuestionName } from "../../../actions";
import { questionNameSelector } from "../../../selectors";
import PropTypes from "prop-types";

export const QuestionNameField = (props) => {
    const dispatch = useDispatch();
    const questionValue = useSelector((state) =>
        questionNameSelector(state, props.index)
    );

    const onFieldChange = (newValue) => {
        dispatch(addNewQuestionName(props.index, newValue));
    };

    return (
        <div className="question-title">
            <input
                type="text"
                className="question-title-input"
                placeholder="Wpisz swoje pytanie..."
                value={questionValue}
                onChange={(newValue) => onFieldChange(newValue.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        dispatch({ type: "ADD_NEW_QUESTION" });
                    }
                }}
            />
        </div>
    );
};

QuestionNameField.propTypes = {
    index: PropTypes.string,
};
