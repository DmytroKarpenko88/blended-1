import axios from 'axios';

export const apiDummyJSON = axios.create({
  baseURL: 'https://dummyjson.com',
});
