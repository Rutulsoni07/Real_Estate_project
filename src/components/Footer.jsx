import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden "
      id="footer"
    >
      <div className="container mx-auto flex justify-between flex-col md:flex-row items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-4 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dignissimos laudantium est quaerat exercitationem non quia molestias
            recusandae tempora minus?
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white font-bold text-lg">Company</h3>
          <ul className="flex flex-col gap-2  text-gray-400">
            <a href="#header" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3 ">
          <h3 className="text-white font-bold text-lg">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80 ">
            The latest news, articles and resources sent to your inbox weekly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t w-full border-gray-700 py-4 mt-10 text-center text-gray-300">
        Copyright 2025 © Rutul Soni. All Right Reserved.
      </div>
    </div>
  );
}
