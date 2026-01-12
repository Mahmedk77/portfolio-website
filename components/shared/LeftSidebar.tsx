"use client";

import { Button } from '../ui/button'
import { ArrowUp, Mail, User, Zap } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image';

const LeftSidebar = () => {

  const sidebarList = [
    {label: "Home", route:"/", icon: <User className="text-grey60" size={25}/>},
    {label: "Services", route:"/services", icon: <Zap className="text-grey60" size={25}/>},
    {label: "Contact", route:"/contact", icon: <Mail className="text-grey60" size={25}/>},
  ]
  
  const pathName = usePathname();
  
  return (
    <section className='flex flex-col items-end justify-between border-r pl-18 pr-12 py-12 bg-[#0F0F0F] max-lg:hidden border-[#18181A]'>
      <div className='rounded-full border border-grey40'>
      <Image 
      src={"/userImage2.jpg"}
      alt='profile_icon'
      width={64}
      height={64}
      className='w-full h-full object-contain rounded-full '/>
      </div>
      <div className='flex flex-col items-center justify-center gap-4'>
        {
          sidebarList.map((item) =>{
            const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route
            return (
              <Link 
              key={item.label} href={`${item.route}`} 
              className={`flex rounded-md p-2 ${ isActive ? "bg-[#18181A]" : "bg-none"}
              hover:bg-[#18181A] transition-all duration-300`}>
                {item.icon}
                
              </Link>
          )})
        }
        
      </div>
      <div className=''>
        <Button className='bg-[#0F0F0F] hover:bg-[#18181A] cursor-pointer transition-all duration-200'>
          <ArrowUp className="text-grey60 size-6"   />
        </Button>
      </div>
    </section>
  )
}

export default LeftSidebar