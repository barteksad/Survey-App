import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const QuestionInput = (props) => {
    const setAnswer = props.setAnswer;

    const handleSingleChange = (newValue) => {
        setAnswer(parseInt(newValue.target.value));
    };

    // MULTI
    const [checkboxState, setCheckboxState] = useState(
        Array(props.answers.length).fill(false)
    );

    useEffect(() => {
        setCheckboxState(Array(props.answers.length).fill(false));
    }, [props.answers.length]);

    const handleCheckboxChange = (newValue) => {
        const changed = parseInt(newValue.target.value);
        const updateCState = checkboxState.map((item, index) => {
            return index === changed ? !item : item;
        });

        setCheckboxState(updateCState);
        const goodFormat = updateCState.map((item, index) =>
            item ? index + 1 : null
        );
        setAnswer(goodFormat.filter(Number).map((item) => item - 1));
    };

    if (props.type === "OPEN") {
        return (
            <div className="question-title">
                <input
                    id="textInput"
                    className="question-title-input"
                    type="text"
                    placeholder="Enter text..."
                    onChange={(newValue) => setAnswer(newValue.target.value)}
                />
            </div>
        );
    }

    if (props.type === "SINGLE") {
        return (
            <div className="field">
                {props.answers.map((answer, index) => (
                    <div className="radio-answer" key={index}>
                        <label className="radio-text">{answer}</label>
                        <input
                            className="radio-button"
                            type="radio"
                            name={props.index}
                            value={index}
                            key={index}
                            onChange={handleSingleChange}
                        />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="field">
            {props.answers.map((answer, index) => (
                <div
                    className="radio-answer"
                    key={index}
                    onChange={handleCheckboxChange}
                >
                    <label className="radio-text">{answer}</label>
                    <input
                        className="radio-button"
                        type="checkbox"
                        name="answer"
                        value={index}
                    />
                </div>
            ))}
        </div>
    );
};

QuestionInput.propTypes = {
    type: PropTypes.string,
    setAnswer: PropTypes.func,
    answers: PropTypes.array,
    index: PropTypes.string,
};
