import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
// import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <div className='flex items-center justify-between py-3 border-b border-b-[#DCDCDC]'>
      <Logo />
      <Navbar />
      {/* <ToggleTheme /> */}
    </div>
  )
}

export default Header