import { actions } from "../constants";

export const initialState = {
    loading: false,
    TopNewsCodes: [],
    LkedNewsCodes: [],
    NewsData: {},
};


export const GData = (state = initialState, action) => {
    switch (action.type) {
        case actions.loading:
            return { ...state, loading: action.payload }
        case actions.getTopNewsSuccess:
            return { ...state, TopNewsCodes: action.payload }
        case actions.getTopNewsFailure:
            return { ...state, TopNewsCodes: null }
        case actions.getANewsSuccess:
            state.NewsData[action.payload.id] = action.payload
            return { ...state }
        case actions.getANewsFailure:
            state.NewsData[action.payload.id] = { title: "Error Occurrend" }
            return { ...state }
        case actions.LikeANews:
            if (state.LkedNewsCodes.indexOf(action.payload) === -1) {
                state.LkedNewsCodes.push(action.payload);
            }
            return { ...state }
        default:
            return state
    }
}
