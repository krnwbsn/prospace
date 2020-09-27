import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import overview from './overview';
import offices from './offices';

const rootReducer = combineReducers({
  form,
  overview,
  offices,
});

export default rootReducer;
