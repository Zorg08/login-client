import axios from 'axios';

const SetJwt = token => {
//setting header with token
if(token){
    axios.defaults.headers.common["Auhorization"] = token;
}else {
    delete axios.defaults.headers.common["Auhorization"]
}

};
export default SetJwt; 