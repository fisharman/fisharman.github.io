import React, { PureComponent } from 'react';
import './Experience.css';
import Modal from 'react-modal';
import PortfolioImg from './ImportImg';
import data from '../data/experience_desc.json'
import ReactGA from 'react-ga';

const CreateModalRow = props => {
  return (
    <div className = "row">
      {props.items.map((title, i) => (
        <ModalTile
          key={i}
          src={PortfolioImg[data[i].image]}
          caption={title}
          type={props.type[i]}
          onClick={props.onClickOpen(i)}
        />
      ))}
    </div>
  );
}

const ModalTile = props => {
  return (
    <div className="col-md-6 col-lg-4">
      <a className="portfolio-item d-block mx-auto" href={"#portfolio-" + props.caption.replace(/\s+/g, '')} onClick={props.onClick}>
        <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
          <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
            <i className="fas fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={props.src} alt="" />
      </a>
      <ModalCaption caption={props.caption} type={props.type} />
    </div>
  );
}

const ModalCaption = props => {
  return (
    <div className="portfolio-caption">
      <h4>{props.caption}</h4>
      <p className="text-muted">{props.type}</p>
    </div>
  );
}

const ModalContent = props => {
  ReactGA.ga('send', 'pageview', props.content.image);
  return (
    <div className="portfolio-modal portfolio-modal-dialog bg-white">
        <a className="close-button d-none d-md-block" onClick={props.onClick}>
          <i className="fas fa-3x fa-times"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <img className="img-fluid mb-4" src={PortfolioImg[props.content.image]} alt=""/>
              {props.content.company ? <p className="mb-1 text-left"><b>COMPANY</b><br/>{props.content.company}</p> : ""}
              {props.content.role ? <p className="mb-1 text-left"><b>ROLE</b><br/>{props.content.role}</p> : ""}
              {props.content.highlight ? <p className="mb-1 text-left"><b>HIGHLIGHT</b><br/>{props.content.highlight}</p> : ""}
              <p className="mb-5 text-left">
                {props.content.website ? <a href={props.content.website} target="_blank" rel="noopener noreferrer">{props.content.website}</a> : ""}
              </p>
              <button className="btn btn-primary btn-lg rounded-pill" onClick={props.onClick}>
                Close</button>
            </div>
          </div>
        </div>
    </div>
  );
}

Modal.setAppElement(document.getElementById('root'));

class Experience extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: -1,
      items: this.extractValues("name"),
      types: this.extractValues("type")
    };
   }

  extractValues = (element) => {
    let list = [];
    data.map(x => (
     list.push(x[element])
    ));
    return list;
  }

  handleOpenModal = index => event => {
    this.setState({
      currentItem: index
    });
  }

  handleCloseModal = () => {
    this.setState({
      currentItem: -1
    });
  }

  render() {
    return (
      <section className="resume-section portfolio d-flex" id="portfolio">
        <div className="container my-auto">
          <h2 className="text-center text-uppercase text-secondary mb-0">Experience</h2>
          <hr className="star-dark mb-5" />
          <div className="row">
            <CreateModalRow
              items={this.state.items}
              type={this.state.types}
              onClickOpen={this.handleOpenModal}
            />
            <Modal
              isOpen={this.state.currentItem > -1}
              onRequestClose={this.handleCloseModal}
              bodyOpenClassName="ReactModal__Body--open"
              contentLabel="Experience"
            >
              <ModalContent
                src={this.state.currentItem > -1 ? PortfolioImg[data[this.state.currentItem].image] : ""}
                content={this.state.currentItem > -1 ? data[this.state.currentItem].content : ""}
                onClick={this.handleCloseModal}
              />
            </Modal>

          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
