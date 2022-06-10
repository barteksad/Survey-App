const initialState = "";

export const nameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_NAME":
            return action.name;
        default:
            return state;
    }
};
