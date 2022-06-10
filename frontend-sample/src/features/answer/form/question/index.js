import React from "react";
import PropTypes from "prop-types";
import { QuestionInput } from "./qi";

export const Question = (props) => {
    return (
        <div className="question-title">
            <div className="question">
                Pytanie {props.index}: {props.question}
            </div>
            <QuestionInput
                setAnswer={props.setAnswer}
                type={props.type}
                answers={props.answers}
                key={props.index}
                index={props.index}
            />
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.string,
    type: PropTypes.string,
    index: PropTypes.string,
    answers: PropTypes.array,
    setAnswer: PropTypes.func,
};
