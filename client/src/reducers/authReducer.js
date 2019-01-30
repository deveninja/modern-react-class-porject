import { SIGN_IN, SIGN_OUT } from "../actions/constants";

const INITIAL_STATE = {
  isSignedIn: null,
  userInfo: null
}

const authReducer = (state = INITIAL_STATE, action) => {
 switch (action.type) {
  case SIGN_IN:
    return { ...state, isSignedIn: true, userInfo: action.payload }
  case SIGN_OUT:
    return { ...state, isSignedIn: false, userInfo: null } 
  default:
    return state
 }
}

export default authReducer