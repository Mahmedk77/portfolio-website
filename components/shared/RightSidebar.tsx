"use client";


import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowUp, Github, Linkedin, Mail, Phone, Twitter, User, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';

const RightSidebar = () => {

  const sidebarList = [
    {label: "Home", route:"https://github.com/Mahmedk77", icon: <Github className="text-grey60" size={25}/>},
    {label: "Services", route:"/services", icon: <Linkedin className="text-grey60" size={25}/>},
    {label: "Contact", route:"/contact", icon: <Twitter className="text-grey60" size={25}/>},
  ]
  
  const pathName = usePathname();

  return (
    <section className=' flex flex-col items-start justify-center border-l pr-18 pl-12 py-12 bg-[#0F0F0F] max-lg:hidden'>
     
      <div className='flex flex-col items-center justify-center gap-4 max-sm:hidden'>
        {
          sidebarList.map((item) =>{
            const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route
            return (
              <Link key={item.label} href={`${item.route}`} className={`flex rounded-md p-2 bg-dark4 hover:bg-[#18181A] transition-all duration-200`}>
                {item.icon}
              </Link>
          )})
        }
        
      </div>

    </section>
  )
}

export default RightSidebar