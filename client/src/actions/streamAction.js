import api from '../api'
import { 
   CREATE_STREAM,
   EDIT_STREAM,
   DELETE_STREAM,
   FETCH_STREAM,
   FETCH_STREAMS
} from './constants'


// Create a new stream
export const createStream = formValues => async (dispatch, getState) => {
   const { userInfo } = getState().auth
   const response = await api.streams.post('/streams', { ...formValues, userInfo })
   dispatch({ type: CREATE_STREAM, payload: response.data })
}

// Fetch all streams
export const fetchStreams = () => async dispatch => {
   const response = await api.streams.get('/streams')
   dispatch({ type: FETCH_STREAMS, payload: response.data })
}

// Fetch a single stream
export const fetchStream = id => async dispatch => {
   const response = await api.streams.get(`/streams${id}`)
   dispatch({ type: FETCH_STREAM, payload: response.data })
}

// Edit a stream
export const editStream = (id, formValues) => async dispatch => {
   const response = await api.streams.put(`/streams${id}`, formValues)
   dispatch({ type: EDIT_STREAM, payload: response.data })
}

// Delete a stream
export const deleteStream = id => async dispatch => {
   await api.streams.delete(`/streams${id}`)
   dispatch({ type: DELETE_STREAM, payload: id })
}