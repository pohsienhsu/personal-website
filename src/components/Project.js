import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopMedical, faMobileAlt, faBiohazard, faCalculator} from '@fortawesome/free-solid-svg-icons';
// Project Images
import ppe from '../images/ppe.jpeg';
import pumpedup from '../images/pumpedup.jpeg';
import covid from '../images/covid.jpeg';
import fr from '../images/fr.jpeg';

const Project = () => {
  return (
    <div className="project">
      <h1 className="py-5">My Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6"> 
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faLaptopMedical} size="2x"/>
                </div>
                <h3>PPE Management</h3>
                <div className="project-img-wrap mb-5" >
                  <img className="project-img" src={ppe} alt="project 1..." />
                </div>
                <p>Management system of personal protective equipments for health care workers with React and AWS</p>
                <a className="learn-more" href="https://github.com/matthew8541/PPE">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faMobileAlt} size="2x"/>
                </div>
                <h3>PumpedUP</h3>
                <div className="project-img-wrap mb-5" >
                  <img className="project-img" src={pumpedup} alt="project 2..." />
                </div>
                <p>Mobile application designed for partner matching through pairing algorithms and chatting functions with React Native</p>
                <a className="learn-more" href="https://github.com/pohsienhsu/Workout-Partner-App-PumpedUP">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faBiohazard} size="2x"/>
                </div>
                <h3>COVID-19 Simulation</h3>
                <div className="project-img-wrap mb-5" >
                  <img className="project-img" src={covid} alt="project 3..." />
                </div>
                <p>Agent-based SEIRS model to simulate COVID-19 pandemic under various conditions.</p>
                <a className="learn-more" href="https://github.com/pohsienhsu/6730-Covid-Simulation">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle">
                  <FontAwesomeIcon className="icon" icon={faCalculator} size="2x"/>
                </div>
                <h3>FR Prediction</h3>
                <div className="project-img-wrap mb-5" >
                  <img className="project-img" src={fr} alt="project 4..." />
                </div>
                <p>Classification model predicting for FR testing with MCC dataset extracted features.</p>
                <a className="learn-more" href="https://github.com/pohsienhsu/ML-MCC-FR-analysis">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project
