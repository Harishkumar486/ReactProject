import React from "react";
import "../css/schedule.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="schedule-header">
        <h1 className="schedule-heading">Schedule</h1>
        <p className="schedule-intro">
          The conference opens with amazing workshops and continues with two days of incredible talks
          and keynotes, all of which are facilitated by industry-leading experts.
        </p>
      </div>

      {/* Day 1 - Workshops */}
      <div className="day-section">
        <h2 className="day-title">Workshops</h2>
        <h3 className="day-date">August 24th</h3>

        <div className="session">
          <div className="session-time">8:30 AM</div>
          <div className="session-details">
            <div className="event"><strong>Registration</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">9:00 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Adam Connor</strong>
              <p className="event-topic">Lights! Camera! Interaction! Design Inspiration from Filmmakers</p>
            </div>
            <div className="event">
              <strong>Jennifer Jones</strong>
              <p className="event-topic">What Designers Can Learn from Parenting</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">12:30 PM</div>
          <div className="session-details">
            <div className="event"><strong>Lunch</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">2:00 PM</div>
          <div className="session-details">
            <div className="event">
              <strong>Tessa Harmon</strong>
              <p className="event-topic">Crafty Coding: Generating Knitting Patterns</p>
            </div>
            <div className="event">
              <strong>Russ Unger</strong>
              <p className="event-topic">From Muppets to Mastery: Core UX Principles from Mr. Jim Henson</p>
            </div>
          </div>
        </div>
      </div>

      {/* Day 2 - Conference */}
      <div className="day-section">
        <h2 className="day-title">Conference</h2>
        <h3 className="day-date">August 25th</h3>

        <div className="session">
          <div className="session-time">8:30 AM</div>
          <div className="session-details">
            <div className="event"><strong>Registration</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">9:00 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Vitaly Friedman</strong>
              <p className="event-topic">Responsive Web Design: Clever Tips and Techniques</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">10:00 AM</div>
          <div className="session-details">
            <div className="event"><strong>Morning Break</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">10:30 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Shay Howe</strong>
              <p className="event-topic">Less is More: How Constraints Cultivate Growth</p>
            </div>
            <div className="event">
              <strong>Jenn Downs</strong>
              <p className="event-topic">What’s Stopping You?</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">11:30 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Carolyn Chandler</strong>
              <p className="event-topic">The Business of Play</p>
            </div>
            <div className="event">
              <strong>Chris Mills</strong>
              <p className="event-topic">Heavy Metal Coding</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">12:30 PM</div>
          <div className="session-details">
            <div className="event"><strong>Lunch</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">2:00 PM</div>
          <div className="session-details">
            <div className="event">
              <strong>Zoe Mickley Gillenwater</strong>
              <p className="event-topic">Leveling Up with Flexbox</p>
            </div>
            <div className="event">
              <strong>Darby Frey</strong>
              <p className="event-topic">Building a Mobile Layout</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">3:00 PM</div>
          <div className="session-details">
            <div className="event">
              <strong>Brad Smith</strong>
              <p className="event-topic">What Designers and Strategists Can Learn from Dick Fosbury</p>
            </div>
            <div className="event">
              <strong>Erica Decker</strong>
              <p className="event-topic">What Disney Can Teach You about User Experience Design</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">4:00 PM</div>
          <div className="session-details">
            <div className="event"><strong>Afternoon Break</strong></div>
          </div>
        </div>
      </div>

      {/* Day 3 - Conference */}
      <div className="day-section">
        <h2 className="day-title">Conference</h2>
        <h3 className="day-date">August 26th</h3>

        <div className="session">
          <div className="session-time">8:30 AM</div>
          <div className="session-details">
            <div className="event"><strong>Registration</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">9:00 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Aaron Irizarry</strong>
              <p className="event-topic">Designing a Culture of Design</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">10:00 AM</div>
          <div className="session-details">
            <div className="event"><strong>Morning Break</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">10:30 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Jen Myers</strong>
              <p className="event-topic">Teaching Our CSS to Play Nice</p>
            </div>
            <div className="event">
              <strong>AJ Self</strong>
              <p className="event-topic">(You Should Be) Testing Your JavaScript</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">11:30 AM</div>
          <div className="session-details">
            <div className="event">
              <strong>Dan Denney</strong>
              <p className="event-topic">Creating HTML Emails Can Be Fun</p>
            </div>
            <div className="event">
              <strong>Maya Bruck</strong>
              <p className="event-topic">So You Want to Be a Unicorn</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">12:30 PM</div>
          <div className="session-details">
            <div className="event"><strong>Lunch</strong></div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">2:00 PM</div>
          <div className="session-details">
            <div className="event">
              <strong>Victoria Pater</strong>
              <p className="event-topic">Excellent Tacos Are Not Created in a Vacuum</p>
            </div>
            <div className="event">
              <strong>Arman Ghosh</strong>
              <p className="event-topic">Designing Deals: How Good Design Drives Sales</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">3:00 PM</div>
          <div className="session-details">
            <div className="event">
              <strong>Bermon Painter</strong>
              <p className="event-topic">Death to Wireframes: Long Live Rapid Prototyping</p>
            </div>
            <div className="event">
              <strong>Candi Lemoine</strong>
              <p className="event-topic">Making Remote Development Work</p>
            </div>
          </div>
        </div>

        <div className="session">
          <div className="session-time">4:00 PM</div>
          <div className="session-details">
            <div className="event"><strong>Afternoon Break</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

