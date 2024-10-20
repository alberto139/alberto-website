import React from "react";
import steering from '../imgs/steering.gif';
import lanes from '../imgs/article02/lanes.gif';
import Navbar from "../components/Navbar";

function Article02() {
  return (
    <div className="article-container">
      {/* Navbar */}
      <Navbar />

    <div className="flex w-full flex-col pl-[25%] pr-[25%] pt-[5%] max-md:max-w-full max-md:mt-10">

    {/* Blog Image */}
    <img
              loading="lazy"
              src={steering}
              alt="Steering"
              className="mb-4 max-md:w-full"
    />

    {/* Title Card */}
    <div className="mb-8">
        <h1 className="text-4xl font-bold">DIY Lane Keeping</h1>
        <h3 className="text-2xl font-medium text-gray-500">Making a lane keeping system with deep learning.</h3>
        <p className="text-sm text-gray-500">By Alberto Rivera | Nov 14, 2019</p>
    </div>



      <p className="mb-4">
        The 2005 DARPA grand challenge is viewed by many as the start of the current wave of self-driving car technology. The challenge tasks teams to build an autonomous vehicle capable of traversing a 132 mile off-road course between the Nevada and California border only using sparse waypoints. Five teams completed the course, with the Stanford Race Team coming on top with their car Stanley.
      </p>

      <p className="mb-4">
        I consider the 2005 DARPA grand challenge to be the starting point for current self-driving car tech. While lane departure warning systems have been around since 2001, only now in late 2019 are we starting to see the first glimpses of self-driving car services being launched to the public, with Waymo’s autonomous ride hailing service.
      </p>


      <p className="mb-4">
        <a href="https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety" className="text-blue-600 underline">
          https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety
        </a>
        The Society of Automotive Engineers (SAE) has developed a list of automation levels to help us compare different self-driving systems, ranging from no automation (Level 0) to full automation with no human driver in the loop (Level 5). Waymo’s level of automation can be described as Level 4, meaning that the car is fully autonomous in a geo-fenced area.
      </p>

      <p className="mb-4">
        Tesla’s Autopilot system is categorized as a Level 3, since human monitoring is still required and the system will disengage and prompt the human driver to take over if the road conditions are not suitable for self-driving. There are a few other Level 3 systems commercially available, like Cadilac’s Super Cruise, but most car manufacturers are only offering Level 2 systems.
      </p>

      <p className="mb-4">
        My current daily driver is a sedan from 2003. It has a non-adaptive cruise control system that has been common since the 1970s. As a side project I wanted to see if I could use the latest technology to upgrade my car from an outdated Level 1 to a slightly less outdated Level 2 by building and retrofitting a lane keeping system.
      </p>

      <h2 className="text-2xl font-bold mb-4">Approach</h2>

      <p className="mb-4">
        For this to be considered a success, the systems need to be able to steer and keep the car in the middle of the lane on a well-marked road. There are 3 basic components to the systems I’m building. First, it needs to identify the lane. Second, it needs to identify how far away from the center of the lane the car is. Lastly, it needs a control system that keeps the car in the center of the lane.
      </p>

      <h2 className="text-2xl font-bold mb-4">Identifying Lanes</h2>

      <p className="mb-4">
        The only sensor used in this project is a webcam mounted on the windshield of the car and providing video input to the rest of the system. While building and testing the system I worked with pre-recorded video obtained from the Udacity Self Driving Car Nanodegree. While the Udacity program has a project with a very similar goal, the approach used in this project is very different.
      </p>

      <p className="mb-4">
        There are many ways to identify the lane lines using traditional computer vision algorithms like edge detection, but I’ve found that my solutions using this approach are not very generalizable and only work well in optimal conditions. When looking for a better approach I came across a paper that describes a neural network capable of detecting lane lines called Lanenet.
      </p>

      <p className="mb-4">
        The Lanenet model as described in the paper is implemented, trained and made available on this repository by Github user MaybeShewill-CV. The rest of the system is built around a modified version of this model.
      </p>

      <p className="mb-4">
        The post-processing consists of taking the two model outputs and combining them to get an image that has each lane colored differently. From the combined image, we can use a color threshold to only see pixels of a certain color.
      </p>

      <p className="mb-4">
        At the moment, we only have each pixel represented as a point on the plane, so we need to find a polynomial curve that best fits through those points. To achieve that we use a least squares polynomial fit algorithm.
      </p>

      <p className="mb-4">
        With the two curves describing our lane lines, we can calculate the center of the lane, assuming that it’s the midpoint between the two lines. We also assume that the center of the image is lined up with the center of the car.
      </p>

      <h2 className="text-2xl font-bold mb-4">Steering Control</h2>

      <p className="mb-4">
        Now that we have our error in terms of meters, we want to take that information and get an appropriate steering angle. To do that we are going to use a PID Controller. PID Controllers are one of the most popular control methods out there, used on everything from thermostats to ships, planes, and rockets.
      </p>

      <h2 className="text-2xl font-bold mb-4">Initial Testing</h2>

      <p className="mb-4">
        With the lane detection and steering control complete, we are ready to start testing on some hardware! The first round of testing is connecting all the components together and controlling a mock steering wheel.
      </p>

      <h2 className="text-2xl font-bold mb-4">Future Improvements and Next Steps</h2>

      <p className="mb-4">
        There are many improvements that could be made to the system. The biggest area for improvement is the processing speed of 12 FPS. We have many options here including quantizing the neural network or running on better hardware.
      </p>

      <p className="mb-4">
        For now, you can see the results of running the program on each of the following videos:
      </p>

      <p className="mb-4">
        <a href="https://youtu.be/kuY4kcaewBs" className="text-blue-600 underline">Project Video</a><br />
        <a href="https://youtu.be/JlMHsUHJuBs" className="text-blue-600 underline">Challenge Video</a><br />
        <a href="https://youtu.be/B6DHeF45q70" className="text-blue-600 underline">Harder Challenge Video</a>
      </p>

      <p className="mb-4">
        Feel free to reach out to me here or on social media if you have any questions. Don’t forget to comment and like the post if you found it interesting!
      </p>
    </div>

    </div>
  );
}

export default Article02;
