import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import videoReducer from './videoReducer'
import authReducer from './authReducer'

export default combineReducers({
  videos: videoReducer,
  auth: authReducer,
  form: formReducer
})