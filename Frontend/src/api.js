import axios from "axios";

const api = axios.create({
    baseURL: 'https://simple-workout-manager-backend.vercel.app', // Replace with your backend URL + '/api'
    withCredentials: true
});

export default api;