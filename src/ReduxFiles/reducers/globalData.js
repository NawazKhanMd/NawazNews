import { actions } from "../constants";

export const initialState = {
    loading: false
};


export const GData = (state = initialState, action) => {
    switch (action.type) {
        case actions.loading:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}
