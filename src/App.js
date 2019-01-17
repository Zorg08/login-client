import React, { Component } from 'react';

import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Register from './usermanagement/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./Store";
import Landing from './components/Landing';
import Login from './usermanagement/Login';
import jwt_decode from 'jwt-decode';
import SetJwt from './securityUtils/SetJwt';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/securityActions';
import { SecureRoute } from './securityUtils/SecureRoute';


//checks if user has a token
const jwtToken = localStorage.jwtToken
if(jwtToken){
  SetJwt(jwtToken)
  const decoded_token = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_token
  });
  //if token expires send user to land
  const currenTime = Date.now()/1000
  if(decoded_token.exp < currenTime){
    store.dispatch(logout())
    window.location.href("/")
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
      <Router>
      <div className="App">
        
        <Header />

{

  //public routes
}
<Route exact path="/" component={Landing} />
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login}/>
{



  //privat routes

}


<Switch> 
       
       <Route exact path="/dashboard" component={Dashboard} />
        
</Switch>        
       
        </div> 
         </Router>
         </Provider> 
     
    );
  }
}

export default App;
