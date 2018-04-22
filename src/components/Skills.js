import React, { Component } from 'react';
import './Skills.css'

const InlineIcon = props => {
  return (
    <li className="list-inline-item">
      <i className={props.icon} title={props.iconTitle}></i>
    </li>
  )
}

class Skills extends Component {
  render() {
    return (
      <section className="resume-section bg-primary text-white d-flex" id="about">
          <div className="container my-auto">
            <h2 className="text-center text-uppercase text-white">Skills</h2>
            <hr className="star-light mb-5"/>
            <div className="subheading text-center mb-3">Front End</div>
            <ul className="list-inline list-icons text-center">
              <InlineIcon icon="devicon-javascript-plain" iconTitle="JavaScript" />
              <InlineIcon icon="devicon-react-original-wordmark" iconTitle="React" />
              <InlineIcon icon="devicon-bootstrap-plain" iconTitle="Bootstrap" />
              <InlineIcon icon="devicon-html5-plain" iconTitle="HTML 5" />
              <InlineIcon icon="devicon-css3-plain" iconTitle="CSS 3" />
            </ul>
            <div className="subheading text-center mb-3">Back End</div>
            <ul className="list-inline list-icons text-center">
              <InlineIcon icon="devicon-python-plain-wordmark" iconTitle="Python" />
              <InlineIcon icon="devicon-django-plain-wordmark" iconTitle="Django" />
              <InlineIcon icon="devicon-java-plain" iconTitle="Java" />
              <InlineIcon icon="devicon-postgresql-plain-wordmark" iconTitle="PostgreSQL" />
              <InlineIcon icon="devicon-nodejs-plain-wordmark" iconTitle="Node.js" />
              <InlineIcon icon="devicon-c-plain-wordmark" iconTitle="C" />
            </ul>
            <div className="subheading text-center mb-3">Tools</div>
            <ul className="list-inline list-icons text-center">
              <InlineIcon icon="devicon-amazonwebservices-plain" iconTitle="AWS" />
              <InlineIcon icon="devicon-pycharm-plain" iconTitle="PyCharm" />
              <InlineIcon icon="devicon-intellij-plain" iconTitle="IntelliJ" />
              <InlineIcon icon="devicon-atom-original-wordmark" iconTitle="Atom" />
            </ul>
          </div>
      </section>
    );
  }
}

export default Skills;
