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
      <section id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Experience</h2>
                    <hr className="star-primary" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={cabin} className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={cake} className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={circus} className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={game} className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={safe} className="img-responsive" alt="" />
                    </a>
                </div>
                <div className="col-sm-4 portfolio-item">
                    <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                        <div className="caption">
                            <div className="caption-content">
                                <i className="fa fa-search-plus fa-3x"></i>
                            </div>
                        </div>
                        <img src={submarine} className="img-responsive" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default Experience;
