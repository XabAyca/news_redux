import { FETCH_NEWS_FAILED, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "./newsTypes"

export const fetchNewsRequest = () => {
  return {
    type:FETCH_NEWS_REQUEST
  }
}
export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    news
  }
}
export const fetchNewsFailed = (error) => {
  return {
    type: FETCH_NEWS_FAILED,
    error
  }
}