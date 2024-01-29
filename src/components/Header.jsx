import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import { Link } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import logo from '../assets/images/svg/logo-no-background.svg'


// import ToggleTheme from './ToggleTheme'

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setNavVisible(isScrollingUp || currentScrollPos === 0);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header style={{ top: isNavVisible ? 0 : -100, transition: 'top 0.3s' }} className={`flex items-center justify-between py-3 px-4 sm:px-6 lg:px-10 fixed top-0 w-full bg-[#F1E8DD]`}>
      <Link to='/'>
        <InlineSVG src={logo} />
      </Link>
      <Navbar />
      <MobileNavbar />
      {/* <ToggleTheme /> */}
    </header>
  )
}

export default Header