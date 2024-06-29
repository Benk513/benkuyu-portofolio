import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload} from "react-icons/fi"
const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24'>
          
          {/* text */}
          <div className='text-center lg:text-left'>
            
            <span className='text-xl'>Developpeur Web</span>
            <h1 className='h1'>Bonjour Je suis <br /> <span className='text-accent'>Ben Kuyu</span> </h1>
            <p className='max-w-[500px] mb-9 text-white/70'>I excel at crafting elegant digital experiences and I am proficient in various programmaing languages and technologies.</p>
            {/* btrn and socials */}
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-0">
                <span>Telecharger CV</span>
                <FiDownload className='ml-2 text-xl' />
                
              </Button>
              <div className='mb-8 lg:mb-0'> ...</div>
            </div>
          </div>

          <div>
            photo 55'06'
          </div>



        </div>

      </div>

    </section>
     
  )
}

export default Home