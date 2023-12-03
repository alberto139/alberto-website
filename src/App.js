import React from "react";
import logo from './logo.svg';
import './App.css';
//import profile from './imgs/profile.png'
import profile from './imgs/elvstrom.png'
import steering from './imgs/steering.gif'
import Navbar from "../src/components/Navbar";
import Carousel from '../src/components/Carousel';

function App(props) {
  return (
    
    // Main container with a dark brackgorund
    <div className="min-h-screen min-w-screen bg-black">

    <Navbar></Navbar> 

        {/* Main content section */}
        <div className=" bg-black flex w-full flex-col pl-[10%] max-md:max-w-full max-md:mt-10">
        
            {/* Hero section */}
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 bg-black">
            

                {/* Text Section */}
                <div className="flex flex-col w-[50%]">
                    <div className="flex flex-col my-auto">

                        {/* Name */}
                        <div className="text-white font-bold text-3xl lg:text-6xl md:text-4xl pb-5">
                        Alberto Rivera
                        </div>

                        {/* Job Title */}
                        <div className="relative">
                        <Carousel></Carousel>
                        </div>

                        {/* Tag Line */}
                        <div className="text-white lg:text3xl md:text-3xl">
                        Solving real problems with Computer Vision <br />
                        and Deep Learning
                        </div>
                    </div>
                </div>


                {/* Profile Image */}
                <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0 ml-auto">
                    <img src={profile} className="h-50" />
                </div>  
            </div>

            {/* Blog Section */}
        <div className="text-white text-6xl font-bold leading-[66px] self-stretch whitespace-nowrap mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] max-md:mt-10">
        Latest Blog
        </div>

        <div className="flex-col bg-amber-400 bg-opacity-90 overflow-hidden self-stretch relative flex min-h-[256px] w-[90%] justify-center items-center mt-16 px-16 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
          
          
          <div className="relative max-w-[1025px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src={steering}
                />
              </div>
              <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                <div className="relative flex flex-col items-stretch max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-4xl font-medium leading-9 max-md:max-w-full">
                    DIY Lane Keeping
                  </div>
                  <div className="text-white text-2xl leading-7 mt-11 max-md:max-w-full max-md:mt-10">
                    Deep learning lane line detection with steering angle prediction and control
                  </div>
                </div>
                </div>
                </div>
                </div>
                </div>              
        </div>
    </div>
  );
}

export default App;