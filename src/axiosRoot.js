import axios from 'axios';
import config from './config';
import storage from './utils/localStorage';

const instance = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:10000//10s max time out for now
});


instance.interceptors.request.use(config=>{
    console.log("Trying to config interceptors ",config)
    const token = storage.get('token');
    
    if(token){
        config.headers.common['Authorization'] = 'token '  + token;
    }
        
     
    
    console.log("request middleware/intercepters configurations",config);

    return config;
},error=>{
    console.log("axios request interceptor error ",error);
    alert("Oops! Something went wrong");
    return error;
});






export default instance;