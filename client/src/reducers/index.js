import { combineReducers } from 'redux';
import overview from './overview';
import offices from './offices';

const rootReducer = combineReducers({
  overview,
  offices,
});

export default rootReducer;
