import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLaptopMedical, faMobileAlt, faBiohazard, faCalculator} from '@fortawesome/free-solid-svg-icons';
// Images
import ppe from '../images/ppe.jpeg';
import pumpedup from '../images/pumpedup.jpeg';
import covid from '../images/covid.jpeg';
import fr from '../images/fr.jpeg';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <h1 className="py-5">Portfolio</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6"> 
              
                <div className="portfolio-image-box mb-5" >
                  <img className="portfolio-image" src={ppe} alt="Georgia Tech CSE..." />
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              
                <div className="portfolio-image-box mb-5" >
                  <img className="portfolio-image" src={pumpedup} alt="Springboard..." />
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              
                <div className="portfolio-image-box mb-5" >
                  <img className="portfolio-image" src={covid} alt="Georgia Tech MSE..." />
                </div>
              
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              
                <div className="portfolio-image-box mb-5" >
                  <img className="portfolio-image" src={fr} alt="NCKU CHE..." />
                </div>
              
            </div>
          </div>
        </div>
      </div>
  )
}

export default Portfolio
