import React from "react";
import axios from "axios";

import { NameField } from "./survey_name";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Form } from "./form";
import { backendUrl, submitAnswer, getForm } from "../../routes";
import { loadForm } from "../survey/actions";
import { setNameValue } from "../survey/survey_name/actions";

export const AnswerPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formId = location.href.split("/").pop();

    const back = () => {
        navigate("/create-survey");
    };

    const show_results = () => {
        navigate(`/results/${formId}`);
    };

    const getSurvey = async () => {
        axios
            .get(backendUrl + getForm + formId)
            .then((res) => {
                dispatch(
                    setNameValue(
                        res.data?.formName ??
                            "this survey has no name field because backend hadn't support it when it was created"
                    )
                );
                dispatch(loadForm(res.data.questions));
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
            });
    };

    const postAnswers = async () => {
        // To jest brzydki hack, ale nie umiem inaczej pobrać tych odpowiedzi,
        // bo nie rozumiem, jak działa ta dziadowska zagrywka, co lepiej się
        // w nią nie zagłębiać.
        const answers = JSON.parse(localStorage.getItem("answers"));

        axios
            .post(backendUrl + submitAnswer, {
                formId,
                answers,
            })
            .then(() => {
                alert("Odpowiedź zapisana!");
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
                alert("Wystąpił błąd :(");
            });
    };

    return (
        getSurvey(),
        (
            <div className="survey_content">
                <div className="survey_header">
                    <NameField />
                </div>
                <div className="survey">
                    <div className="field_success">Wypełnij ankietę</div>
                    <Form />
                    {/* wstecz raczej jest do usunięcia */}
                    <button className="surveyButton" onClick={back}>
                        Wstecz
                    </button>
                    <button className="surveyButton" onClick={postAnswers}>
                        Wyślij
                    </button>
                    <button className="surveyButton" onClick={show_results}>
                        Wyniki
                    </button>
                </div>
            </div>
        )
    );
};
