import { config } from '../config.js';
const axios = require('axios');


export const apiInstance = axios.create({
    baseURL: config.BASE_URL,
    withCredentials: true,
    credentials: "same-origin",
    crossDomain: true,
    timeout: 15000,
    headers: {
      
    
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    },
});