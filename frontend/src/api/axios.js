import axios from 'axios';
const BASE_URL = 'https://localhost:8080';

if(process.env.NODE_ENV === "production"){
    BASE_URL = `${req.protocol}://${req.get('host')}`
}

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});