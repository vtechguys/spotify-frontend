import axios from 'axios';
import config from './config';
import storage from './utils/localStorage';

const instance = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        'Content-Type': 'application/json',
    },
    timeout:60000//1 Min max time out for now
});
instance.interceptors.request.use(config=>{
    console.log(config);
    const userData = storage.get('userData');
    if(userData && userData.sessionId){
        axios.defaults.headers = {
            'Authorization': 'token'+ ' '  + userData.sessionId 
        }
    }
    
    return config;
},error=>{
    console.log("axios interceptor error ",error);
    alert("Oops! Something went wrong");
    return error;
})

export default instance;