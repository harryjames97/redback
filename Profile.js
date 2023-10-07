import React from "react";
import "./Profile.css";
import redbacklogo from './redbacklogo.png';
import Footer from './Footer.js';

const Profile = () => {
  return (
    <div className="athlete-profile">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="logo">
            <div className="overlap-group">
              <img className="redbacklogo" alt="Redback logo" src= {redbacklogo.png} />
            </div>
          </div>
          <div className="navbar">
            <div className="text-wrapper">Home</div>
            <div className="text-wrapper-2">About Us</div>
            <div className="text-wrapper-3">Contact</div>
            <div className="text-wrapper-4">Our Technology</div>
            <div className="text-wrapper-5">Athletes</div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="ellipse" />
              <div className="text-wrapper-6">User Profile Pic</div>
            </div>
          </div>
          <img className="img" alt="Rectangle" src="rectangle-3.svg" />
          <img className="img" alt="Rectangle" src="rectangle-4.svg" />
          <div className="text-wrapper-7">Max:</div>
          <div className="text-wrapper-8">Min:</div>
          <div className="text-wrapper-9">Avg:</div>
          <div className="text-wrapper-10">Heart Rate</div>
          <img className="rectangle-2" alt="Rectangle" src="rectangle-5.svg" />
          <img className="rectangle-3" alt="Rectangle" src="rectangle-9.svg" />
          <p className="p">
            Lorem ipsum dolor sit amet. Rem praesentium beatae ut voluptatem ipsum et odio tempora aut dolor
            perferendis. Eos modi dolorum aut ipsum neque non minus quibusdam non recusandae quia ut Quis corrupti in
            iusto libero et atque impedit. Est esse quia ut aspernatur debitis non omnis similique.
          </p>
          <div className="text-wrapper-11">Existing Injuries:</div>
          <img className="rectangle-4" alt="Rectangle" src="rectangle-6.svg" />
          <img className="rectangle-5" alt="Rectangle" src="rectangle-7.svg" />
          <img className="rectangle-6" alt="Rectangle" src="rectangle-8.svg" />
          <div className="text-wrapper-12">Muscle Activity</div>
          <div className="text-wrapper-13">Posture</div>
          <div className="text-wrapper-14">Distance</div>
          <div className="text-wrapper-15">Athlete Name</div>
          <p className="age-sport-played">
            Age,&nbsp;&nbsp;sport played, height, <br />
            weight, BMI
          </p>
          <div className="text-wrapper-16">Body Temperature</div>
          <div className="text-wrapper-16">Body Temperature</div>
          <div className="text-wrapper-17">Max:</div>
          <div className="text-wrapper-18">Min:</div>
          <div className="text-wrapper-19">Avg:</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;