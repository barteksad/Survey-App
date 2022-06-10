import React from "react";
import { useLocation } from "react-router-dom";
import { types } from "../../questionTypes";
import MaterialTable from "material-table";

import "./link.css";

export const LinkPage = function () {
    const form = useLocation().state.form;
    const formId = form._id;

    const generateLinkFillPage = () => {
        return `${window.location.origin}/answer/${formId}`;
    };

    const generateFormStatistics = () => {
        let stats = [];

        stats.push({
            name: "liczba pytań: ",
            value: form.questions.length,
        });

        // inicjujemy licznik zerami
        let typesCount = Object.fromEntries(
            Object.keys(types).map((key) => [key, 0])
        );

        // zliczamy pytania według typu
        for (const question of form.questions) {
            typesCount[question["type"]] += 1;
        }

        // dodajemy zawartość licznika do statystyk
        stats.push(
            ...Object.values(types).map((type) => {
                return {
                    name: `liczba pytań typu ${type}: `,
                    value: typesCount[type],
                };
            })
        );

        let wordCount = 0;

        for (const question of form.questions) {
            wordCount += question.question.split(/\s+/gm).length;
        }

        stats.push({
            name: "liczba słów w pytaniach: ",
            value: wordCount,
        });

        return stats;
    };

    const nameValue = form.name;
    const endDate = form.endDate;
    const fillLink = generateLinkFillPage();
    const stats = generateFormStatistics();

    const columns = [
        { title: "Nazwa statystyki", field: "name" },
        { title: "Wartość", field: "value" },
    ];

    const survey = "Utworzono Ankietę: ";
    document.title = survey + nameValue;

    return (
        <div className="wrapper">
            <div className="survey_finished">
                <div className="field_success">Twoja ankieta:</div>
                <div className="field">
                    <span autoFocus id="nameDisplay" type="text">
                        {nameValue}
                    </span>
                </div>

                <div className="field_link_name">Skopiuj link</div>
                <div className="link_field">
                    <a href={fillLink} className="link" id="link" type="text">
                        {fillLink}
                    </a>
                    <button
                        className="link_copy_button"
                        id="linkCopyButton"
                        onClick={() => navigator.clipboard.writeText(fillLink)}
                    >
                        📋
                    </button>
                </div>

                <div className="stats_table">
                    <MaterialTable
                        style={{ width: "100%" }}
                        title="Statystyki ankiety"
                        data={stats}
                        columns={columns}
                    />
                </div>
                <div className="field">Ankieta wygaśnie:</div>
                <div className="field">
                    <span autoFocus id="endDateInput" type="text">
                        {`${new Date(endDate)}`}
                    </span>
                </div>
            </div>
        </div>
    );
};
