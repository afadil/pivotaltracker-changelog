import {combineReducers} from 'redux';
import releases from './releasesReducer';

const rootReducer = combineReducers({
    releases
});

export default rootReducer;