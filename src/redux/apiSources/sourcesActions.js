import { FETCH_SOURCES_FAILED, FETCH_SOURCES_REQUEST, FETCH_SOURCES_SUCCESS } from "./sourcesTypes"

export const fetchSourcesRequest = () => {
  return {
    type:FETCH_SOURCES_REQUEST
  }
}
export const fetchSourcesSuccess = (sources) => {
  return {
    type: FETCH_SOURCES_SUCCESS,
    sources
  }
}
export const fetchSourcesFailed = (error) => {
  return {
    type: FETCH_SOURCES_FAILED,
    error
  }
}