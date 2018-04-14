import React, { Component } from 'react';
import './Header.css';
import profile from '../images/profile.png'

class Header extends Component {
  render() {
    return (
      <header className="masthead bg-primary text-white text-center">
        <div className="container">
          <img className="img-fluid mb-5 d-block mx-auto" src={profile} alt="" />
          <h1 className="text-uppercase mb-0">Ray Zhou</h1>
          <hr className="star-light" />
          <h2 className="font-weight-light mb-0">Software Engineer - Web</h2>
        </div>
      </header>
    );
  }
}

export default Header;
