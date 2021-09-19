import React from 'react';
// Images
import ppe from '../images/ppe.jpeg';
import pumpedup from '../images/pumpedup.jpeg';
import covid from '../images/covid.jpeg';
import fr from '../images/fr.jpeg';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faLaptopMedical, faMobileAlt, faBiohazard, faCalculator} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// React PopupBox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

  // PPE
  const openPopupboxPPE = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={ppe} alt="PPE Management System..." />
      <ul className="portfolio-popupbox-ul">
        <li>Constructed entity relation diagram through the components within the correlation of the systems</li>
        <li>Developed management system of personal protective equipments for health care workers with React</li>
        <li>Utilized AWS cloud database to store and import data for health care equipment management.</li>
      </ul>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/matthew8541/PPE")}>https://github.com/matthew8541/PPE</a>
    </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigPPE = {
    titleBar: {
      enable: true,
      text: "PPE Management System"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // PumpedUP
  const openPopupboxPumpedUP = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={pumpedup} alt="PumpedUP Mobile App..." />
      <ul className="portfolio-popupbox-ul">
        <li>Built series of app prototypes with React Native to refine problem definition and user testings</li>
        <li>Designed user interfaces for partner matching through pairing algorithms and chatting functions</li>
        <li>Developed pairing algorithm to optimize users' partner searching process</li>
      </ul>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/pohsienhsu/Workout-Partner-App-PumpedUP")}>https://github.com/pohsienhsu/Workout-Partner-App-PumpedUP</a>
    </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigPumpedUP = {
    titleBar: {
      enable: true,
      text: "PumpedUP: Workout Pairing Mobile App"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Covid Simulation
  const openPopupboxCovid = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={covid} alt="Covid Simulation..." />
      <ul className="portfolio-popupbox-ul">
        <li>Constructed agent-based SEIRS model to simulate COVID-19 pandemic under various conditions</li>
        <li>Utilized grid-based Cellular Automata to replicate real-life daily interactions between individuals</li>
        <li>Designed visulation charts and tools for simulation results</li>
      </ul>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/pohsienhsu/6730-Covid-Simulation")}>https://github.com/pohsienhsu/6730-Covid-Simulation</a>
    </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigCovid = {
    titleBar: {
      enable: true,
      text: "Covid Simulation Model: SEIRS"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // FR Testing
  const openPopupboxFR = () => {
    const content = (
    <>
      <img className="portfolio-image-popupbox" src={fr} alt="FR Testing..." />
      <ul className="portfolio-popupbox-ul">
        <li>Constructed classification model predicting for FR testing with MCC dataset extracted features</li>
        <li>Extracted principle components through PCA analysis along with fast-forward feature selection</li>
        <li>Sampled data points through generative models to overcome model robustness issues</li>
      </ul>
      <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.gatech.edu/phsu40/ChBE-ML-Project")}>https://github.gatech.edu/phsu40/ChBE-ML-Project</a>
    </>
    )
    PopupboxManager.open({content});
  }

  const popupboxConfigFR = {
    titleBar: {
      enable: true,
      text: "Model Predicting in FR Testing"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h1 className="py-5">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6"> 
                <div className="portfolio-image-box" onClick={openPopupboxPPE}>
                  <img className="portfolio-image" src={ppe} alt="PPE Management System..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxPumpedUP}>
                  <img className="portfolio-image" src={pumpedup} alt="PumpedUP Mobile App..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxCovid}>
                  <img className="portfolio-image" src={covid} alt="Covid Simulation..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="portfolio-image-box" onClick={openPopupboxFR}>
                  <img className="portfolio-image" src={fr} alt="FR Testing..." />
                  <div className="overflow"></div>
                  <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
            </div>
          </div>
        </div>
        <PopupboxContainer {...popupboxConfigPPE} />
        <PopupboxContainer {...popupboxConfigPumpedUP} />
        <PopupboxContainer {...popupboxConfigCovid} />
        <PopupboxContainer {...popupboxConfigFR} />
      </div>
  )
}

export default Portfolio
