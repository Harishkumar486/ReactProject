
import React from 'react';
import '../css/maincenter.css';

const MainCenter = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h4 className="sub-heading">SPEAKERS</h4>
        <img src="https://html5up.net/uploads/demos/dopetrope/images/pic02.jpg" alt="Speaker" />
        <h3>World-Class Speakers</h3>
        <p>
          Joining us from all around the world are over twenty fantastic speakers,
          here to share their stories.
        </p>
      </div>

      <div className="card">
        <h4 className="sub-heading">SCHEDULE</h4>
        <img src="https://html5up.net/uploads/demos/dopetrope/images/pic03.jpg" alt="Schedule" />
        <h3>Three Inspiring Days</h3>
        <p>
          Enjoy three inspiring and action-packed days of talks, gatherings, and all-around good times.
        </p>
      </div>

      <div className="card">
        <h4 className="sub-heading">VENUE</h4>
        <img src="https://html5up.net/uploads/demos/dopetrope/images/pic04.jpg" alt="Venue" />
        <h3>The Chicago Theatre</h3>
        <p>
          Within the heart of downtown Chicago, The Chicago Theatre will provide a beautiful conference venue.
        </p>
      </div>
    </div>
  );
};

export default MainCenter;
