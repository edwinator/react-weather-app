import axios from 'axios';

const API_KEY = '0866fc5825da2fb1c337ddb52ab4b94a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // axios request returns a promise
  // console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
