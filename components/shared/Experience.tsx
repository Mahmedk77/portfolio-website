import { Briefcase } from 'lucide-react'
import ExperienceCard from "@/components/cards/ExperienceCard"
import { experiences } from "@/constants/index"



const Experince = () => {

  // heading xl
  return (
    <>
    <section className='px-32 text-white'> 
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 justify-start items-center'>
          <Briefcase />          
          <h2 className='text-heading-xl font-bold tracking-normal'>My Experience</h2>
        </div>
        <p className='text-l text-grey60'>Navigating diverse environments with adaptability and expertise for holistic solutions.</p>
      </div>
      {/* CARD */}
      
          {/* HEADER */}
          <div className='mt-7.5'>

          
          {
            experiences.map((experience) => 
              <div key={experience.id} className='bg-dark4 p-6 rounded-md mb-2.5'>
              <ExperienceCard
                
                id={experience.id}
                logo={experience.logo}
                companyName={experience.companyName}
                companyType={experience.companyType}
                companyLink={experience.companyLink}
                companyWebsite={experience.companyWebsite}
                duration={experience.duration}
                jobTitle={experience.jobTitle}
                jobDescription={experience.jobDescription}
              />
              </div>)
          }
          </div>
      
    </section> 
    </>
  )
}

export default Experince