import React from 'react'
// import {Link} from 'react-router-dom'
// import { library } from "@fortawesome/fontawesome-svg-core"; 
import image from './logo.png'
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode} `}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
         {/* <h5 className={`text-${props.Mode==='light'?'dark':'light'}`} style={{fontWeight:"bolder"}}>{props.title}</h5> */}
         <div>
          <img src={image} alt="" width="50px" style={{filter:`${props.Mode==='light'?'none':'invert()'}`,marginLeft:'10px'}}/>
         </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> -->in case of router*/}
             
            {/* <li className="nav-item"> */}
              {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
              {/* <a className="nav-link" href="/about">{props.aboutText}</a>
            </li> */}
          </ul>
        </div>
        <div className="form-check form-switch">
          <label className="form-check-label" role='button' onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault"><FontAwesomeIcon icon={faMoon} className='fa-2x' style={{color:`${props.Mode==='light'?'black':'white'}`,marginRight:"10px"}}/></label>
        </div>
      </div>
    </nav>
  )
}
