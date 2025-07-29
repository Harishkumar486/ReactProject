import React from "react";
import "../css/venue.css";

const Venue = () => {
  return (
    <div className="locations-container">
      <div id="head-venue">
        <h2>Venue</h2>
        <h3>The conference is held at The Chicago Theatre, a beautiful historical landmark. The conference 
          <br></br> hotel, Four Seasons, is a short walk away down State Street.</h3>
      </div>
    
    
      <div className="location-row">
        <div className="location-info">
          <h2>Chicago Theatre</h2>
          <p>175 N State St<br />Chicago, IL 60601</p>
          <p><a href="https://thechicagotheatre.com" target="_blank">thechicagotheatre.com</a><br />(312) 462-6300</p>
        </div>
        <div className="location-map">
          <iframe
            title="Chicago Theatre"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.287020707906!2d-87.628068684551!3d41.885366979221154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cae81c64d81%3A0x7e04f3dd9db9bcd9!2sChicago%20Theatre!5e0!3m2!1sen!2sus!4v1590080873505!5m2!1sen!2sus"
            width="400"
            height="250"
           
          ></iframe>
        </div>
      </div>

   
      <div className="location-row">
        <div className="location-info">
          <h2>Four Seasons</h2>
          <p>120 E Delaware Pl<br />Chicago, IL 60611</p>
          <p><a href="https://fourseasons.com" target="_blank">fourseasons.com</a><br />(312) 280-8800</p>
        </div>
        <div className="location-map">
          <iframe
            title="Four Seasons Hotel"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.088220263431!2d-87.62438798455096!3d41.8997319792207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd350ea63b979%3A0x9829ef872e9011f4!2sFour%20Seasons%20Hotel%20Chicago!5e0!3m2!1sen!2sus!4v1590081043155!5m2!1sen!2sus"
            width="400"
            height="250"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Venue;
