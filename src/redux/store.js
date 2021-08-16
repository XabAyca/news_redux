import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { fetchReducer } from "./apiNews/newsReducer";
import thunkMiddleware from 'redux-thunk';
import { fetchNewsFailed, fetchNewsRequest, fetchNewsSuccess } from "./apiNews/newsActions";
import { fetchSourcesRequest, fetchSourcesSuccess, fetchSourcesFailed } from "./apiSources/sourcesActions";
import { fetchSourcesReducer } from "./apiSources/sourcesReducer";

const rootReducers = combineReducers({
  news: fetchReducer,
  sources: fetchSourcesReducer
})

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const fetchNews = (options='q=reactjs&') => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    fetch(
      `http://newsapi.org/v2/everything?${options}sortBy=publishedAt&apiKey=4048ceb774ee4aee9a39b6b0d01421f2`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchNewsFailed(response.message));
        } else {
          dispatch(fetchNewsSuccess(response.articles));
        }
      })
  }
}

const fetchSources = () => {
  return (dispatch) => {
    dispatch(fetchSourcesRequest());
    fetch(
      "https://newsapi.org/v2/top-headlines/sources?language=fr&apiKey=4048ceb774ee4aee9a39b6b0d01421f2"
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "error") {
          dispatch(fetchSourcesFailed(response.message));
        } else {
          dispatch(fetchSourcesSuccess(response.sources));
        }
      })
  }
}


store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchNews())
store.dispatch(fetchSources())
