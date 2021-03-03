import { actions } from "../constants";

export const initialState = {
    loading: false,
    TopNewsCodes: []
};


export const GData = (state = initialState, action) => {
    switch (action.type) {
        case actions.loading:
            return { ...state, loading: action.payload }
        case actions.getTopNewsSuccess:
            return { ...state, TopNewsCodes: action.payload }
        case actions.getTopNewsFailure:
            return { ...state, TopNewsCodes: null }
        default:
            return state
    }
}
