import React from "react";
import "./jumbotron.css";
import { NavLink } from "react-router-dom";
const Jumotron = () => {
  return (
    <div className="jumbotron">
      <h2 className="display-5 marquee">Welcome to Fourm </h2>
      {/* <p class="lead">We &lt;3 people who code!</p> */}
      <hr class="my-4" />
      <NavLink  to="/dashboard" >
      {/* <h6 className="lead" style={{color:"white"}}>Join Discussion</h6> */}
            </NavLink>
      
      
    </div>
  );
};

export default Jumotron;
