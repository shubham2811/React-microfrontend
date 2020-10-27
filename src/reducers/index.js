import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { menuReducer } from './Menu.reducer';
export default combineReducers({
  menu: menuReducer,
  form: reduxFormReducer,
});
