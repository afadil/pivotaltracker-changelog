import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function releases(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_RELEASES_START:
      return state;
    case types.FETCH_RELEASES_SUCESS:
      return Object.assign({}, state, {
        releasesList: action.releases
      })
    case types.FETCH_RELEASES_ERROR:
      return state;
    case types.FETCH_STORIES_START:
      return state;
    case types.FETCH_STORIES_SUCESS:
      return Object.assign({}, state, {
        releasesList: state.releasesList.map((release) => {
          if (release.id === action.id)  {
            return Object.assign({}, release, {
              stories: action.stories
            })
          }
          return release
        })
      })

    case types.FETCH_STORIES_ERROR:
      return state;
      
    default:
      return state;
  }
}