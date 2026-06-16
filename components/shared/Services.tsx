import { Zap } from 'lucide-react';
import { services } from "@/constants/index"
import Heading from './Heading';
import ServiceCard from '../cards/ServiceCard';

const Services = () => {
  return (
    <section className='text-white'>
      <Heading
        icon={<Zap />}
        heading="Services"
        description="Formulating comprehensive strategies to meet your design goals and exceed expectations."
      />
      <div className='mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2'>
        {services.map((service) => (
          <ServiceCard
            key={service.heading}
            icon={service.icon}
            heading={service.heading}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Services
