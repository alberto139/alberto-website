import React from 'react';
import Navbar from "../components/Navbar";
import opensauce from "../imgs/opensauce2024.png";

const About = () => {
  return (
    <div className="min-h-screen min-w-screen bg-[#003366] relative overflow-hidden">
      {/* Background Grid */}
      <div className="grid-background z-0"></div>

      <Navbar />

      <div className="bg-black ml-[10%] mr-[10%] text-white py-8 px-4 md:px-8 lg:px-16 about-me">
        
        {/* Image and Text Container */}
        <div className="flex justify-between">
          
          {/* Text on the left */}
          <div className="w-1/2">
            <h1 className="text-6xl font-semibold">Alberto Rivera</h1>
            <h2 className="text-xl text-gray-400">AKA: Alberto G. Rivera, Beto, Capt Beto</h2>

            <p className="mt-8 mb-4">
              Hello!
              <p>
              Thank for for checking out my website!
              </p>
              <br></br>
              <p>
              I'm a software engineer with too many interests but mostly focusing on computer vision and deep learning.
              </p>
              <br></br>
              <p>
              I'm currently Co-Founder and CTO of Hellometer. A Y-Combinator (S20) backed startup applying computer vision to retail spaces. Previously I founded Strada Labs, with the mission of providing the most accurate urban traffic data to transit agencies. Before that I was a research engineer at Ford Motor Company studying where computer vision and artificial intelligence could be applied throughout the whole company.
              </p>
              <br></br>
              <p>
              Outside of my day job, I'm also often thinkering on other project, usually involving computer vision, and increasingly, robotics. Outside of thinkering I'm also a competitive sailor on the J/88, J/22 and Laser classes. 
              </p>
            </p>

            <p className="mb-4">
              Let's Connect
              <br></br>
              Feel free to connect with me on <a href="https://www.linkedin.com/in/albertogrivera/" className="text-blue-400">LinkedIn</a>.
            </p>

            <p>Happy coding!</p>
          </div>

        {/* Image on the right */}
  <div className="ml-4 w-1/2 flex justify-center">
    <img
      src={opensauce}
      className="h-auto w-auto object-contain max-w-full max-h-full z-20"
      alt="Alberto Rivera with 3D printed robot arm at OpenSauce 2024"
    />
  </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
