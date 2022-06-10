import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setNameValue } from "./actions";
import { nameSelector } from "./selectors";

export const NameField = () => {
    const nameValue = useSelector(nameSelector);
    const dispatch = useDispatch();
    const newSurvey = "Nowa Ankieta: ";
    const onFieldChange = (newValue) => {
        dispatch(setNameValue(newValue));
    };

    useEffect(() => {
        document.title = newSurvey + nameValue;
    }, [nameValue]);

    return (
        <div className="field nameField">
            <input
                autoFocus
                id="nameInput"
                type="text"
                placeholder="Enter survey name..."
                value={nameValue}
                onChange={(newValue) => onFieldChange(newValue.target.value)}
            />
        </div>
    );
};
