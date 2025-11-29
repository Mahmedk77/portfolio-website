"use client";


import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Mail, User, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LeftSidebar = () => {

  const sidebarList = [
    {label: "Home", route:"/", icon: <User className="text-grey60"/>},
    {label: "Services", route:"/services", icon: <Zap className="text-grey60"/>},
    {label: "Contact", route:"/contact", icon: <Mail className="text-grey60"/>},
  ]
  
  const path = usePathname();
  
  return (
    <section className='flex flex-col items-end justify-between px-8 py-12 border bg-[#0F0F0F]'>
      <div className='text-white'>Profile Image</div>
      <div className='flex flex-col items-center justify-center gap-4'>
        {
          sidebarList.map((item) =>{
            const isActive = (path.includes(item.route) && item.route.length > 1) || path === item.route
            return (
              <Link key={item.label} href={`${item.route}`} className={`flex rounded-md p-2 ${ isActive ? "bg-[#18181A]" : "bg-none"}`}>
                {item.icon}
                <p className='sm:hidden'>{item.label}</p>
              </Link>
          )})
        }
        
      </div>
      <div>
        <Button>
          <Mail color='#D9D9D9'/>
        </Button>
      </div>
    </section>
  )
}

export default LeftSidebar