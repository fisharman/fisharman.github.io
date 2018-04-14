import React, { Component } from 'react';
import './Navigation.css';

const NavItem = props => {
  const isActive = props.active ? " active " : " ";
  return (
    <li className="nav-item  mx-0 mx-lg-1">
      <a className={"nav-link" + isActive + "py-3 px-0 px-lg-3 rounded"} href={props.path}>{props.name}</a>
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
  constructor(props){
    super(props);
    this.state = {
      isShown: true
    };
  }

  handleClick = () => {
      this.setState(prevState => ({
        isShown: !prevState.isShown
      }));
  }

  render() {
    const dropDownShow = this.state.isShown ? " collapse" : "";
    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">Ray Zhou</a>
          <TogglerButton onClick={this.handleClick}/>
          <div className={"navbar-collapse" + dropDownShow} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <NavItem path="#experience" active={true} name="Experience" />
              <NavItem path="#skills" name="Skills" />
              <NavItem path="#resume" name="Resume" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
