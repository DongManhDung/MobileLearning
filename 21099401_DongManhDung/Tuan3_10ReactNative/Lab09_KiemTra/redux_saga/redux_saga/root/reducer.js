import { combineReducers } from 'redux';
import jobReducer from '../handle/jobReducer.js';

const rootReducer = combineReducers({
  jobCreate: jobReducer,
});

export default rootReducer;