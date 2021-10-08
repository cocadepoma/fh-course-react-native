import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'bace800d5493dcc9a0348cd754976608',
        language: 'es_ES',
    },
});

export default movieDB;