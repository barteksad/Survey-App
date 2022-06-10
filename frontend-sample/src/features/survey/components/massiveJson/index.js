import React from "react";
import { useSelector } from "react-redux";

export const MassiveJson = () => {
    const curState = useSelector((state) => state);

    const toDisplay = JSON.stringify(curState, null, 4);
    const newlines = toDisplay.split(/\r\n|\r|\n/).length;
    return (
        <textarea
            style={{
                width: "700px",
                marginLeft: "30px",
                marginTop: "50px",
                marginBottom: "30px",
                resize: "none",
                backgroundColor: "#ffccff",
                color: "black",
                // display: "none",
            }}
            spellCheck="false"
            readOnly
            value={toDisplay}
            rows={newlines - 1}
        />
    );
};
