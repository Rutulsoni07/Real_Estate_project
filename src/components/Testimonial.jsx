import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";
export default function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      
      className="container  py-10 px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Customer
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonial
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80  mx-auto">
        Real Stories For Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {testimonialsData.map((testimonials, index) => (
          <div
            className="max-w-[340px] border shadow-lg px-8 py-12 text-center rounded"
            key={index}
          >
            <img
              src={testimonials.image}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt=""
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonials.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{testimonials.title}</p>
            <div className="flex justify-center flex-wrap text-red-500 mb-4 gap-1">
              {Array.from({ length: testimonials.rating }, (item, index) => (
                <img src={assets.star_icon} key={index} alt="star" />
              ))}
            </div>
            <p className="text-gray-600">{testimonials.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
