const videoReducer = (state = [], action ) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return [...state, action.payload]
    default:
      return state
  }
}

export default videoReducer