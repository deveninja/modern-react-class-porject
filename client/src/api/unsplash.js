import axios from 'axios'

import AUTH from './auth'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {Authorization: AUTH.UNSPLASH_ID}
})