import React, { Component } from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News-Wing</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">Business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">Health</Link></li>
                    <li><Link className="dropdown-item" to="/science">Science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">Sports</Link></li> 
                    <li><Link className="dropdown-item" to="/technology">technology</Link></li> 
                  </ul>
                </li>

      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }

export default Navbar
