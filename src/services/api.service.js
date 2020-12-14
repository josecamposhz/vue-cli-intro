import axios from 'axios';

const baseURL = 'https://restcountries.eu/rest/v2/all';

export default axios.create({
    baseURL,
});