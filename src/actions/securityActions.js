
import axios from 'axios';
import {
    GET_ERRORS,
    SET_CURRENT_USER
} from './types';
import SetJwt from '../securityUtils/SetJwt';
import jwt_decode from 'jwt-decode';

//async keyword generere Promise
export const createNewUser = (newUser, history) => async dispatch => {
try{
    //await behøver vi ikke .then den forcer koden til at vente indtil promise er fullfilled
await axios.post("/login/register", newUser);
history.push("/login");
dispatch({
type: GET_ERRORS,
payload: {}

});
} catch (error) {
            dispatch ({
type: GET_ERRORS,
payload: error.res.data

            });

    }
};

export const login = LoginRequest => async dispatch => {
try {
  
    //fetch user from login req
    const res = await axios.post("/login/token", LoginRequest);

  //extract token from res.data
    const { token } = res.data;

    //store token in local storage
    localStorage.setItem("jwtToken", token);

    //set token in header
    SetJwt(token);
//decode token
    const decoded = jwt_decode(token);
//dispatch to our securityReducer
dispatch ({

    type: SET_CURRENT_USER,
    payload: decoded
})    

} catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    });
    
}
};

export const logout = () => dispatch => {
localStorage.removeItem("jwtToken")
SetJwt(false)
dispatch({
    type: SET_CURRENT_USER,
    payload: {}

});
}

