import React, { useState } from "react";
import { assets } from "../assets/assets";

export default function Navbar() {
  const [Showmenu, setShowmenu] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Top Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-white px-8 py-2 border rounded-full">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          onClick={() => setShowmenu(true)}
          className="w-7 md:hidden cursor-pointer"
          alt="menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white transform ${
          Showmenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-lg z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            onClick={() => setShowmenu(false)}
            className="w-6 cursor-pointer"
            alt="close"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          <a
            onClick={() => setShowmenu(false)}
            href="#header"
            className="px-4 py-2 rounded-full hover:bg-gray-300"
          >
            Home
          </a>
          <a
            onClick={() => setShowmenu(false)}
            href="#about"
            className="px-4 py-2 rounded-full hover:bg-gray-300"
          >
            About
          </a>
          <a
            onClick={() => setShowmenu(false)}
            href="#projects"
            className="px-4 py-2 rounded-full hover:bg-gray-300"
          >
            Projects
          </a>
          <a
            onClick={() => setShowmenu(false)}
            href="#testimonials"
            className="px-4 py-2 rounded-full hover:bg-gray-300"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
}
