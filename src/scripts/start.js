import API from '../axiosRoot';
import storage from '../utils/localStorage';
const script = {
    checkSession:function(){
        console.log("start script check sesion")
        API.post('webindex',{
        
        })
        .then(success=>{
            console.log("webindex success ",success);
            let data = success.data;
            if(data && data.code===200 && data.success===true){
                storage.store('message',data.message);
                storage.store('code',data.code);
                storage.store('data',data.data);
                storage.store('success',data.success);
            }
            else{
                storage.clear();
                storage.store('message',data.message);
                storage.store('code',data.code);
                storage.store('success',data.success);

            }
        })
        .catch(error=>{
            console.log("webindex error ",error)
        })
    }
}

export default script;