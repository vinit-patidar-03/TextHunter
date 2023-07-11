import React from 'react'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-primary navbar-light `}>
      <div className="container-fluid">
        <div>
          <img src='/images/logo.png' alt="" width="50px" style={{ filter: 'invert()', marginLeft: '10px' }} />
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" role='button' onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faMoon} className='fa-2x' style={{ color: 'white', marginRight: "10px" }} /></label>
        </div>
      </div>
    </nav>
  )
}
