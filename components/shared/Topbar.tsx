  "use client";

  import { Dot, Mail, User, Zap } from 'lucide-react'
import Link from 'next/link';
  import { usePathname } from 'next/navigation'

  const Topbar = () => {

    const sidebarList = [
      {label: "Home", route:"/", icon: <User className="text-grey60" size={18}/>},
      {label: "Services", route:"/services", icon: <Zap className="text-grey60" size={18}/>},
      {label: "Contact", route:"/contact", icon: <Mail className="text-grey60" size={18}/>},
    ]
    
    const pathName = usePathname();

    return (

      <nav className='px-6 py-6 bg-[rgb(15,15,15)] border-b border-[#18181A]'>
        <div className='flex flex-row justify-between items-center '>
            <div className='max-sm:hidden flex gap-2 items-center justify-center border border-grey40 px-4 py-2 rounded-full bg-[#18181A] '>
              <Dot color="#00c278"/>
              <p className='text-s text-grey85 font-medium'>Available For Work</p>
            </div>
            <div className='flex gap-4 items-center justify-center max-lg:hidden'>
                <p className='text-s font-medium text-grey60'>Local Time (IST)</p>
                <div className='p-2 px-4 bg-[#18181A] border-grey40 rounded-md flex items-center justify-center'>
                  <p className='text-grey85 text-m font-semibold'>00:00:00</p>
                </div>
            </div>
            <div className='lg:hidden flex justify-between items-center gap-4 '>
              {
              sidebarList.map((item) => {
                  const isActive = (pathName.includes(item.route) && item.route.length > 1) || pathName === item.route;
                  return(
                  <Link 
                    key={item.label} href={`${item.route}`} 
                    className={`flex items-center justify-center gap-2 px-4 rounded-md p-2 ${ isActive ? "bg-[#18181A]" : ""}
                    hover:bg-[#18181A] transition-all duration-200`}>
                      {item.icon}
                      <p className='text-grey90 text-s font-medium uppercase'>{item.label}</p>
                    </Link>
                )})
              }
            </div>
        </div>          
      </nav>
    )
  }

  export default Topbar