import React from "react";
import PropTypes from "prop-types";

export const AJson = (props) => {
    const curAns = {
        name: props.name,
        answers: props.show,
    };

    // To jest brzydki hack, ale nie umiem inaczej pobrać tych odpowiedzi,
    // bo nie rozumiem, jak działa ta dziadowska zagrywka, co lepiej się
    // w nią nie zagłębiać.
    localStorage.setItem("answers", JSON.stringify(props.show));

    const toDisplay = JSON.stringify(curAns, null, 4);
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
            }}
            spellCheck="false"
            readOnly
            value={toDisplay}
            rows={newlines - 1}
        />
    );
};

AJson.propTypes = {
    show: PropTypes.array,
    name: PropTypes.string,
};
