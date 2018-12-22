import axios from 'axios'

const KEY = 'AIzaSyDrQ_lXK91zMKG34PBeJrR6_u_4bextTpY'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 25,
    key: KEY
  }
  
})