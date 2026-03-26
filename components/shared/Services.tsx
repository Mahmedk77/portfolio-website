import { Briefcase } from 'lucide-react'
import { Zap } from 'lucide-react';
import ExperienceCard from "@/components/cards/ExperienceCard"
import { experiences, services } from "@/constants/index"
import Heading from './Heading';
import ServiceCard from '../cards/ServiceCard';



const Services = () => {

  // heading xl
  return (
    <>
    <section className='px-32 text-white'> 

        <Heading  icon={<Zap />} heading={"Services"} 
        description={"Formulating comprehensive strategies to meet your design goals and exceed expectations."} />       
          {/* HEADER */}
          <div className='mt-7.5 grid grid-cols-2 gap-2 '>
            {
              services.map((service) => (
                  <div className=''>
                    <ServiceCard key={service.heading}  icon={service.icon} heading={service.heading} description={service.description}  />
                  </div>
              ))
            }
          </div>
      
    </section> 
    </>
  )
}

export default Services