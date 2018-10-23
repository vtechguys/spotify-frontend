import axiosRoot from '../axiosRoot';
import storage from '../utils/localStorage';
const script = {
    checkSession:function(){
        console.log("start script check sesion")
        axiosRoot.post('webindex',{
        })
        .then(success=>{
            console.log("webindex success ",success);
            let data = success.data;
            if(data && data.code===200 && data.success===true){
                storage.store('userData',data);
            }
            else{
                storage.clear();
            }
        })
        .catch(error=>{
            console.log("webindex error ",error)
        })
    }
}

export default script;