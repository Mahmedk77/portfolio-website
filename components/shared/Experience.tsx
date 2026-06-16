import { Briefcase } from 'lucide-react'
import ExperienceCard from "@/components/cards/ExperienceCard"
import { experiences } from "@/constants/index"
import Heading from './Heading'

const Experience = () => {
  return (
    <section className='text-white'>
      <Heading
        icon={<Briefcase />}
        heading="My Experience"
        description="Navigating diverse environments with adaptability and expertise for holistic solutions."
      />
      <div className='mt-7'>
        {experiences.map((experience) => (
          <div key={experience.id} className='bg-dark4 p-4 sm:p-6 rounded-md mb-2.5'>
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
