// AboutMe.js
import React from 'react';
import Navbar from "../components/Navbar";



const About = () => {
  return (

    <div className="min-h-screen min-w-screen bg-[#003366] relative overflow-hidden">
      
    {/* Background Grid */}
    <div className="grid-background"></div>

    <Navbar></Navbar> 

    <div class="bg-black text-white py-8 px-4 md:px-8 lg:px-16 about-me">
      <h1 class="text-3xl font-semibold mb-4">About Me</h1>

      <p class="mb-4">
        Hello! 
        Thank for for checking out my website! How did you even find this? Anyway...
        <p>
        If you're here, you already know my name, but just to satisfy our SEO (Search Engine Optimization) gods, let me reiterate.
        </p>
        <p>
        I'm Alberto Rivera, starup founder, software engineer, sailor, and all around swell guy.
        </p>
      </p>

      <h2 class="text-xl font-semibold mb-2">Professional Background</h2>

      <h3 class="text-l font-semibold mb-2">Hellometer</h3>
      <p class="mb-4">
        As the CTO at Hellometer, I lead the Computer Vision efforts and guide the direction of the rest of our technology stack.
      </p>

      <h3 class="text-l font-semibold mb-2">Strada Labs</h3>
      <p class="mb-4">
        This was my previous startup, which also harnessed the power of computer vision to gather urban traffic data.
      </p>

      <h3 class="text-l font-semibold mb-2">Ford Motor Company</h3>
      <p class="mb-4">
        I was a Research Engineer focusing on applying the latest artificial inteligence technologies around the entire company.
      </p>

      <h2 class="text-xl font-semibold mb-2">Expertise</h2>
      <ul class="list-disc ml-6 mb-4">
        <li>Computer Vision: Leveraging advanced computer vision techniques to extract meaningful insights from visual data.</li>
        <li>Deep Learning: Applying state-of-the-art deep learning models to solve complex problems and drive business innovation.</li>
      </ul>

      <h2 class="text-xl font-semibold mb-2">Beyond Technology</h2>
      <p class="mb-4">
        While my professional life revolves around technology, I'm not just a tech enthusiast—I'm also an avid sailor. 
        I find joy and excitement in competitive sailing, strategy, and adaptability are key. 
      </p>

      <p class="mb-4">
        Let's Connect
        <br></br>
        Feel free to connect with me on <a href="https://www.linkedin.com/in/albertogrivera/" class="text-blue-400">LinkedIn</a>.
      </p>

      <p>Happy coding!</p>
    </div>
  </div>

  );
};

export default About;
