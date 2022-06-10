import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionsSelector } from "../selectors";
import { MassiveJson } from "./massiveJson";
import { Question } from "./question/question";

export const Form = () => {
    const questions = useSelector(questionsSelector);

    const [disability, setDisability] = React.useState(questions.length < 2);

    const dispatch = useDispatch();

    const random_number = Math.random();

    const handleNewQuestionClick = () => {
        dispatch({ type: "ADD_NEW_QUESTION" });
        setDisability(questions.length < 2);
    };

    const refreshSet = () => setDisability(questions.length < 2);

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    index={index}
                    question={question.question}
                    type={question.type}
                    answers={question.answers}
                    shallBeDisabled={disability}
                    setDisability={refreshSet}
                />
            ))}
            <button
                className="surveyButton"
                onClick={() => handleNewQuestionClick()}
            >
                Dodaj nowe pytanie
            </button>
            <MassiveJson funny_number={random_number} />
        </div>
    );
};
