import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'


// import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 border-b-2 border-b-slate-300'>
      <Logo />
      <Navbar />
      <MobileNavbar />
      {/* <ToggleTheme /> */}
    </header>
  )
}

export default Header