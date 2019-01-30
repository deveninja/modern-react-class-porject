/*
  ===================================================================
    Centralized API calls using Axios library
  ===================================================================
*/

import jsonPlaceholder from "./jsonPlaceholder"
import unsplash from "./unsplash"
import streams from "./streams"

const api = {
  jsonPlaceholder: jsonPlaceholder,
  unsplash: unsplash,
  streams: streams
}

export default api