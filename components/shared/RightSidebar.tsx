"use client";

import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mahmedk77",
    icon: <Github className="text-grey60" size={25} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahmedkk",
    icon: <Linkedin className="text-grey60" size={25} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="text-grey60" size={25} />,
  },
]

const RightSidebar = () => {
  return (
    <section className='flex flex-col items-start justify-center border-l pr-18 pl-12 py-12 bg-[#0F0F0F] border-[#18181A] max-lg:hidden'>
      <div className='flex flex-col items-center justify-center gap-4'>
        {socialLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className="flex rounded-md p-2 bg-dark4 hover:bg-[#18181A] transition-all duration-200"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RightSidebar
