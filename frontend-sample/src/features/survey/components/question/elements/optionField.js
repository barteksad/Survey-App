import React from "react";
import { useDispatch } from "react-redux";
import { deleteAnswer } from "../../../actions";
import { useSelector } from "react-redux";
import { answerSelector } from "../../../selectors";
import PropTypes from "prop-types";

export const OptionField = (props) => {
    const value = useSelector((state) =>
        answerSelector(state, props.index, props.ans_index)
    );

    const dispatch = useDispatch();

    return (
        <div className="field ready">
            {value}
            <button
                className="surveyButton"
                onClick={() =>
                    dispatch(deleteAnswer(props.index, props.ans_index))
                }
            >
                Usuń
            </button>
        </div>
    );
};

OptionField.propTypes = {
    index: PropTypes.string,
    type: PropTypes.string,
    ans_index: PropTypes.string,
};
