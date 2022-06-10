import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { setEndDateValue } from "./actions";
import { endDateSelector, endTimeSelector } from "./selectors";

export const EndDateField = () => {
    const endDateValue = useSelector(endDateSelector);
    const endTimeValue = useSelector(endTimeSelector);
    const dispatch = useDispatch();
    const onFieldChange = (newDateValue, newTimeValue) => {
        dispatch(setEndDateValue(newDateValue + "T" + newTimeValue));
    };

    const minDate = () => {
        const today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        return yyyy + "-" + mm + "-" + dd;
    };

    return (
        <div className="field endDateField">
            Podaj datę wygaśnięcia Twojej ankiety:
            <input
                type="date"
                value={endDateValue}
                onChange={(newValue) =>
                    onFieldChange(newValue.target.value, endTimeValue)
                }
                min={minDate()}
            />
            <input
                type="time"
                value={endTimeValue}
                onChange={(newValue) =>
                    onFieldChange(endDateValue, newValue.target.value)
                }
            />
            <br />
        </div>
    );
};
