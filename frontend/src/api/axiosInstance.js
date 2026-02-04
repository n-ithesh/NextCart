import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nextcart-4grz.onrender.com/api', // baseURL as per requirement
});

api.interceptors.request.use((config) => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    if (userInfo && userInfo.token) {
        config.headers.Authorization = `Bearer ${userInfo.token}`;
    }
    return config;
});

export default api;
