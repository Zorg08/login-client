
import axios from 'axios';
import {
    GET_ERRORS,
    SET_CURRENT_USER
} from './types';
import SetJwt from '../securityUtils/SetJwt';
import jwt_decode from 'jwt-decode';


export const createNewUser = (newUser, history) => async dispatch => {
try{
const res = await axios.post("/rest/user/create", newUser);
history.push("/login");
dispatch({
type: GET_ERRORS,
payload: {}

});
} catch (err) {
            dispatch ({
type: GET_ERRORS,
payload: err.res.data

            });

    }
};

export const login = LoginRequest => async dispatch => {
try {
  
    //fetch user from login req
    const res = await axios.post("/rest/user/login", LoginRequest);

  //extract token from res.data
    const {token} = res.data;

    //store token in local storage
    localStorage.setItem('jwtToken', token);

    //set token in header
    SetJwt(token);
//decode token
    const decode = jwt_decode(token);
//dispatch to our securityReducer
dispatch ({

    type: SET_CURRENT_USER,
    payload: decode
})    

} catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.res.data
    })
    
}
}

