import API from '../axiosRoot';
import storage from '../utils/localStorage';
const script = {
    checkSession:function(){
        console.log("start script check sesion")
        return API.post('webindex',{
        
        })
        .then(success=>{
            console.log("webindex success ",success);
            let data = success.data;
            if(data && data.code===200 && data.success===true){
                storage.store("token",data.profile.sessionId);
                return Promise.resolve(data);
            }
            else{
                storage.clear();
                
                return Promise.resolve(data);

            }
        })
        .catch(error=>{
            console.log("webindex error ",error);
            
            return Promise.reject(error);

        })
    }
}

export default script;