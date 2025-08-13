import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to your Vision
      </p>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        {/* Image */}
        <img
          src={assets.brand_img}
          alt="Brand"
          className="w-full sm:w-1/2 max-w-lg md:h-[450px] "
        />

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-lg text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Button */}
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors duration-300">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
