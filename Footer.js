import React from "react";
import "./Footer.css";
import redbacklogo from './redbacklogo.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="div">
        <div className="logo">
          <div className="overlap-group">
          <img className= "redbacklogo" alt="Redback logo" src={redbacklogo} />
          </div>
        </div>
        <p className="text-wrapper">© Copyright Redback Operations 2023. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;