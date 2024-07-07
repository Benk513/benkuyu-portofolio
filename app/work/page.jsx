"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";


import { TooltipContent , Tooltip, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
  num:'01',
  category: 'frontend',
  title: "project 1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias illum maxime, magnam nesciunt laborum voluptas consectetur culpa vel corrupti dolorum odio magni suscipit eum et obcaecati dolor laboriosam quod.",
  stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
  image: '/images/food.png',
  live: "",
  github:"",

},
{
  num:'02',
  category: 'fullstack',
  title: "project 2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias illum maxime, magnam nesciunt laborum voluptas consectetur culpa vel corrupti dolorum odio magni suscipit eum et obcaecati dolor laboriosam quod.",
  stack: [{ name: "Next.JS 14" }, { name: "Tailwind.css" }, { name: "Node.js" }],
  image: '/images/drink.jpg',
  live: "",
  github:"",

},
{
  num:'03',
  category: 'fullstack',
  title: "project 3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias illum maxime, magnam nesciunt laborum voluptas consectetur culpa vel corrupti dolorum odio magni suscipit eum et obcaecati dolor laboriosam quod.",
  stack: [{ name: "Next.JS 14" }, { name: "Tailwind.css" }, { name: "Node.js" }],
  image: '/images/deliver.jpg',
  live: "",
  github:"",

},
]
 
const Work = () => {
  
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {

    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state baseed on current slide index.
    setProject(projects[currentIndex]);
    
  }



  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 , transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num} </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the los comos  */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* boerder */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}

                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className=" text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

          </div>
          <div className="w-full lg:w-[50%]" >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[200px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    
                    {/* overlay */}
                    <div></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                </div></SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[40px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work