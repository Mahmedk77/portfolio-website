import { stacks } from '@/constants';
import { Layers } from 'lucide-react'
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
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4'>
            {stacks[key].map((stack) => (
              <div
                key={stack.name}
                className='group flex flex-col items-center justify-center gap-2.5 py-5 px-3
                  bg-[#111113] rounded-lg cursor-default
                  hover:bg-[#1e1e21] hover:scale-105 hover:-translate-y-1.5
                  transition-all duration-200 ease-out
                  shadow-sm hover:shadow-md hover:shadow-black/40'
              >
                <div className='w-10 h-10 flex items-center justify-center'>
                  <img
                    src={stack.logo}
                    alt={stack.name}
                    className='w-full h-full object-contain'
                  />
                </div>
                <p className='text-s font-medium text-grey60 group-hover:text-grey85 transition-colors duration-200 text-center leading-tight'>
                  {stack.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Stacks
