import React, { Component } from 'react';

import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Register from './usermanagement/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Create from './components/Create';
import { Provider } from 'react-redux';
import store from "./Store";
import Landing from './components/Landing';
import Login from './usermanagement/Login';

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


        <Route exact path="/create" component={Create} />
        <Route exact path="/dashboard" component={Dashboard} />
        
       
        </div> 
         </Router>
         </Provider> 
     
    );
  }
}

export default App;
