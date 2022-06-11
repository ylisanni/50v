import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
    baseURL: apiUrl,
    timeout: 120,
    responseType: 'json',
    headers: {"Content-Type": "application/json"},
});
