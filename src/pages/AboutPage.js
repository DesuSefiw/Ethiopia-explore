import React from "react";
import { Link } from "react-router-dom";
import'../App.css';
const AboutPage = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p className="para"> 🦓🦩We specialize in providing unforgettable experiences in Ethiopia, from breathtaking landscapes to rich cultural heritage. Join us as we explore the hidden gems and diverse beauty of this ancient land.🫎🫏
      </p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default AboutPage;
