import React from 'react'
// Images
import ups from "../images/ups-logo.png";
import survivorCentral from "../images/survivor-central.png";
import ncku from "../images/ncku.png";
import taichin from "../images/taichin.png";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker">

          </div>
          <div className="timeline-content">
            <h3>Sep 2021 - Present</h3>
            
              <div className="logo-wrap" >
                <img className="logo-img" src={survivorCentral} alt="UPS logo..." />
                <div className="h4 logo-text">Survivor Central</div>
              </div>
            <div className="h6 position">Frontend Software Engineer</div>
            <ul className="">
              <li>Implemented analytics models to yield predictive insights from unstructured large datasets</li>
              <li>Interpreted model results to offer unbiased recommendations to stakeholders</li>
              <li>Leveraged analytics and visualization tools to present information to drive fact-based decision making</li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker">

          </div>
          <div className="timeline-content">
            <h3>Jun 2021 - Present</h3>
            
              <div className="logo-wrap" >
                <img className="logo-img" src={ups} alt="UPS logo..." />
                <div className="h4 logo-text">UPS</div>
              </div>
            <div className="h6 position">Advanced Data Analytics</div>
            <ul className="">
              <li>Implemented analytics models to yield predictive insights from unstructured large datasets</li>
              <li>Interpreted model results to offer unbiased recommendations to stakeholders</li>
              <li>Leveraged analytics and visualization tools to present information to drive fact-based decision making</li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker">

          </div>
          <div className="timeline-content">
            <h3>Feb 2018 - Jan 2019</h3>
            
              <div className="logo-wrap" >
                <img className="logo-img" src={ncku} alt="UPS logo..." />
                <div className="h4 logo-text">Laboratory of Biochemical Technology</div>
              </div>
            <div className="h6 position">Undergraduate Research Assistant</div>
            <ul className="">
              <li>Conducting the purification of purification through E. coli colonies and Resin columns</li>
              <li>Analyzing HPLC and NMR Results for component identification through analytical software</li>
              <li>Data visualizing the structure of various protein structure to the growth of E. Coli colony</li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker">

          </div>
          <div className="timeline-content">
            <h3>Jun 2016 - Jan 2018</h3>
            
              <div className="logo-wrap" >
                <img className="logo-img" src={ncku} alt="UPS logo..." />
                <div className="h4 logo-text">Nanomaterials Research Group</div>
              </div>
            <div className="h6 position">Undergraduate Research Assistant</div>
            <ul className="">
              <li>Researched papers concerning hybrid super-capacitors with the implementation of nanomaterials</li>
              <li>Experimenting with innovative solvents for the preparing of graphite oxide & MOF</li>
              <li>Reporting research and experiment progress to the lab group on weekly basis</li>
            </ul>
          </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker">

          </div>
          <div className="timeline-content">
            <h3>Jul 2016 - Aug 2016</h3>
            
              <div className="logo-wrap" >
                <img className="logo-img" src={taichin} alt="Taichin logo..." />
                <div className="h4 logo-text">Tai Chin Chemical Industry Company</div>
              </div>
            <div className="h6 position">Research & Development Intern</div>
            <ul className="">
              <li>Conducted PV and PVC sample analysis to comprehend sample adhesiveness and solidification</li>
              <li>Managed lab chemicals, and utilizing instruments to carry out physiochemical and purity analysis</li>
              <li>Tailoring adhesives and packaging to client needs through meetings and communications</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
