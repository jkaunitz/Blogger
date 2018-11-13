import { combineReducers } from 'redux';

import { reducer as form} from 'redux-form';

import auth from './authReducer';
import blogs from './blogReducer';
import requests from './requestsReducer';
import header from './headerReducer';

const rootReducer = combineReducers({
  form,
  auth,
  blogs,
  requests,
  header
});

export default rootReducer;