import React from "react";
import "../css/register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="header-section">
        <h1>Register</h1>
        <p>
          Every year we aim to have an unbelievable time, and this year we'd love it for you to join us.
        </p>
        <p>
          Conference passes only cost $99, one of the best values you'll find.
        </p>
      </div>

      <div className="content-section">
        <div className="left-section">
          <h2>Purchase a Conference Pass</h2>
          <p className="price">$99 PER PASS</p>
          <p>
            Purchase your Styles Conference pass using the form to the right.
            Multiple passes may be purchased within the same order, so feel free to bring a friend or two along.
            Once your order is finished we’ll follow up and provide a receipt for your purchase. See you soon!
          </p>

          <h3>Why Attend?</h3>
          <ul>
            <li>Over twenty world-class speakers</li>
            <li>One full day of workshops and two full days of presentations</li>
            <li>Hosted at The Chicago Theatre, a historical landmark</li>
            <li>August in Chicago is simply amazing</li>
          </ul>
        </div>

        <div className="right-section">
          <form>
            <label>Name</label>
            <input type="text" placeholder="Full name" />

            <label>Email</label>
            <input type="email" placeholder="Email address" />

            <label>Number of Passes</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>

            <label>Comments</label>
            <textarea rows="4" placeholder=""></textarea>

            <button type="submit">PURCHASE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
