const axios = require('axios');

export const apiInstance = axios.create({
    baseURL: 'https://lgp5dapi.herokuapp.com',
    credentials: "same-origin",
    crossDomain: true,
    timeout: 15000
});