import React from 'react';
import signature from '../images/signature.png';
// React FontAwesome Imports
import { FaAddressCard } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light">
      <div className="container">
        <a className="navbar-brand" href="#"><FaAddressCard className="portfolio-logo" size={80}/><img className="portfolio-signature" src={signature} alt="signature..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }}/>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">work experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">contacts</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
