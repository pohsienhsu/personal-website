import React from 'react';
import author from "../images/profile_img.jpg";


const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5" >
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading" > about me </h1>
          <p>
          I'm currently a Masters student studying Computational Science and Engineering (CSE) under Georgia Tech's Industrial and System Engineering Schools. I'm Pursuing this major to probe into the uncharted territories of machine learning and AI. In addition, I'm actively looking for an organization that would expose me to multiple perspectives as a software engineer. 
          My experience and passions range from computer science, data science, and computational models. In the meantime, I'm working as an Advanced Data Analytics Intern for United Parcel Service (UPS). Throughout the job, I've been supporting data-driven decision-making for the organization. I have been working to apply what I've learned to solve real-world issues, with my most recent projects being focused on using the knowledge of full-stack, API, and cloud services to help the organization of Georgia's PPE (personal protective equipment) Management. I maintain a scholarly interest, and tangible skills, in many other areas, ranging from theories of Quantum Mechanics, solar cells, sustainable energy resources.
          As an asset to an organization, I am always willing to evolve, I have a highly diverse skillset, and I have the malleability of someone who is humble and eager to tackle new tasks. Highly motivated and excited to explore the infinite possibilities in the world of software engineering.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
