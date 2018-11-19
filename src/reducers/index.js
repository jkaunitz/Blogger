import { combineReducers } from 'redux';

import { reducer as form} from 'redux-form';

import auth from './authReducer';
import blogs from './blogReducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  form,
  auth,
  blogs,
  header
});

export default rootReducer;