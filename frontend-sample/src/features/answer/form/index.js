import React, { useState } from "react";

import { nameSelector, questionsSelector } from "./selectors";
import { useSelector } from "react-redux";
import { Question } from "./question";
import { AJson } from "./jsonAnswer";

export const Form = () => {
    const questions = useSelector(questionsSelector);
    const name = useSelector(nameSelector);
    const [answer, setAnswer] = useState(Array(questions.length).fill(null));

    // to jest tak dziadowska zagrywka, że lepiej się nie zagłębiać w nią
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const setOneAnswer = (index) => (value) => {
        const c_i = index;
        const newAnswer = answer;
        newAnswer[c_i] = value;
        setAnswer(newAnswer);
        forceUpdate();
    };

    const survey = "Ankieta: ";
    document.title = survey + name;

    return (
        <div>
            {questions.map((question, index) => (
                <Question
                    key={index}
                    setAnswer={setOneAnswer(index)}
                    index={String(index + 1)}
                    question={question.question}
                    type={question.type}
                    answers={question.answers}
                />
            ))}
            <AJson show={answer} name={name} />
        </div>
    );
};
