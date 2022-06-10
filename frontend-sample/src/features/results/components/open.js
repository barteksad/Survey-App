import React from "react";
import PropTypes from "prop-types";

export const Open = (props) => {
    return (
        <div className="open_results">
            <span className="open_question">{props.question}</span>
            <div className="open_answers">
                <ul>
                    {props.votes.map((vote, index) => {
                        return <li key={vote + index}>{vote}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

Open.propTypes = {
    question: PropTypes.string,
    answers: PropTypes.array,
    votes: PropTypes.array,
};
