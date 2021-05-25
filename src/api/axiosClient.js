import axios from 'axios';

export const axiosClient = axios.create({
    // baseURL: 'https://6008fbda0a54690017fc28b0.mockapi.io/',
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});