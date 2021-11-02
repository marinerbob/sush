import axios from 'axios';
import { BaseAPI } from './types';

export default class BaseJsonAPI implements BaseAPI {
  client = axios.create({
    baseURL: 'my-json-server.typicode.com/marinerbob/sush',
  });
}
