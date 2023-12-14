import React from "react";
import profile from '../imgs/elvstrom.png';
import backgroundImg from '../imgs/sun.png';
import steering from '../imgs/steering.gif';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Home(props) {
  return (
    <div className="min-h-screen min-w-screen bg-black relative overflow-hidden">
      
      {/* Background Image */}
      <img
        src={backgroundImg}
        alt="Background"
        className="absolute top-0 left-0 z-0"
      />

      <Navbar />

      {/* Main content section */}
      <div className="flex w-full flex-col pl-[10%] max-md:max-w-full max-md:mt-10">
        {/* Hero section */}
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 bg-black">
          {/* Text Section */}
          <div className="flex flex-col w-[50%]">
            <div className="flex flex-col my-auto">
              {/* Name */}
              <div className=" z-10 text-white font-bold text-3xl lg:text-6xl md:text-4xl pb-5">
                Alberto Rivera
              </div>
              {/* Job Title */}
              <div className="relative">
                <Carousel />
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
            <img
              src={profile}
              className="h-50"
              alt="alberto rivera sailing a laser sailboat in the san francisco city front"
            />
          </div>
        </div>

        {/* Blog Section */}
        <div className="text-white text-6xl font-bold leading-[66px] mt-24 max-md:max-w-full max-md:text-4xl max-md:leading-[49px] max-md:mt-10">
          Latest Blog
        </div>

        {/* Blog Content Container */}
        <div className="border border-solid border-white transition-bg hover:bg-amber-400 hover:border-amber-400 hover:border-opacity-90 relative overflow-hidden self-stretch flex min-h-[256px] w-[90%] justify-center items-center mt-16 px-16 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
          {/* Blog Content Wrapper */}
          <div className="max-w-[1025px] max-md:max-w-full flex">
            {/* Blog Image */}
            <img
              loading="lazy"
              src={steering}
              alt="Steering"
              className="w-[38%] max-md:w-full"
            />
            {/* Blog Text */}
            <div className="w-[62%] ml-5 max-md:w-full">
              {/* Blog Title */}
              <div className="text-white text-4xl font-medium leading-9 max-md:max-w-full">
                DIY Lane Keeping
              </div>
              {/* Blog Description */}
              <div className="text-white text-2xl leading-7 mt-11 max-md:max-w-full max-md:mt-10">
                Deep learning lane line detection with steering angle prediction and control
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
