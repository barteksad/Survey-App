import React from "react";

import { useSelector } from "react-redux";
import { nameSelector } from "./selectors";

export const NameField = () => {
    const nameValue = useSelector(nameSelector);

    return (
        <div className="field nameField">
            <div className="name-text">{nameValue}</div>
        </div>
    );
};
