import React, { Component } from 'react';
import './Experience.css';
import cabin from '../images/experience/cabin.png'
import cake from '../images/experience/cake.png'
import circus from '../images/experience/circus.png'
import game from '../images/experience/game.png'
import safe from '../images/experience/safe.png'
import submarine from '../images/experience/submarine.png'

class Experience extends Component {
  render() {
    return (
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 className="text-center text-uppercase text-secondary mb-0">Experience</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cabin} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={cake} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={circus} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={game} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={safe} alt="" />
              </a>
            </div>
            <div className="col-md-6 col-lg-4">
              <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={submarine} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
