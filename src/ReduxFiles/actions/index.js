import { actions } from '../constants'
export const loading = flag => ({
  type: actions.loading,
  payload: flag
})
export const getTopNews = () => ({
  type: actions.getTopNews
});
export const getANews = (code) => ({
  type: actions.getANews,
  payload: code
});