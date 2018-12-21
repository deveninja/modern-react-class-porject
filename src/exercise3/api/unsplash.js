import axios from 'axios'
import AUTH from '../constants';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {Authorization: AUTH.id}
})