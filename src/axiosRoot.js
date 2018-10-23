import axios from 'axios';
import config from './config';
import storage from './utils/localStorage';

const instance = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        'Content-Type':'application/json'
    },
    timeout:60000//1 Min max time out for now
});


instance.interceptors.request.use(config=>{
    console.log("Trying to config middleware/interceptors")
    const userData = storage.get('profile');
    let profile = null;
    try{
        profile = JSON.parse(userData);
        if(profile && profile.sessionId && typeof(profile)==="object"){
            config.headers['Authorization'] = 'token '  + profile.sessionId;
        }
        
        console.log("request middleware/intercepters configurations",config);
     
    }
    catch(exp){
        console.log("expception parsing JSON",exp);
        
    }
    return config;
},error=>{
    console.log("axios request interceptor error ",error);
    alert("Oops! Something went wrong");
    return error;
});






export default instance;