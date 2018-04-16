import React, { Component } from 'react';
import { Element } from 'react-scroll'
import Waypoint from 'react-waypoint';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      navItemActive: "",
      menuShow: false,
      barShrink: false
    };
  }

  setNavItemActive = item => event => {
    this.setState({
      ActiveNavItem: item,
      menuShow: false
    })
  }

  restoreNavbar = () => {
    this.setState(prevState => ({
      ActiveNavItem: "",
      barShrink: false
    }));
  }

  handleMenuClick = () => {
      this.setState(prevState => ({
        menuShow: !prevState.isShown
      }));
  }

  closeMenu = () => {
    this.setState(prevState => ({
      menuShow: false
    }));
  }

  shrinkNavbar = () => {
    this.setState(prevState => ({
      barShrink: true
    }));
  }

  render() {
    return (
      <div className="App">
        <Waypoint
          scrollableAncestor={window}
          onPositionChange={this.closeMenu}
        />
        <Navigation ActiveNavItem={this.state.ActiveNavItem}
                    onMenuClick={this.handleMenuClick}
                    menuShow={this.state.menuShow}
                    barShrink={this.state.barShrink}
        />
        <Element name="Header">
          <Waypoint
            scrollableAncestor={window}
            onEnter={this.restoreNavbar}
            onLeave={this.shrinkNavbar}
            bottomOffset='91%'
          />
          <Header />
        </Element>
        <Element name="Experience">
          <Waypoint
            scrollableAncestor={window}
            onEnter={this.setNavItemActive("Experience")}
            bottomOffset='90%'
          />
            <Experience />
        </Element>

        <Element name="Skills">
          <Waypoint
            scrollableAncestor={window}
            onEnter={this.setNavItemActive("Skills")}
            bottomOffset='90%'
          />
            <Skills />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
