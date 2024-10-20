import React from "react";
import steering from '../imgs/steering.gif';
import lanes from '../imgs/article02/lanes.gif';
import stanley from '../imgs/article02/stanley.jpg';
import sae_levles from '../imgs/article02/SAElevels.jpeg';
import segmentation from '../imgs/article02/segmentation.gif';
import warped_segmentation from '../imgs/article02/warped_segmentation.gif';
import bestfit from '../imgs/article02/bestfit.jpeg';
import hud from '../imgs/article02/hud.gif';
import pid from '../imgs/article02/PID.jpeg';
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
        The 2005 DARPA grand challenge is viewed by many as the start of the current wave of self-driving car technology. The challenge tasks teams to build an autonomous vehicle capable of traversing a 132 mile off-road course between the Nevada and California border only using sparse waypoints. Five teams completed the course, with the Stanford Race Team coming on top with their car Stanley.The 2005 DARPA grand challenge is viewed by many as the start of the current wave of self-driving car technology. The challenge tasks teams to build an autonomous vehicle capable of traversing a 132 mile off-road course between the Nevada and California border only using sparse waypoints. Five teams completed the course, with the Stanford Race Team coming on top with their car Stanley.
      </p>

      <p className="mb-4">
      I consider the 2005 DARPA grand challenge to be the starting point for current self-driving car tech. While lane departure warning systems have been around since 2001, only now in late 2019 are we starting to see the first glimpses of self-driving car services being launched to the public, with Waymo’s autonomous ride hailing service.
      </p>

      {/* Blog Image */}
        <img
                loading="lazy"
                src={stanley}
                alt="Alberto Rivera with Stanley the Stanford Self Driving Car"
                className="pl-[25%] pr-[25%]"
        />
        <p className="text-sm mb-4 text-gray-500 mb-4 text-center">Stanley and myself at the Smithsonian National Air and Space Museum</p>


      <p className="mb-4">
        <a href="https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety" className="text-blue-600 underline">
          https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety
        </a>
        The Society of Automotive Engineers (SAE) has developed a list of automation levels to help us compare different self-driving systems, ranging from no automation (Level 0) to full automation with no human driver in the loop (Level 5). Waymo’s level of automation can be described as Level 4, meaning that the car is fully autonomous in a geo-fenced area.
      </p>

      <p className="mb-8">
        Tesla’s Autopilot system is categorized as a Level 3, since human monitoring is still required and the system will disengage and prompt the human driver to take over if the road conditions are not suitable for self-driving. There are a few other Level 3 systems commercially available, like Cadilac’s Super Cruise, but most car manufacturers are only offering Level 2 systems. Level 2 automation is very similar to Level 3. Tesla and Cadillac both say that their Autopilot and Super Cruise systems are actually high Level 2, since they require the driver to monitor the systems at all times. In my opinion a Level 2 system falls a little short of an Autopilot-like system, and Autopilot and Super Cruise are described as such to avoid liability. Most ADAS (advanced driver-assistance systems) would be classified as Level 2. These are systems like advanced cruise control or lane keeping systems — common features on newer model cars. Level 1 systems have been around for much longer, the most common of which is non-adaptive cruise control. I would also include lane departure warning systems in this category.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={sae_levles}
                alt="SAE Auntonony Levels Graphic"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety</p>

      <p className="mb-4">
      My current daily driver is a sedan from 2003.It has a non-adaptive cruise control system that has been common since the 1970s. As a side project I wanted to see if I could use the latest technology to upgrade my car from an outdated Level 1 to a slightly less outdated Level 2 by building and retrofitting a lane keeping system. The goal of this project is not to build a full self driving car like Waymo or Cruise, or even an Autopilot system like the one found on Teslas, but rather a lane keeping system like the ones offered by automotive manufacturers since 2014. These systems operate under near optimal environments where the lane markings are visible and easily identifiable.
      </p>

      <h2 className="text-2xl font-bold mb-4">Approach</h2>

      <p className="mb-4">
      For this to be considered a success the systems needs to be able to steer and keep the car in the middle of the lane on a well marked road. There are 3 basic components to the systems I’m building. First, it needs to identify the lane. Second, it needs to identify how far away from the center of the lane the car is. Lastly it needs a control system that keeps the car in the center of the lane.
      </p>

      <h2 className="text-2xl font-bold mb-4">Identifying Lanes</h2>

      <p className="mb-4">
      The only sensor used in this project is a webcam mounted on the windshield of the car and providing video input to the rest of the system. While building and testing the system I worked with pre-recorded video obtained from the Udacity Self Driving Car Nanodegree. While the Udacity program has a project with a very similar goal, the approach used in this project is very different. The Udacity program did serve as inspiration and as a baseline metric for this project. Udacity also provides 3 dash-cam type videos of increasing difficulty. For the Udacity project, students are only expected to have good performance on the easiest of the 3 videos. My solution to the Udacity project, using the techniques taught during the course, were not robust enough to handle less optimal conditions in the last 2 videos. Since the ultimate goal of this project is to have the system deployed on a real car, I decided to look for a different approach that could better generalize for different road conditions.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={lanes}
                alt="Udacity Dashcam Footage"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">Udacity dashcam video for advanced lane finding. Increasing difficulty from left to right.</p>

      <p className="mb-4">
      There are many ways to identify the lane lines using traditional computer vision algorithms like edge detection, but I’ve found that my solutions using this approach are not very generalizable and only work well in optimal conditions. When looking for a better approach I came across a paper that describes neural network capable of detecting lane lines called Lanenet. Don’t worry if you are not well versed in neural networks. I’ll only touch on them briefly in this write up and you don’t need to understand their inner workings to re-implement this project. In essence this neural network acts as a feature extractor which highlights the lane marking and ignores everything else in the image. Lanenet is a deep neural network that uses an encoder-decoder architecture similar to Enet, but modified to have two branches. One branch performs semantic segmentation which gives a label to every pixel on the original image assigning it to a lane. The second branch also labels every pixel in the original image but only in binary, meaning that a label 0 is a pixel that does not correspond to a lane, and a label of 1 is a pixel that does belongs to a lane. By combining the two outputs of the neural network we can detect each individual lane present in an image.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={segmentation}
                alt="Lane Line Segmentation Example"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">Binary lane classification (left), semantic segmentation (center), combined (right)</p>

      <p className="mb-4">
      The Lanenet model as described in the paper is implemented, trained and made available on this repository by Github user MaybeShewill-CV. The rest of the system is built around a modified version of this model. While the repository provides an end to end solution, just like it is described in the paper, I found the model post processing to not be very robust so I implemented my own version of it.
      </p>


      <p className="mb-4">
      The post-processing consists of taking the two model outputs and combining them to get an image that has each lane colored differently. From the combined image we can use a color threshold to only see pixels of a certain color, so we can choose to only visualize one lane at a time. For this project only the immediate left and right lane markings are relevant, so color thresholds are applied to only make those two visible. Taking each of the relevant lanes we can apply a top down image transform to better visualize the lanes as curves on a Cartesian plane.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={warped_segmentation}
                alt="Warped Lane Line Segmentation Example"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">Warped perspective of post-processed lane markings from the harder challenge video</p>


      <p className="mb-4">
      At the moment we only have each pixel represented as a point on the plane so we need to find a polynomial curve that best fits through those points. To achieve that we use a least squares polynomial fit algorithm. Since our data is still some noise we actually run this algorithm twice. The first time we only have a linear fit and and calculate the distance from each point to the newly created line.The second time around we calculate a 2nd order polynomial fit, ignoring all the points that are too far from our first line. This de-noises our lane markings and makes our lane detection much more robust. At this point we have a line that describes each of our lane lines.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={bestfit}
                alt="Line of best fit through detected lane lines"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">Left and right lanes, visualized as points (blue) with line of best fit (red)</p>

      <h2 className="text-2xl font-bold mb-4">Calculating Distance from Center</h2>  

      <p className="mb-4">
      With the two curves describing our lane lines we can calculate the center of the lane, assuming that its the midpoint between the two lines. We also assume that the center of the image is lined up with the center of the car. Knowing the location of the center of the car and the center of the lane, we can calculate the deviation from the center of the lane. This deviation will be used as the error that we are trying to minimize. The original calculation for this distance uses the pixel coordinates as our points. In the US, highway lane markings are 3.7 meters apart. Using this information we can convert our distance measurement from pixel units to meters. This distance from the center in meters will be the input to our controller that will steer the car and keep it in the center of the lane.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={hud}
                alt="Lane line and center overlaid on original video"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">Lane line and center overlaid on original video</p>


      <h2 className="text-2xl font-bold mb-4">Steering Control</h2>

      <p className="mb-4">
      Now that we have our error in terms of meters we want to take that information and get an appropriate steering angle. To do that we are going to use a PID Controller. PID Controllers are one of the most popular control methods out there, used on everything from thermostats to ships, planes and rockets. In essence a PID controller is a feedback loop that takes in an error value and tries to correct it by applying some action to a greater system and re-assessing the error after that action has been taken.
      </p>

      {/* Blog Image */}
      <img
                loading="lazy"
                src={pid}
                alt="PID Controller diagram"
                className="mx-auto"
        />
        <p className="text-sm mb-4 text-gray-500 mb-8 text-center">PID Controller diagram https://en.wikipedia.org/wiki/PID_controller</p>


      <p className="mb-4">
      PID stands for proportional integral derivative describing each component of the controller The proportional components acts as an amplifier, taking our error distance and multiplying it.The integral component is the summation of the previous errors. This helps when the system consistently has a small amount of error. The accumulation over time of a small error would then be amplified as a much larger error by the integral component and then corrected by the controller. The derivative is the rate of change between the last error and the current error. This term is helpful in not overshooting the controller’s goal and then having an error in the opposite direction. The output of each component is added together to output an appropriate process variable, which in our case is our steering angle.
      </p>

      <h2 className="text-2xl font-bold mb-4">Initial Testing</h2>

      <p className="mb-4">
      With the lane detection and steering control complete we are ready to start testing on some hardware! The first round of testing is connecting all the components together and controlling a mock steering wheel. This is mostly a sanity check to make sure the system is somewhat safe. The lane detection algorithm is being run on a desktop PC with an NVIDIA 1080 graphics card running at about 12 FPS. The steering is done by connecting a Raspberry Pi with a motor driver hat to a stepper motor, slightly more powerful than those found on 3D printers.
      </p>

      <p className="mb-4">
      I tested the system on the 3 videos from Udacity and was happy with the overall performance. The system performs great on the two highway videos, and is capable of accurately calculating the center of the lane in every frame. The 3rd video is much more challenging since its on a winding road with only partial markings on the right side and a lot a glare on the windshield. I wrote the program so that I could steer of a single lane line if it can’t see both and to steer straight if it can’t see either. This are really far from optimal conditions and far from the scope of this project. If deployed on a real vehicle the system should disengage and prompt the driver to take over. However the system is capable of identifying the lanes and steering appropriate for most of the video. There is one scenario which would be a catastrophic failure when the car is making a hairpin turn that they system can’t handle.
      </p>

      <p className="mb-4">
      Overall, I’m very satisfied with the performance of the system as a Level 2 system operating under constrained environment conditions. The next step of this project would be to design the hardware steering control integration in order to run teset with a real car. In order to do that in a safe manner, I'd need to extensively modify my car and find a closed track to test with. Until then, this the end for this project.
      </p>

      {/* Blog Image */}
        <img
                loading="lazy"
                src={steering}
                alt="Steering"
                className="mb-4 max-md:w-full"
        />

      <h2 className="text-2xl font-bold mb-4">Future Improvements and Next Steps</h2>

      <p className="mb-4">
      There are many improvements that could be made to the system. The biggest area for improvement being the processing speed of 12 FPS. We have many options here including quantizing the neural network or running on better hardware. One of the most time consuming components is running the curve-fitting algorithm twice for each lane, which could be reduced if we find a way to reduce the noise in the neural network output. Other speedups could include writing the program a lower-level languages like C or using CUDA instead of Python.
      </p>

      <p className="mb-4">
      There is also room for improvement on the hardware side of things. Originally the plan was to mount the stepper motor on the dashboard and attach a belt around the steering wheel. I tested this approach and found that the gear ratio between the gear at the end of the motor and the steering wheel is too large for the steering wheel to move quickly. This might be enough for some light lane keeping maneuvers but the car won’t be making sharp turn any time soon.
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
