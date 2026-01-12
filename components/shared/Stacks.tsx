import { stacks } from '@/constants';
import { ArrowRight, Layers } from 'lucide-react'
import React from 'react'
import StackCard from '../cards/StackCard';

const Stacks = () => {
  const flag = false;
  return (
    <>
    <section className='px-32 text-white'> 
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 justify-start items-center'>
        <Layers />          
        <h2 className='text-heading-xl font-bold tracking-normal'>My Stacks</h2>
        </div>
        <p className='text-l text-grey60 font-medium'>Focused on building modern and high-performance web applications. </p>
      </div>
      <div className='mt-7.5'> 
        <div className='flex justify-center items-center px-32 bg-[#18181A] py-2 rounded-md '>
          <p className='text-heading-xs font-semibold'>Front-end</p>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-4 '>
          {
            stacks.frontend.map((stack) => (
              <StackCard 
              key={stack.name}
              logo={stack.logo}
              name={stack.name}
              description= {stack.description}
              />
            ))
          }
        </div>
      </div>

      <div className='mt-7.5'> 
        <div className='flex justify-center items-center px-32 bg-[#18181A] py-2 rounded-md '>
          <p className='text-heading-xs font-semibold'>Back-end</p>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-4 '>
          {
            stacks.backend.map((stack) => (
              <StackCard 
              key={stack.name}
              logo={stack.logo}
              name={stack.name}
              description= {stack.description}
              />
            ))
          }
        </div>
      </div>

       <div className='mt-7.5'> 
        <div className='flex justify-center items-center px-32 bg-[#18181A] py-2 rounded-md '>
          <p className='text-heading-xs font-semibold'>Tools</p>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-4 '>
          {
            stacks.tools.map((stack) => (
              <StackCard 
              key={stack.name}
              logo={stack.logo}
              name={stack.name}
              description= {stack.description}
              />
            ))
          }
        </div>
      </div>

       <div className='mt-7.5'> 
        <div className='flex justify-center items-center px-32 bg-[#18181A] py-2 rounded-md '>
          <p className='text-heading-xs font-semibold'>Artificial intelligence</p>
        </div>
        <div className='grid grid-cols-2 gap-2 mt-4 '>
          {
            stacks.ai.map((stack) => (
              <StackCard 
              key={stack.name}
              logo={stack.logo}
              name={stack.name}
              description= {stack.description}
              />
            ))
          }
        </div>
      </div>
      
    </section> 
    </>
  )
}

export default Stacks