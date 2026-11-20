import axios from 'axios';

const client = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`,
    timeout: 10000,
    headers: { accept: "Application/json" }
});
export default client;