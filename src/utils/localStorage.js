
const LOCAL_STORAGE = {
    store:function(key,value){
        localStorage.setItem(key,value);
    },
    delete:function(key){
        localStorage.removeItem(key);
    },
    get:function(key){
        console.log("LocalStorage getItem ",key)
        return localStorage.getItem(key);
    },
    clear:function(){
        localStorage.clear();
    }

}
export default LOCAL_STORAGE;