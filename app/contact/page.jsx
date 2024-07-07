"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea'


import { Select , SelectContent, SelectGroup, SelectItem, SelectLabel,SelectTrigger,SelectValue } from '@/components/ui/select';

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, } from "react-icons/fa"


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+40) 321 654 876 "
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "youremail@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code corner , Tech Town 13579"
  },
]


import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='py-6'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* forms */}

          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form action="" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quia odit natus nisi.</p>
              {/* inputs */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Input type="firstname" placeholder='Prenom' />
                <Input type="lastname" placeholder='Nom'  />
                <Input type="email" placeholder='Adresse email' />
                <Input type="phone" placeholder='Numero de telephone'  />
                
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selectionner un service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textArea */}
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              
              {/* btn */}
              <Button  className="max-w-40">send message</Button>
            </form>
          </div>
{/* infos */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'><ul>
            {info.map((item, index) => {
              return (<li key={index} className='flex items-center gap-6 xl:mb-4'><div className='w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center  '>{item.icon}</div><div className='flex-1'><p className='text-white/60'>{item.title}</p><h3 className='text-xl'>{item.description}</h3></div></li>)
            })}
          </ul></div>
        </div>
    </div></motion.section>
  )
}

export default Contact