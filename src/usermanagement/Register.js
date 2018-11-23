import React, { Component } from 'react'
import { createdNewUser } from '../actions/securityActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Register extends Component {
  
constructor(){
super();
this.state = {
username: "",
name: "",
email: "",
password: "",
confirmpassword: "",
errors: {}
};

this.onChange = this.onChange.bind(this);

  }
 
  
  onChange(e){

    this.setState({[e.target.name]:e.target.value})
}
    render() {
    return (
        <div className="register">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Sign Up</h1>
                    <p className="lead text-center">Create your Account</p>
                    <form actionName="create-profile.html">

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="username" name="username"
                                value={this.state.username} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Name" name="name"
                                value={this.state.name} onChange={this.onChange}  />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                            
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password"  value={this.state.password} onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="confirmpassword"  value={this.state.confirmpassword} onChange={this.onChange}/>
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default connect(null, {createdNewUser}) (Register);