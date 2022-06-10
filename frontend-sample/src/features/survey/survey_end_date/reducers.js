const initialState = "";

export const endDateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_END_DATE":
            return action.endDate;
        default:
            return state;
    }
};
