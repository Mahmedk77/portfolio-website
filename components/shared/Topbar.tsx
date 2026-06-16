"use client";

import { useEffect, useState } from 'react'
import { Mail, User, Zap } from 'lucide-react'
import Ping from "@/components/shared/Ping"

const navItems = [
  { label: "Home", sectionId: "home", icon: <User className="text-grey60" size={18} /> },
  { label: "Services", sectionId: "services", icon: <Zap className="text-grey60" size={18} /> },
  { label: "Contact", sectionId: "contact", icon: <Mail className="text-grey60" size={18} /> },
]

const Topbar = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Asia/Karachi',
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='px-6 py-6 bg-[rgb(15,15,15)] border-b border-[#18181A]'>
      <div className='flex flex-row justify-between items-center'>
        <div className='max-sm:hidden flex gap-2 items-center justify-center border border-grey40 px-4 py-2 rounded-full bg-[#18181A]'>
          <Ping />
          <p className='text-s text-grey85 font-medium'>Available For Work</p>
        </div>

        <div className='flex gap-4 items-center justify-center max-lg:hidden'>
          <p className='text-s font-medium text-grey60'>Local Time (PKT)</p>
          <div className='p-2 px-4 bg-[#18181A] border-grey40 rounded-md flex items-center justify-center'>
            <p className='text-grey85 text-m font-semibold'>{time || '00:00:00'}</p>
          </div>
        </div>

        <div className='lg:hidden flex justify-between items-center gap-2 sm:gap-4'>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="flex items-center justify-center gap-2 px-3 sm:px-4 rounded-md p-2 hover:bg-[#18181A] transition-all duration-200 cursor-pointer"
            >
              {item.icon}
              <p className='text-grey90 text-s font-medium uppercase'>{item.label}</p>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Topbar
