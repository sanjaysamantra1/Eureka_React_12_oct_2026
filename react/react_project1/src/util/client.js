import axios from 'axios';
import { authInterceptor } from './authInterceptor';
import { errorHandler } from './errorInterceptor';
import { retry } from './retry';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: { accept: "Application/json" }
});
// client.interceptors.request.use(authInterceptor);
// client.interceptors.response.use(response=>response , errorHandler);
client.interceptors.response.use(response => response, retry);

export default client;