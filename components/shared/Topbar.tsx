import { Dot } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <nav className='border flex justify-between items-center px-6 py-6 bg-[#0F0F0F]'>
        <div className='flex gap-2 items-center justify-center border border-grey40 px-4 py-2 rounded-full bg-[#18181A]'>
            <Dot color="#00c278"/>
            <p className='text-s text-grey85 font-medium'>Avaiable For Work</p>
        </div>
        <div className='flex gap-4 items-center justify-center'>
            <p className='text-s font-medium text-grey60'>Local Time (IST)</p>
            <div className='p-2 px-4 bg-[#18181A] border-grey40 rounded-md flex items-center justify-center'>
              <p className='text-grey85 text-m font-semibold'>00:00:00</p>
            </div>
        </div>
    </nav>
  )
}

export default Topbar