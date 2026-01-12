import { ArrowRight } from 'lucide-react'
import React from 'react'

interface Props {
    logo: string,
    name: string,
    description: string
}

const StackCard = ({
    logo, name, description
}: Props) => {
  return (
    <>
    <div className="group flex justify-between items-center px-3.5 
        py-4 bg-dark4 rounded-lg hover:bg-dark7 
        border-dark8 transition-all duration-300 ">
     <div className='flex gap-2 items-center justify-center'>
    <div className='w-11.5 h-11.5 p-2 rounded-md bg-[#18181A] flex items-center justify-center border-dark13 shadow-md'>
             <img
              src={logo}
              alt={`stack logo`}
              className='w-full h-full object-contain'
            />
        </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-heading-s font-medium'>{name}</h3>
                <p  className='text-m font-medium text-grey60 '>{description}</p>
            </div>
    </div>
     <div className="group-hover:-rotate-45 transition-all duration-200 ">
          <ArrowRight color='#999999' />
     </div>
    </div>
    </>
  )
}

export default StackCard