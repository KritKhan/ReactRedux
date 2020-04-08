import axios from 'axios';

const KEY = 'AIzaSyCcERSVP6_81s6aK-EIQmlGhlVyXO2Jb0I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: `${KEY}`
    }
});