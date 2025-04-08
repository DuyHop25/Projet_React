import axios from 'axios';

const URL = "https://fe21-db.vercel.app"

const HttpRequire = axios.create({
    baseURL : URL
})


export default HttpRequire;
