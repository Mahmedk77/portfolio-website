"use client";

import { Button } from '../ui/button'
import { ArrowUp, Mail, User, Zap } from 'lucide-react'
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  sectionId: string;
  icon: React.ReactNode;
}

const TooltipButton = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const scrollToSection = () => {
    document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={scrollToSection}
        className={`flex rounded-md p-2 ${isActive ? "bg-[#18181A]" : ""} hover:bg-[#18181A] transition-all duration-500 cursor-pointer`}
      >
        {item.icon}
      </button>

      <div className={`absolute left-12 z-50 px-4 py-2 rounded-lg bg-[#18181A] text-white text-heading-xs font-medium tracking-widest whitespace-nowrap
        border border-[#2a2a2a] shadow-lg transition-all duration-200
        ${hovered ? "opacity-100 translate-x-5 pointer-events-auto" : "opacity-0 -translate-x-1 pointer-events-none"}`}
      >
        {item.label.toUpperCase()}
        <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#18181A] border-l border-b border-[#2a2a2a] rotate-45" />
      </div>
    </div>
  );
};

const navItems: NavItem[] = [
  { label: "Home", sectionId: "home", icon: <User className="text-grey60" size={30} /> },
  { label: "Services", sectionId: "services", icon: <Zap className="text-grey60" size={30} /> },
  { label: "Contact", sectionId: "contact", icon: <Mail className="text-grey60" size={30} /> },
];

const LeftSidebar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const container = document.querySelector('.main-scroll-container')
    if (!container) return

    const handleScroll = () => {
      const sectionIds = ['home', 'experience', 'stacks', 'services', 'contact']
      const containerRect = container.getBoundingClientRect()
      let current = 'home'

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const elRect = el.getBoundingClientRect()
        if (elRect.top - containerRect.top <= containerRect.height * 0.4) {
          current = id
        }
      }
      setActiveSection(current)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    document.querySelector('.main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className='flex flex-col items-end justify-between border-r pl-18 pr-12 py-12 bg-[#0F0F0F] max-lg:hidden border-[#18181A]'>
      <div className='rounded-full border-2 border-grey40 p-1.5 bg-[#18181A]'>
        <Image
          src={"/userImage6.png"}
          alt='profile_icon'
          width={64}
          height={64}
          className='w-full h-full object-contain rounded-full bg-black grayscale-40'
        />
      </div>

      <div className='flex flex-col items-center justify-center gap-4'>
        {navItems.map((item) => (
          <TooltipButton
            key={item.label}
            item={item}
            isActive={activeSection === item.sectionId}
          />
        ))}
      </div>

      <div>
        <Button
          onClick={scrollToTop}
          className='bg-[#0F0F0F] hover:bg-[#18181A] cursor-pointer transition-all p-4 duration-300'
        >
          <ArrowUp className="text-grey60 size-6" />
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
