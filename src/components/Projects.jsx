import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'motion/react'
export default function Projects() {
  const[CurrentIndex,setCurrentIndex]= useState(0)
  const[cardstoshow,setcardstoshow]= useState(1)

  const NextProject=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex + 1) % projectsData.length  )
  }

  const PrevProject = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
  };

  useEffect(()=>{
    const updateCardtoshow =()=>{
      if(window.innerWidth >= 1024){
        setcardstoshow(projectsData.length)
      }else{
        setcardstoshow(1)
      }
    } 
    updateCardtoshow()

    window.addEventListener('resize', updateCardtoshow)
    return ()=> window.removeEventListener('resize',updateCardtoshow)
  },[])
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      
      className="mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden "
      id="projects"
    >
      <h1 className="text-2xl sm:text-4xl mb-2 font-bold text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio.
      </p>

      {/* slider buttons */}
      <div className="flex justify-end items-center mb-8 ">
        <button
          onClick={PrevProject}
          className="p-3 rounded bg-gray-200 mr-2 cursor-pointer"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="previous" />
        </button>
        <button
          onClick={NextProject}
          className="p-3 rounded bg-gray-200 mr-2 cursor-pointer"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container */}

      <div className="overflow-hidden">
        <div
          style={{
            transform: `translateX(-${(CurrentIndex * 100) / cardstoshow}%)`,
          }}
          className="flex gap-8 transition-transform duration-500 ease-in-out"
        >
          {projectsData.map((projects, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={projects.image}
                className="w-full h-auto mb-14"
                alt=""
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-700">
                    {projects.title}
                  </h2>
                  <p className="text-gray-500 text-sm ">
                    {projects.price}{" "}
                    <span className="px-1"> {projects.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
