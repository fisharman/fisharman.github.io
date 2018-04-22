import React, { Component } from 'react';
import { scroller } from 'react-scroll'
import './Navigation.css';
import resume from '../data/RayZhou_CV_Web.pdf'
import ReactGA from 'react-ga';

const NavItem = props => {
  const isActive = props.active === props.name ? " active " : " ";
  return (
    <li className="nav-item  mx-0 mx-lg-1">
        <a className={"nav-link" + isActive + "py-3 px-0 px-lg-3 rounded"} onClick={props.onClick} href={props.path}>{props.logo}{props.name}</a>
    </li>
  );
}

const TogglerButton = props => {
  return (
    <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
      type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
      aria-expanded="false" aria-label="Toggle navigation" onClick={props.onClick}>
      Menu
      <i className="fa fa-bars"></i>
    </button>
  );
}

class Navigation extends Component {
  handleNavItemClick = element => event => {
    ReactGA.ga('send', 'pageview', element);
    scroller.scrollTo(element, {
      duration: 300,
      smooth: 'linear',
      spy: true
    });
  }

  render() {
    const menuShow = this.props.menuShow ? "" : " collapse";
    const barShrink = this.props.barShrink ? " navbar-shrink" : "";
    return (
      <nav className={"navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" + barShrink} id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#header" onClick={this.handleNavItemClick("Header")}>Ray Zhou</a>
          <TogglerButton onClick={this.props.onMenuClick}/>
          <div className={"navbar-collapse" + menuShow} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <NavItem path="#experience" active={this.props.ActiveNavItem} name="Experience" onClick={this.handleNavItemClick("Experience")} />
              <NavItem path="#skills" active={this.props.ActiveNavItem} name="Skills" onClick={this.handleNavItemClick("Skills")} />
              <NavItem path={resume} logo={<i className="fas fa-download mr-2"></i>} onClick={this.handleNavItemClick("Resume")} name="Resume" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
