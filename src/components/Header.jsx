import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import logo from '../assets/images/svg/logo-no-background.svg'

// import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <header className='flex items-center justify-between py-3 border-b-2 border-b-slate-300 px-4 sm:px-6 lg:px-10 container'>
      {/* <Logo /> */}
      <Link to='/'>
        {/* <span className='logo'>journallery</span> */}
        <InlineSVG src={logo} />
      </Link>
      <Navbar />
      <MobileNavbar />
      {/* <ToggleTheme /> */}
    </header>
  )
}

export default Header