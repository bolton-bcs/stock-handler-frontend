import axios from "axios";

//base_url
const instance = axios.create({
    //baseURL
    baseURL: 'https://stock-handler-backend-5ff7a7718494.herokuapp.com/api/'
    // Header
    // timeout
})
export default instance;