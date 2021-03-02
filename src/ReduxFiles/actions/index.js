import { actions } from '../constants'
export const loading = flag => ({
  type: actions.loading,
  payload: flag
})
export const getNews = () => ({
  type: actions.getNews
})