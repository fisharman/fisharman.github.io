import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <Experience />
        <Skills />
      </div>
    );
  }
}

export default App;
