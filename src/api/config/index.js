import axios from "axios";




/**
 * 题库基础路径
 * @type {string}
 */
const BASE_URL = 'http://222.22.63.178/student';
const COOKIE = 'zdyj2web=d5b67059-7103-47bc-bd48-2fd750b8fbab.null';


axios.interceptors.request.use(config=>{
    config.headers.set('Cookie',COOKIE);
    config.baseURL;
    return config;
})


export function get(url,data){
    return axios.get(url, data);
}

export function post(url,data){
    return axios.post(url, data);
}

