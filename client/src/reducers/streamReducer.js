import { 
   CREATE_STREAM,
   EDIT_STREAM,
   DELETE_STREAM,
   FETCH_STREAM,
   FETCH_STREAMS
} from '../actions/constants'

const streamReducer = (state = {}, action) => {
   switch (action.type) {
      case FETCH_STREAM:
         return { ...state, [action.payload.id]: action.payload }
         
      case CREATE_STREAM:
         return { ...state, [action.payload.id]: action.payload }

      case EDIT_STREAM:
         return { ...state, [action.payload.id]: action.payload }

      case DELETE_STREAM:
         return { ...state, id: action.payload }

      case FETCH_STREAMS:
         return { ...state, ...Object.values(action.payload) }
   
      default:
         return state
   }
   
}

export default streamReducer