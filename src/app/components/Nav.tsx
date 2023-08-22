
"use client"

import React, { useState } from 'react'


import '../styles/nav.css'

const Nav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid d-flex align-items-between">
        <a className="navbar-brand" href="#">
          <h2>
            <b>WHITECLOCK</b>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNavbar}
        >
          <span className=" d-flex navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse   ${isNavbarOpen ? ' show' : ''}`}
          id="navbarScroll"
        >
         <div className="navbar-nav    text-center">
            <a className="nav-link active wc-nav fs-5 fw-strong" aria-current="page" href="#">Home</a>
            <a className="nav-link wc-nav fs-5 fw-strong" href="#">Features</a>
            <a className="nav-link wc-nav fs-5 fw-strong" href="#">Pricing</a>
            <a className="nav-link wc-nav fs-5 fw-strong  disabled" aria-disabled="true">Disabled</a>
          </div>


        </div>

       

       
      </div>
    </nav>
  );
};

export default Nav;
