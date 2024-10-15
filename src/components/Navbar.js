import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 relative border-b bg-black">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or Brand */}
        <a href="/" className={`text-white text-3xl font-bold font-roboto pl-20 `}>
          AR
        
        </a>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`lg:flex space-x-4 hidden lg:block`}>
          <a href="/about" className="text-white hover:text-gray-300 font-medium pr-5">about</a>
          <a href="https://medium.com/@albertogrivera" className="text-white hover:text-gray-300 font-medium pr-5">blog</a>
          <a href="#rpojects" className="text-white hover:text-gray-300 font-medium pr-5">projects</a>
          <a href="https://scholar.google.com/citations?user=RTvKYusAAAAJ&hl=en" className="text-white hover:text-gray-300 font-medium pr-5">publications</a>
        </div>

        {/* Dropdown Menu (visible on small screens) */}
    {isMenuOpen && (
    <div className="lg:hidden absolute top-full right-0 bg-black z-10 w-1/4 border-l border-b border-r border-white font-roboto">
        <a href="#about" className="block py-2 px-4 text-white hover:text-gray-300 font-medium">about</a>
        <a href="https://medium.com/@albertogrivera" className="block py-2 px-4 text-white hover:text-gray-300 font-medium">blog</a>
        <a href="#projects" className="block py-2 px-4 text-white hover:text-gray-300 font-medium">projects</a>
        <a href="https://scholar.google.com/citations?user=RTvKYusAAAAJ&hl=en" className="block py-2 px-4 text-white hover:text-gray-300 font-medium">publications</a>
    </div>
    )}


    </div>
    </nav>
  );
};

export default Navbar;
