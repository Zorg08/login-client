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

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
      <Router>
      <div className="App">
        
        <Header />
        <Route exact path="/create" component={Create} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
       
        </div> 
         </Router>
         </Provider> 
     
    );
  }
}

export default App;
