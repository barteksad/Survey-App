export const endDateSelector = (state) => {
    const toReturn = state.endDate.split("T")[0];
    if (toReturn == undefined) {
        // SPECJALNIE DWA ZNAKI RÓWNA SIĘ
        return "";
    }
    return toReturn;
};

export const endTimeSelector = (state) => {
    const toReturn = state.endDate.split("T")[1];
    if (toReturn == undefined) {
        // SPECJALNIE DWA ZNAKI RÓWNA SIĘ
        return "";
    }
    return toReturn;
};
