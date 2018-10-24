
const LOCAL_STORAGE = {
    store:function(key,value){
        if(typeof(value) === "object"){
            let valueJsonString = JSON.stringify(value);
            localStorage.setItem(key,valueJsonString);
        }
        else{
            localStorage.setItem(key,value);
        }
    },
    delete:function(key){
        localStorage.removeItem(key);
    },
    get:function(key){
        return localStorage.getItem(key);
    },
    clear:function(){
        localStorage.clear();
    }

}
export default LOCAL_STORAGE;