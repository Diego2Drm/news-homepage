import React from "react";
import logo from '../../assets/images/logo.svg'
import '../../index.scss'
import iconClose from '../../assets/images/icon-menu-close.svg'
import iconMenu from '../../assets/images/icon-menu.svg'

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="logo" className="navbar-brand" />
          <button className="d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <img src={iconMenu} alt="menu" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
            <div className="offcanvas-header d-flex justify-content-end d-lg-none">
              <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <img src={iconClose} alt="icpn-close" />
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 ps-3 pe-lg-4 mt-4 mt-lg-0 gap-4 fw-semibold" >
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">New</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Popular</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Categories</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>

  );
};


export { Nav };