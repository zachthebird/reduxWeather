import axios from 'axios';

const API_KEY = '82d3240ca6c614688efba362852de939';
const queryString = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${queryString}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);
    
    return ({
        type: FETCH_WEATHER,
        payload: request
    })
};

