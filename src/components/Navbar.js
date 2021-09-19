import React from 'react';
import signature from '../images/signature.png';
import { Link } from 'react-scroll';
// React FontAwesome Imports
import { FaAddressCard } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><FaAddressCard className="portfolio-logo" size={80}/><img className="portfolio-signature" src={signature} alt="signature..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link smooth={true} to="home" offset={-110} className="nav-link" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about me</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="education" offset={-110} className="nav-link" href="#">education</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="experience" offset={-110} className="nav-link" href="#">experience</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contacts" offset={-110} className="nav-link" href="#">contacts</Link>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
