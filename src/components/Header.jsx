import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-3 border-b border-b-[#DCDCDC]'>
      <Logo />
      <Sheet>
        <SheetTrigger className=' border rounded-full p-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-slate-400 border-0">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              <Navbar />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* <ToggleTheme /> */}
    </div>
  )
}

export default Header