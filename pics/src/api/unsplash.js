import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XLPAGoj1dSzlsLwtR4zY4jvXIscOq1h0E1WmpMRHuB0'
    }
});

