import React from 'react'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.Mode} navbar-${props.Mode} `}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
         <h5 className={`text-${props.Mode==='light'?'dark':'light'}`} style={{fontWeight:"bolder"}}>{props.title}</h5>
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
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label text-${props.Mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" style={{fontWeight:"bolder"}}>{props.Mode} Mode enabled</label>
        </div>
      </div>
    </nav>
  )
}
