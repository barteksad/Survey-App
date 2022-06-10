import { React, useState } from "react";
import { NameField } from "./survey_name";
import { EndDateField } from "./survey_end_date";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "./components";
import axios from "axios";
import { backendUrl, createForm } from "../../routes";
import { isCorrectSelector } from "./selectors";
import FlashMessage from "react-flash-message";

export const Survey = () => {
    const navigate = useNavigate();
    const form = useSelector((state) => state);
    const correctnessResult = useSelector(isCorrectSelector);
    const checkCorrectness = () => correctnessResult;
    const [doFlash, setDoFlash] = useState(false);

    const postForm = async () => {
        if (!checkCorrectness()) {
            setDoFlash(true);
            console.log("Inproper form (You must fill at least two answers)");
            return;
        }

        axios
            .post(backendUrl + createForm, { ...form })
            .then((res) => {
                navigate("/survey-created", { state: { form: res.data } });
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data);
                alert("Wystąpił błąd :(");
            });
    };

    const newSurvey = "Nowa Ankieta: ";
    document.title = newSurvey;

    return (
        <div className="survey_content">
            {doFlash && (
                <FlashMessage duration={3000}>
                    <strong>
                        Pytania muszą mieć co najmniej dwie odpowiedzi!
                    </strong>
                    <p hidden>
                        {setTimeout(() => {
                            setDoFlash(false);
                        }, 3000)}
                    </p>
                </FlashMessage>
            )}
            <div className="survey_header">
                <NameField />
            </div>
            <div className="survey">
                <EndDateField />
                <Form />
                <button className="surveyButton dalej" onClick={postForm}>
                    Utwórz ankietę
                </button>
            </div>
        </div>
    );
};
