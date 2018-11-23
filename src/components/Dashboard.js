import React, { Component } from 'react'
import Users from './Users';
import Create from './Create';

class Dashboard extends Component {
  render() {
    return (
        <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                  

                    <br />
                    <hr />

                   
                   <Users/> 
                   

                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default Dashboard;