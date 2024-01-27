import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '@/js/links'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const dataLinks = links.map((link, index) => {
  return (
    <li key={index} className='flex items-center gap-3 mb-3'>
      <box-icon color='#554B3F' name={link.boxIconName}></box-icon>
      <Link className="navlinks text-md" to={link.path}>{link.pathname}</Link>
    </li>
  );
});

const MobileNavbar = () => {
  return (
    <div className='block md:hidden'>
      <Sheet>
        <SheetTrigger className=' border-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='text-start'>Menu</SheetTitle>
            <SheetDescription>
              <ul>{dataLinks}</ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>

  )
}

export default MobileNavbar