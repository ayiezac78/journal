import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { links } from '@/js/links'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import InlineSVG from 'react-inlinesvg'



const dataLinks = links.map((link, index) => {
  return (
    <SheetClose asChild key={index}>
      <NavLink className="navlinks text-lg flex items-center gap-3 mb-3" to={link.path}>
        <InlineSVG src={link.boxIconName} />
        {link.pathname}
      </NavLink>
    </SheetClose>
  );
});

const MobileNavbar = () => {
  return (
    <nav className='block md:hidden'>
      <Sheet>
        <SheetTrigger className=' border-2 border-[#6B7280] rounded-full p-2 text-[#fff] bg-[#6B7280]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='gap-4'>
            <SheetTitle className='text-start text-3xl'>Menu</SheetTitle>
            <SheetDescription>
              {dataLinks}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <Outlet />
    </nav>

  )
}

export default MobileNavbar