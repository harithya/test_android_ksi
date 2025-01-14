import axios from 'axios';
import {BASE_URL} from '../utils/constant';

const http = axios.create({
  baseURL: BASE_URL + '/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
