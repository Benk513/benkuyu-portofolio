"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJediOrder
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'


// about data
  
const about = {
  title: 'A propos de moi',
  description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem dicta deleniti quisquam provident, quia deserunt nam ",
  info: [
    {
      fieldName :"Nom",
      fieldValue:"Ben Kuyu",
    },
    {
      fieldName :"Telephone",
      fieldValue:"(+216) 28 056 852",
    },
    {
      fieldName :"Experience",
      fieldValue:"+ de 2 Ans",
    },
    {
      fieldName :"Instagram",
      fieldValue:"Ben Kuyu",
    },
    {
      fieldName :"Nationalité",
      fieldValue:"Congolaise",
    },
    {
      fieldName :"Email",
      fieldValue:"benkuyutech65@gmail.com",
    },
    {
      fieldName :"Freelance",
      fieldValue:"Disponible",
    },
    {
      fieldName :"Langues",
      fieldValue:"Anglais , Francais",
    },
  ],
  
}

//experience data
const experience = {
  icon: '',
  title: 'Mon experience',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem dicta deleniti quisquam provident, quia.',
  items: [
    {
      companie: "Innova Tech",
      role: "Stagiaire Developpeur Full Stack.",
      duration:" Fevrier 2022 - Juin 2022"
    },
    {
      companie: "IIT Sfax",
      role: "Stagiaire UX/UI design.",
      duration:" Juillet 2021 - Aout 2021"
    },
    {
      companie: "INPP Kinshasa",
      role: "Stagiaire Electtronicien.",
      duration:" Juin 2016 - Aout 2016"
    },
  ]
}

//education data
const education = {
  icon: '',
  title: 'Mon Parcours Academique',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem dicta deleniti quisquam provident, quia.',
  items: [
    {
      institution: "Udemy .inc",
      diplome: "Graphic Design Mastery",
      duration:" octobre 2022 - mars 2023"
    },
    {
      institution: "Udemy .inc",
      diplome: "Web Development Bootcamp",
      duration:" octobre 2022 - mars 2023"
    },
    
  ]
}

// skills data

const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem dict",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML5"
    },
    
    {
      icon: <FaCss3/>,
      name: "CSS 3"
    },
    
    {
      icon: <FaJs/>,
      name: "JavaScript"
    },
    
    {
      icon: <FaReact/>,
      name: " React.Js"
    },
    
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css"
    },
    
    {
      icon: <FaNodeJs/>,
      name: "Node.JS"
    },
    
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
  ]
  
}

import { Tabs, TabsContent, TabsList,TabsTrigger } from '@/components/ui/tabs';
import { Tooltip , TooltipContent, TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';


import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
    
      className="min-h-[80vh] flex items-center justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue='experience'
        className='flex flex-col md:flex-row gap-[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto lg:mx-0 gap-6 ">
            <TabsTrigger value ="exprience">Experience</TabsTrigger>
            <TabsTrigger value ="education">Parcours Academique</TabsTrigger>
            <TabsTrigger value ="skills">Competences</TabsTrigger>
            <TabsTrigger value ="about">A propos de moi</TabsTrigger>

          </TabsList>
          {/* content */}

          <div className="min-h-[70vh] w-full">
            
            {/* experience */}
            <TabsContent value="exprience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.role} </h3>

                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.companie}</p></div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
         
            <TabsContent value="education" className="w-full">
            
            <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.diplome} </h3>

                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p></div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
         
           
           {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h3>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{skills.description}</p>
                </div>

                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon} </div>
                          </TooltipTrigger>
                          <TooltipContent align ="center">
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    
                    </li>
                  })}

                </ul>


              </div>
            </TabsContent>
         
            <TabsContent value="about" className="w-full text-center lg:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold capitalize'> {about.title} </h3>
                <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center lg:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName} </span>
                        <span className='text-xl'>{item.fieldValue} </span>
                      </li>
                    )
                  })}
                </ul>
            </div></TabsContent>
         

         
          </div>


        </Tabs>
      </div>
      </motion.div>
  )
}

export default Resume