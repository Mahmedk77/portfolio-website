import { stacks } from '@/constants';
import { Layers } from 'lucide-react'
import StackCard from '../cards/StackCard';
import Heading from './Heading';

const stackCategories = [
  { label: 'Front-end', key: 'frontend' as const },
  { label: 'Back-end', key: 'backend' as const },
  { label: 'Automation and AI', key: 'automation' as const },
]

const Stacks = () => {
  return (
    <section className='text-white'>
      <Heading
        icon={<Layers />}
        heading="My Stacks"
        description="Focused on building modern and high-performance web applications."
      />

      {stackCategories.map(({ label, key }) => (
        <div key={key} className='mt-7'>
          <div className='flex justify-center items-center bg-[#18181A] py-2 rounded-md'>
            <p className='text-heading-xs font-semibold'>{label}</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4'>
            {stacks[key].map((stack) => (
              <StackCard
                key={stack.name}
                logo={stack.logo}
                name={stack.name}
                description={stack.description}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Stacks
