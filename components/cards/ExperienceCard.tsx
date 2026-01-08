import Link from 'next/link'
import React from 'react'

interface Params {
  id: number
  logo: string
  companyName: string
  companyType: string
  companyLink: string
  companyWebsite: string
  duration: string
  jobTitle: string
  jobDescription: string
}

const ExperienceCard = ({
  id,
  logo,
  companyName,
  companyType,
  companyLink,
  companyWebsite,
  duration,
  jobTitle,
  jobDescription,
}: Params) => {
  return (
    <>
      {/* HEADER */}
      <div className='flex justify-between items-center '>
        <div className='flex gap-2 justify-center items-center'>
          
          {/* LOGO */}
          <div className='w-12.5 h-12.5 rounded-md bg-[#18181A] flex items-center justify-center'>
            {/* <img
              src={logo}
              alt={`${companyName} logo`}
              className='w-full h-full object-contain rounded-md'
            /> */}
          </div>

          {/* COMPANY INFO */}
          <div className='flex flex-col'>
            <div className='flex gap-4 items-center'>
              <h3 className='text-heading-m font-semibold'>
                {companyName}
              </h3>
              <p className='text-s text-grey60 rounded-full bg-dark6 border-dark8 px-3 py-1 font-medium shadow-md'>
                {companyType}
              </p>
            </div>

            <Link href={companyLink} target='_blank' className='text-m text-grey60 font-medium'>
              {companyWebsite}
            </Link>
          </div>
        </div>

        {/* DURATION */}
        <p className='text-heading-l font-bold'>
          {duration}
        </p>
      </div>

      {/* DETAILS */}
      <div className='p-4 rounded-md bg-dark2 mt-5 flex flex-col'>
        <h4 className='text-heading-xs'>
          {jobTitle}
        </h4>

        <p className='text-m font-medium text-grey60 mt-2'>
          {jobDescription}
        </p>
      </div>
    </>
  )
}

export default ExperienceCard
