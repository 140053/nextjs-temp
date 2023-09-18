
"use client"

import React, { useState } from 'react'


import '../styles/nav.css'

const Nav = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg  " data-bs-theme="dark">
      <div className="container-fluid d-flex align-items-between">
        <a className="navbar-brand" href="#">
          <h1>
            <b className='text-dark'>WHITECLOCK</b>
          </h1>
        </a>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          onClick={handleToggleNavbar}
        >
          <span className=" d-flex navbar-toggler-icon "></span>
        </button>

        <div
          className={`collapse navbar-collapse   ${isNavbarOpen ? ' show' : ''}`}
          id="navbarScroll"
        >
         <div className="navbar-nav text-center position-relative">
            <a className="nav-link fs-5 fw-bold text-dark p-3" aria-current="page" href="/about">ABOUT US</a>
            <a className="nav-link fs-5 fw-bold text-dark p-3" href="#">SERVICES</a>
            <a className="nav-link fs-5 fw-bold text-dark p-3" href="#">WORK</a>
            <a className="nav-link fs-5 fw-bold text-dark p-3 disabled" aria-disabled="true">INSIGHTS</a>
          </div>


        </div>

       

       
      </div>
    </nav>
  );
};

export default Nav;
