import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; 
import img1 from "../Asset/axum.jpg";
import img2 from "../Asset/castl.jpg";
import img3 from "../Asset/royal.jpg";
import img4 from "../Asset/turism.jpg";
import img5 from "../Asset/wild.jpg";
import img6 from "../Asset/lol.jpg";
import img7 from "../Asset/lalibela.jpg";
const HomePage = () => {
  const images = [img1, img2, img3, img4, img5,img6,img7]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //I Use useEffect to change the image after a set interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [images.length]);

  return (
    <div className="homepage">
      <h1>Explore Ethiopia</h1>
      <p> 🦣Ethiopia, the land of origins is rich with history, culture, and breathtaking landscapes From the stunning Simien Mountains to the historical city of Axum, Ethiopia offers endless experiences for adventurers and cultural enthusiasts alike.
      </p>
      {/* Slideshow Section */}
      <div className="slideshow-container">
        <img 
          src={images[currentImageIndex]} // Display current image
          alt={'Slide ${currentImageIndex + 1}'}
          className="slide"
        />
      </div>
      <p>“The beauty of Ethiopia will captivate your heart💘💖💟.”</p>

      <Link to="/about">
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default HomePage;
