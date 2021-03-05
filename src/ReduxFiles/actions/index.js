import { actions } from '../constants'
export const loading = flag => ({
  type: actions.loading,
  payload: flag
})
export const getTopNews = () => ({
  type: actions.getTopNews
});
export const displayTheseNewsCodes = (payload) => ({
  type: actions.getTopNewsSuccess,
  payload: payload
});
export const getANews = (code) => ({
  type: actions.getANews,
  payload: code
});
export const likeANews = (code) => ({
  type: actions.LikeANews,
  payload: code
});