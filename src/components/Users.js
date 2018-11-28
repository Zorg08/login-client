import React, { Component } from 'react'

class Users extends Component {
  render() {
    return (
      <div className="container">
      <div className="card card-body bg-light mb-3">
          <div className="row">
              <div className="col-2">
                  <span className="mx-auto">Admin </span>
              </div>
              <div className="col-lg-6 col-md-4 col-8">
                  <h3>Spring React Login Project</h3>
                  <p> User Administration </p>
              </div>
              <div className="col-md-4 d-none d-lg-block">
                  <ul className="list-group">
                      <a href="#">
                          <li className="list-group-item board">
                              <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                          </li>
                      </a>
                      <a href="">
                          <li className="list-group-item create">
                              <i className="fa fa-plus-circle pr-1"> Create User </i>
                          </li>
                      </a>
                      <a href="#">
                          <li className="list-group-item update">
                              <i className="fa fa-edit pr-1"> Update user Info</i>
                          </li>
                      </a>
                      <a href="">
                          <li className="list-group-item delete">
                              <i className="fa fa-minus-circle pr-1"> Delete user </i>
                          </li>
                      </a>
                  </ul>
              </div>
          </div>
      </div>
  </div>
    )
  }
}
export default Users;
