import React from 'react'

interface Props {
    icon: React.ReactNode;
    heading: String;
    description: String;
}

const Heading = ({icon, heading, description}: Props) => {
  return (
     <div className='flex flex-col gap-2'>
        <div className='flex gap-2 justify-start items-center'>
        {icon}
          <h2 className='text-heading-xl font-bold tracking-normal'>{heading}</h2>
        </div>
        <p className='text-l text-grey60 font-medium'>{description}</p>
      </div>
  )
}

export default Heading