import React, { Component } from 'react';
import './Header.css';
import profile from '../images/profile.JPG'

class Header extends Component {
  render() {
    return (
      <header className="resume-section masthead bg-primary text-white text-center d-flex">
        <div className="container my-auto">
          <img className="img-fluid rounded-circle mb-5 mx-auto d-none d-md-block" src={profile} alt="" />
          <h1 className="text-uppercase mb-0">Ray Zhou</h1>
          <hr className="star-light" />
          <p className="mb-3"> I am a software developer with background in hardware development and tech entrepreneurship.
            I learned coding during my studies at the University of Waterloo, where I graduated with a Bachelors in Engineering.
          </p>
          <p className="mb-5">
            I have always been passionate for technology, and the passion pivoted into software when I
            wrote scripts to test tens of thousands of IoT devices. I am now excited to leverage my hardware
            development and tech start up experience to grow my role as a full-stack software developer.
          </p>
          <ul className="list-inline list-social-icons mb-0">
              <li className="list-inline-item">
                <a href="mailto:hi@rayzhou.co?Subject=Let&rsquo;s%20Chat" target="_blank" rel="noopener noreferrer">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/rayzhou/" target="_blank" rel="noopener noreferrer">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/fisharman " target="_blank" rel="noopener noreferrer">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
        </div>
      </header>
    );
  }
}

export default Header;
