// Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Update this CSS file name for styling

const jobTitles = ['Software Engineer', 'CTO', 'Sailor', 'Research Engineer'];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000); // Change the duration to control the rotation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {jobTitles.map((title, i) => (
        <div key={i} className={`text ${i === index ? 'visible' : ''}`}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
