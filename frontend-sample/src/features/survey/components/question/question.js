import React from "react";
import { OptionField } from "./elements/optionField";
import { InsertField } from "./elements/insertField";
import { QuestionNameField } from "./elements/questionNameField";
import {
    changeQuestionType,
    deleteAllAnswers,
    deleteQuestion,
} from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { types } from "../../../../questionTypes";
import { questionAmountSelector } from "../../selectors";

export const Question = (props) => {
    const dispatch = useDispatch();

    const questionsAmount = useSelector(questionAmountSelector);

    let options = [];
    if (props.type !== "OPEN") options = props.answers;

    const handleChange = (newState) => {
        dispatch(changeQuestionType(props.index, newState.target.value));
        if (newState.target.value === "OPEN") {
            dispatch(deleteAllAnswers(props.index));
        }
    };

    return (
        <div className="q_margin">
            <div className="question-type-selector">
                <div className="question-type-selector-label">
                    <span
                        style={{
                            display: "inline-block",
                        }}
                    >
                        <label
                            style={{
                                marginRight: "10px",
                            }}
                        >
                            Pytanie {props.index + 1}
                        </label>
                        <select
                            className="type-select"
                            onChange={handleChange}
                            value={props.type}
                        >
                            {Object.values(types).map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <button
                    className="surveyButton"
                    onClick={() => {
                        dispatch(deleteQuestion(props.index));
                        props.setDisability();
                    }}
                    disabled={props.shallBeDisabled || questionsAmount <= 2}
                >
                    X
                </button>
            </div>

            <QuestionNameField index={String(props.index)} />
            {options.map((answer, index) => (
                <OptionField
                    key={String(index)}
                    ans_index={String(index)}
                    index={String(props.index)}
                    value={answer}
                />
            ))}
            <InsertField type={props.type} index={String(props.index)} />
        </div>
    );
};

Question.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
    answers: PropTypes.array,
    shallBeDisabled: PropTypes.bool,
    setDisability: PropTypes.func,
};
