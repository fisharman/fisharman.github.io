import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">

              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand" href="#page-top">Ray Zhou</a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li className="page-scroll">
                          <a href="#experience">Experience</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#skills">Skills</a>
                      </li>
                      <li className="page-scroll">
                          <a href="#resume">Resume</a>
                      </li>
                  </ul>
              </div>

          </div>

      </nav>
    );
  }
}

export default Navigation;
