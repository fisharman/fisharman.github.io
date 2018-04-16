import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer py-4 text-white">
        <div className="container">
          <p class="float-right"><small>Copyright &copy; Ray Zhou</small></p>
          <small>Built with React &middot; <a href="https://github.com/fisharman/fisharman.github.io/tree/dev">GitHub</a></small>
        </div>
      </div>
    );
  }
}

export default Footer;
