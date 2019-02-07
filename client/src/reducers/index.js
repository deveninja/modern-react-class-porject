import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import videoReducer from './videoReducer'
import authReducer from './authReducer'
import streamReducer from './streamReducer'
import chatReducer from './chatReducer';

export default combineReducers({
  videos: videoReducer,
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  chats: chatReducer
})