import * as types from './actionTypes';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
const projectCode = process.env.REACT_APP_PROJECT_CODE;

export const fetchReleaseSuccess = (releases) => {
  return {
    type: types.FETCH_RELEASES_SUCESS,
    releases
  }
};

export const fetchReleaseError = (error) => {
  return {
    type: types.FETCH_RELEASES_ERROR,
    error
  }
};

export const fetchStoriesSuccess = (releaseId, stories) => {
  return {
    type: types.FETCH_STORIES_SUCESS,
    id:releaseId,
    stories
  }
};

export const fetchStoriesError = (releaseId,error) => {
  return {
    type: types.FETCH_STORIES_ERROR,
    id:releaseId,
    error
  }
};

export const fetchReleases = () => {
  return (dispatch) => {
    dispatch({type: types.FETCH_RELEASES_START});

    return axios.get(apiUrl+"/projects/"+projectCode+"/stories?filter=type%3Arelease", {responseType: 'json'})
      .then(response => {
        dispatch(fetchReleaseSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchReleaseError(error));
        throw(error);
      });
  };
};

export const fetchStories = (releaseId) => {
  return (dispatch) => {
    // Returns a promise
    return axios.get(apiUrl+"/projects/"+projectCode+"/releases/"+ releaseId +"/stories", {responseType: 'json'})
      .then(response => {
        dispatch(fetchStoriesSuccess(releaseId, response.data))
      })
      .catch(error => {
        dispatch(fetchStoriesError(releaseId, error))
        throw(error);
      });
  };
};
