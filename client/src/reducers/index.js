import { combineReducers } from 'redux';
import company from './company';
import office from './office';

const rootReducer = combineReducers({
  company,
  office,
});

export default rootReducer;
