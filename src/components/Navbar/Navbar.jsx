import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav lg-nav">
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/">
              <img src="/Logo.png" alt="logo" />
            </Link>
          </div>
        </div>

        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/why-cds">Why CDS</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/company">Company</Link>
          <button className="btn green">Try it now</button>
          <button className="btn black">Login</button>
        </div>
      </div>

      <div className="sm-nav">
        <header className="sm-header">
          <Link to="/" className="my-auto">
            <img src="/Logo.png" alt="logo" className="logo" />
          </Link>

          <input className="side-menu" type="checkbox" id="side-menu" />
          <label className="hamb" for="side-menu">
            <span className="hamb-line"></span>
          </label>
          <nav className="sm-menu">
            <ul className="menu">
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/why-cds">Why CDS</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/company">Company</Link>
              </li>
              <li>
                <button className="btn green">Try it now</button>
              </li>
              <li>
                <button className="btn black">Login</button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
