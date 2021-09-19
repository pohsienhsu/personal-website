import React from 'react';
// Project Images
import gatech from '../images/gatech.png';
import ncku from '../images/ncku.png';
import springboard from '../images/springboard.png';

const Education = () => {
  return (
    <div className="education">
      <h1 className="py-5">Education</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6"> 
              <div className="box">
                <h3>Georgia Tech</h3>
                <div className="education-img-wrap mb-5" >
                  <img className="education-img" src={gatech} alt="Georgia Tech CSE..." />
                </div>
                <h6 className="education-date">Aug 2020 - Presesnt</h6>
                <h6 className="major">Computational Science and Engineering</h6>
                <h6 className="gpa">GPA: 3.67</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <h3>Georgia Tech</h3>
                <div className="education-img-wrap mb-5" >
                  <img className="education-img" src={gatech} alt="Springboard..." />
                </div>
                <h6 className="education-date">Aug 2019 - Dec 2020</h6>
                <h6 className="major">Materials Science and Engineering</h6>
                <h6 className="gpa">GPA: 3.7</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <h3>Springboard</h3>
                <div className="education-img-wrap mb-5" >
                  <img className="education-img" src={springboard} alt="Georgia Tech MSE..." />
                </div>
                <h6 className="education-date">Jun 2020 - Mar 2021</h6>
                <h6 className="major">Software Engineering Bootcamp</h6>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="box">
                <h3>NCKU</h3>
                <div className="education-img-wrap mb-5" >
                  <img className="education-img" src={ncku} alt="NCKU CHE..." />
                </div>
                <h6 className="education-date">Sep 2015 - Jun 2019</h6>
                <h6 className="major">Chemical Engineering</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Education;
