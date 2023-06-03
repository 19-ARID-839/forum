import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"
import logo from ".././images/logo.png"
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-white  sticky-top ">
     <a className="navbar-brand " href="http://localhost:3000">
      <img className="img-logo" height="50px" src={logo} alt="Mint Block Logo"/>
    </a>
      <button
        className="navbar-toggle"
        type="button"
        // style={{color: 'black'}}
        onClick={handleNavCollapse}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${
          isNavCollapsed ? "collapse" : ""
        } navbar-collapse row`}
        id="navbarColor03"
      >
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <NavLink className="nav-link ml-3" to="/" style={{color: 'black'}}>
              Home
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link ml-2" to="/dashboard" style={{color: 'black'}}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ml-2" to="/new-post" style={{color: 'black'}}>
              Create Post
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-2" href="http://localhost:3000" style={{color: 'black'}}>
              Mint Blocks
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/login" style={{color: 'black'}}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/register" style={{color: 'black'}}>
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/me">
                  Hi {user.username}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/users/logout" style={{color: 'black'}}>
                  LogOut
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
