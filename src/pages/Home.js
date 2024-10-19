import React from "react";
import profile from '../imgs/elvstrom.png';
//import backgroundImg from '../imgs/sun.png';
import steering from '../imgs/steering.gif';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';


function Home(props) {
  return (
    <div className="min-h-screen min-w-screen bg-[#003366] relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="grid-background"></div>
      

      <Navbar />

      {/* Main content section */}
      <div className="flex w-full flex-col pl-[10%] max-md:max-w-full max-md:mt-10">

        {/* Hero section */}
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          {/* Text Section */}
          <div className="flex flex-col w-[50%] z-10">
            <div className="flex flex-col my-auto">
              {/* Name */}
              <div className="z-10 text-white text-3xl lg:text-6xl md:text-4xl pb-5 font-roboto-mono" style={{ fontWeight: 700 }}>
                Alberto Rivera
              </div>
              {/* Job Title */}
              <div className="relative">
                <Carousel />
              </div>
              {/* Tag Line */}
              <div className="text-white lg:text-3xl md:text-3xl p-2 z-20 font-roboto-mono" style={{ fontWeight: 400 }}>
                Solving real problems with Computer Vision <br />
                and Deep Learning
              </div>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0 ml-auto z-20">

            <img
              src={profile}
              className="h-50"
              alt="Alberto Rivera sailing a Laser sailboat in San Francisco Bay"
            />
          {/* END Profile Image */}
          </div>
        {/*END Hero Section*/}
        </div>

        {/* Engineering-style Line */}
        <hr className="border-t-4 border-[#cfddee] w-full" />
    
      </div>


      {/* Blog Section Wrapper */}
      <div className="relative pl-[10%] pb-[10%] z-20 gradient-bg">

        {/* Blog Section */}
        <div className="text-white text-6xl font-bold leading-[66px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px] max-md:mt-10 font-roboto-mono" style={{ fontWeight: 600 }}>
          Latest Blog
        </div>

        {/* Blog Content Container */}
        <Link to="/article01" className="border border-solid border-[#cfddee] transition-bg hover:bg-[#629dd1] hover:border-[#629dd1] relative overflow-hidden self-stretch flex min-h-[256px] w-[90%] justify-center items-center mt-16 px-16 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
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
              <div className="text-white text-4xl font-medium leading-9 max-md:max-w-full font-roboto-mono" style={{ fontWeight: 600 }}>
                DIY Lane Keeping
              </div>
              {/* Blog Description */}
              <div className="text-white text-2xl leading-7 mt-11 max-md:max-w-full max-md:mt-10 font-roboto-mono" style={{ fontWeight: 400 }}>
                Deep learning lane line detection with steering angle prediction and control.
              </div>
            </div>
          </div>
        </Link>

      {/*END BLOG SECTION */}
      </div>

    </div>
  );
}

export default Home;
