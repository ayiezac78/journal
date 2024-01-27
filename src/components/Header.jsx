import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'


// import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-3'>
      <Logo />
      <Navbar />
      <MobileNavbar />
      {/* <ToggleTheme /> */}
    </div>
  )
}

export default Header