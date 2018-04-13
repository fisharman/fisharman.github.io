import React, { Component } from 'react';
import './Header.css';
import profile from '../images/profile.png'

class Header extends Component {
  render() {
    return (
        <header>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <img className="img-responsive" src={profile} alt="" />
                      <div className="intro-text">
                          <span className="name">Ray Zhou</span>
                          <hr className="star-light" />
                          <span className="skills">Software Engineer - Web</span>
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}

export default Header;
